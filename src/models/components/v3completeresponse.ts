/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V3CompleteResponse = {
    /**
     * ChangeDetected returns true if the individual information changed.
     */
    changeDetected: boolean;
    /**
     * Next contains the next set of allowed calls in the same flow.
     */
    next: { [k: string]: string };
    /**
     * Success returns true if the individual was verified successfully.
     */
    success: boolean;
};

/** @internal */
export namespace V3CompleteResponse$ {
    export const inboundSchema: z.ZodType<V3CompleteResponse, z.ZodTypeDef, unknown> = z.object({
        changeDetected: z.boolean(),
        next: z.record(z.string()),
        success: z.boolean(),
    });

    export type Outbound = {
        changeDetected: boolean;
        next: { [k: string]: string };
        success: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V3CompleteResponse> = z.object({
        changeDetected: z.boolean(),
        next: z.record(z.string()),
        success: z.boolean(),
    });
}
