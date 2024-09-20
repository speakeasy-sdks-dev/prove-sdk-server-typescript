# KYCInternal

## Example Usage

```typescript
import { KYCInternal } from "@prove-identity/prove-api/models/components";

let value: KYCInternal = {
  amlTypeLists: [
    {
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
    },
    {
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
    },
  ],
  totalHits: 9,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `amlTypeLists`                                                                                     | [components.AmlTypeListResponseInternal](../../models/components/amltypelistresponseinternal.md)[] | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `totalHits`                                                                                        | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |