/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  DataSourceInternal,
  DataSourceInternal$inboundSchema,
  DataSourceInternal$Outbound,
  DataSourceInternal$outboundSchema,
} from "./datasourceinternal.js";

export type IDVDataInternal = {
  dataSource1?: DataSourceInternal | undefined;
  dataSource2?: DataSourceInternal | undefined;
  multiCIPConfidence?: string | undefined;
};

/** @internal */
export const IDVDataInternal$inboundSchema: z.ZodType<
  IDVDataInternal,
  z.ZodTypeDef,
  unknown
> = z.object({
  dataSource1: DataSourceInternal$inboundSchema.optional(),
  dataSource2: DataSourceInternal$inboundSchema.optional(),
  multiCIPConfidence: z.string().optional(),
});

/** @internal */
export type IDVDataInternal$Outbound = {
  dataSource1?: DataSourceInternal$Outbound | undefined;
  dataSource2?: DataSourceInternal$Outbound | undefined;
  multiCIPConfidence?: string | undefined;
};

/** @internal */
export const IDVDataInternal$outboundSchema: z.ZodType<
  IDVDataInternal$Outbound,
  z.ZodTypeDef,
  IDVDataInternal
> = z.object({
  dataSource1: DataSourceInternal$outboundSchema.optional(),
  dataSource2: DataSourceInternal$outboundSchema.optional(),
  multiCIPConfidence: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IDVDataInternal$ {
  /** @deprecated use `IDVDataInternal$inboundSchema` instead. */
  export const inboundSchema = IDVDataInternal$inboundSchema;
  /** @deprecated use `IDVDataInternal$outboundSchema` instead. */
  export const outboundSchema = IDVDataInternal$outboundSchema;
  /** @deprecated use `IDVDataInternal$Outbound` instead. */
  export type Outbound = IDVDataInternal$Outbound;
}
