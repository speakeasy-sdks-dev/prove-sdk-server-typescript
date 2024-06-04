import * as url from 'url';
import { Security } from "../models/components";
import { optEnv, reqEnv } from "./env";
import { ServerUatUs, ServerProdUs } from "../lib/config";

interface OAuthTokenResponse {
    access_token: string;
    expires_in: number;
}

export const OAuthServerList: { [key: string]: string } = {
    [ServerUatUs]: 'https://link.uat.proveapis.com',
    [ServerProdUs]: 'https://link.proveapis.com',
} as const;

export class OAuthClient {
    private refreshThreshold: number;

    private username: string;
    private password: string;
    private accessToken: string = '';
    private expiresAt: Date = new Date(0);

    private clientID?: string | undefined;
    private subClientID?: string | undefined;

    constructor(
        username: string,
        password: string,
        clientID?: string,
        subClientID?: string,
        refreshThreshold: number = 30 * 1000 // 30 seconds
    ) {
        if (!username || !password) {
            throw new Error('OAuth username or password missing');
        }

        this.username = username;
        this.password = password;
        this.clientID = clientID;
        this.subClientID = subClientID;
        this.refreshThreshold = refreshThreshold;
    }

    private async validToken(): Promise<string> {
        if (this.accessToken && new Date().getTime() < this.expiresAt.getTime() - this.refreshThreshold) {
            return this.accessToken;
        }

        this.accessToken = '';

        return this.accessToken;
    }

    async AccessToken(URL: string): Promise<string> {
        const token = await this.validToken();
        if (token) {
            return token;
        }

        const tokenServiceURL = `${URL}/v3/token`;

        const data = new url.URLSearchParams();
        data.append('username', this.username);
        data.append('password', this.password);
        data.append('grant_type', 'password');
        if (this.clientID) data.append('client_id', this.clientID);
        if (this.subClientID) data.append('pf-subclientid', this.subClientID);

        const requestOptions = {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };

        return fetch(tokenServiceURL, requestOptions)
            .then((response: any) => {
                if (!response.ok) throw new Error(`Invalid response code: ${response.status}`);
                return response.json();
            })
            .then((data: OAuthTokenResponse) => {
                this.accessToken = data.access_token;
                this.expiresAt = new Date(Date.now() + data.expires_in * 1000);
                return this.accessToken;
            });
    }
}

export function WithAuthorization(oauthClient: OAuthClient, serverEnv: string) {
    const serverURL = OAuthServerList[serverEnv] || serverEnv;

    return async (): Promise<string> => {
        return await oauthClient.AccessToken(serverURL);
    };
}

export function NewOAuthClientFromEnv(): OAuthClient {
    const oauthUsername = reqEnv("PROVE_USERNAME")
    const oauthPassword = reqEnv("PROVE_PASSWORD")
    const oauthClientId = optEnv("PROVE_CLIENT_ID")
    const oauthSubClientId = optEnv("PROVE_SUBCLIENT_ID")
    return new OAuthClient(oauthUsername, oauthPassword, oauthClientId, oauthSubClientId)
}