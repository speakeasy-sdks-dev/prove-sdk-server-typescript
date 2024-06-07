/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Security = {
    auth?: string | undefined;
};

/** @internal */
export namespace Security$ {
    export const inboundSchema: z.ZodType<Security, z.ZodTypeDef, unknown> = z.object({
        auth: z.string().optional(),
    });

    export type Outbound = {
        auth?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Security> = z.object({
        auth: z.string().optional(),
    });
}
