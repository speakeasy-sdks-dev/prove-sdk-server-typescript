/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type V3ValidateRequestResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successful request.
     */
    v3ValidateResponse?: components.V3ValidateResponse | undefined;
};

/** @internal */
export namespace V3ValidateRequestResponse$ {
    export const inboundSchema: z.ZodType<V3ValidateRequestResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            V3ValidateResponse: components.V3ValidateResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                V3ValidateResponse: "v3ValidateResponse",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        V3ValidateResponse?: components.V3ValidateResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V3ValidateRequestResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            v3ValidateResponse: components.V3ValidateResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                v3ValidateResponse: "V3ValidateResponse",
            });
        });
}
