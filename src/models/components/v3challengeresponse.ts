/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Individual, Individual$ } from "./individual";
import * as z from "zod";

export type V3ChallengeResponse = {
    individual: Individual;
    /**
     * Next contains the next set of allowed calls in the same flow.
     */
    next: { [k: string]: string };
    /**
     * Success returns true if the challenge was accepted and user info retrieved.
     */
    success: boolean;
};

/** @internal */
export namespace V3ChallengeResponse$ {
    export const inboundSchema: z.ZodType<V3ChallengeResponse, z.ZodTypeDef, unknown> = z
        .object({
            individual: Individual$.inboundSchema,
            next: z.record(z.string()),
            success: z.boolean(),
        })
        .transform((v) => {
            return {
                individual: v.individual,
                next: v.next,
                success: v.success,
            };
        });

    export type Outbound = {
        individual: Individual$.Outbound;
        next: { [k: string]: string };
        success: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V3ChallengeResponse> = z
        .object({
            individual: Individual$.outboundSchema,
            next: z.record(z.string()),
            success: z.boolean(),
        })
        .transform((v) => {
            return {
                individual: v.individual,
                next: v.next,
                success: v.success,
            };
        });
}
