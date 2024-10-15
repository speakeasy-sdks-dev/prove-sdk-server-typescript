/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../models/components/index.js";
import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * UAT for US Region
 */
export const ServerUatUs = "uat-us";
/**
 * Prod for US Region
 */
export const ServerProdUs = "prod-us";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
  [ServerUatUs]: "https://platform.uat.proveapis.com",
  [ServerProdUs]: "https://platform.proveapis.com",
} as const;

export type SDKOptions = {
  /**
   * The security details required to authenticate the SDK
   */
  security?: components.Security | (() => Promise<components.Security>);

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
  timeoutMs?: number;
  debugLogger?: Logger;
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
  sdkVersion: "0.7.0",
  genVersion: "2.438.5",
  userAgent:
    "speakeasy-sdk/typescript 0.7.0 2.438.5 1.0.0 @prove-identity/prove-api",
} as const;
