/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HTTPClient } from "./http";
import { RetryConfig } from "./retries";
import { Params, pathToFunc } from "./url";

/**
 * UAT for US Region
 */
export const ServerUatUs = "uat-us";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
    [ServerUatUs]: "https://api.uat.proveapis.com",
} as const;

export type SDKOptions = {
    auth?: string | (() => Promise<string>);

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    server?: keyof typeof ServerList;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
    let serverURL = options.serverURL;

    const params: Params = {};

    if (!serverURL) {
        const server = options.server ?? ServerUatUs;
        serverURL = ServerList[server] || "";
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = {
    language: "typescript",
    openapiDocVersion: "1.0.0",
    sdkVersion: "0.1.0",
    genVersion: "2.335.5",
    userAgent: "speakeasy-sdk/typescript 0.1.0 2.335.5 1.0.0 @prove/prove-api",
} as const;
