# V3TokenRequest

## Example Usage

```typescript
import { V3TokenRequest } from "@prove-identity/prove-api/models/components";

let value: V3TokenRequest = {
  clientId: "customer_id",
  clientSecret: "secret",
  grantType: "client_credentials",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `clientId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | ClientID is the optional client ID.                                              | customer_id                                                                      |
| `clientSecret`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | ClientSecret is the client secret ID provided to the customer during onboarding. | secret                                                                           |
| `grantType`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | GrantType only allows option: `client_credentials`.                              | client_credentials                                                               |