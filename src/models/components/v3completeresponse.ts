/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  IDVDataInternal,
  IDVDataInternal$inboundSchema,
  IDVDataInternal$Outbound,
  IDVDataInternal$outboundSchema,
} from "./idvdatainternal.js";
import {
  KYCInternal,
  KYCInternal$inboundSchema,
  KYCInternal$Outbound,
  KYCInternal$outboundSchema,
} from "./kycinternal.js";

export type V3CompleteResponse = {
  idv?: IDVDataInternal | undefined;
  kyc?: KYCInternal | undefined;
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
export const V3CompleteResponse$inboundSchema: z.ZodType<
  V3CompleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  idv: IDVDataInternal$inboundSchema.optional(),
  kyc: KYCInternal$inboundSchema.optional(),
  next: z.record(z.string()),
  success: z.boolean(),
});

/** @internal */
export type V3CompleteResponse$Outbound = {
  idv?: IDVDataInternal$Outbound | undefined;
  kyc?: KYCInternal$Outbound | undefined;
  next: { [k: string]: string };
  success: boolean;
};

/** @internal */
export const V3CompleteResponse$outboundSchema: z.ZodType<
  V3CompleteResponse$Outbound,
  z.ZodTypeDef,
  V3CompleteResponse
> = z.object({
  idv: IDVDataInternal$outboundSchema.optional(),
  kyc: KYCInternal$outboundSchema.optional(),
  next: z.record(z.string()),
  success: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3CompleteResponse$ {
  /** @deprecated use `V3CompleteResponse$inboundSchema` instead. */
  export const inboundSchema = V3CompleteResponse$inboundSchema;
  /** @deprecated use `V3CompleteResponse$outboundSchema` instead. */
  export const outboundSchema = V3CompleteResponse$outboundSchema;
  /** @deprecated use `V3CompleteResponse$Outbound` instead. */
  export type Outbound = V3CompleteResponse$Outbound;
}
