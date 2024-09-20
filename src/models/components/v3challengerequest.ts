/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type V3ChallengeRequest = {
  /**
   * Correlation ID is the unique ID that Prove generates for the flow. It is returned from the Start endpoint and cannot be reused outside of a single flow.
   */
  correlationId: string;
  /**
   * DOB, an optional challenge, is the date of birth in one of these formats: YYYY-MM-DD, YYYY-MM, or MM-DD. Acceptable characters are: numeric with symbol '-'.
   */
  dob?: string | undefined;
  /**
   * SSN is either the full or last 4 numbers of the social security number. Acceptable characters are: numeric.
   */
  ssn?: string | undefined;
};

/** @internal */
export const V3ChallengeRequest$inboundSchema: z.ZodType<
  V3ChallengeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  correlationId: z.string(),
  dob: z.string().optional(),
  ssn: z.string().optional(),
});

/** @internal */
export type V3ChallengeRequest$Outbound = {
  correlationId: string;
  dob?: string | undefined;
  ssn?: string | undefined;
};

/** @internal */
export const V3ChallengeRequest$outboundSchema: z.ZodType<
  V3ChallengeRequest$Outbound,
  z.ZodTypeDef,
  V3ChallengeRequest
> = z.object({
  correlationId: z.string(),
  dob: z.string().optional(),
  ssn: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ChallengeRequest$ {
  /** @deprecated use `V3ChallengeRequest$inboundSchema` instead. */
  export const inboundSchema = V3ChallengeRequest$inboundSchema;
  /** @deprecated use `V3ChallengeRequest$outboundSchema` instead. */
  export const outboundSchema = V3ChallengeRequest$outboundSchema;
  /** @deprecated use `V3ChallengeRequest$Outbound` instead. */
  export type Outbound = V3ChallengeRequest$Outbound;
}
