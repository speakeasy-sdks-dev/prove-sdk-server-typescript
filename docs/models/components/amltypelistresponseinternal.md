# AmlTypeListResponseInternal

## Example Usage

```typescript
import { AmlTypeListResponseInternal } from "@prove-identity/prove-api/models/components";

let value: AmlTypeListResponseInternal = {
    amlType: "amlType",
    fields: [
        {
            name: "name",
            source: "source",
            value: "value",
        },
        {
            name: "name",
            source: "source",
            value: "value",
        },
    ],
    listHits: 7,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `amlType`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `fields`                                                                                             | [components.KYCFieldTypeResponseInternal](../../models/components/kycfieldtyperesponseinternal.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `listHits`                                                                                           | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |