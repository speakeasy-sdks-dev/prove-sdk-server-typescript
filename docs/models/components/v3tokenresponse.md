# V3TokenResponse

## Example Usage

```typescript
import { V3TokenResponse } from "@prove-identity/prove-api/models/components";

let value: V3TokenResponse = {
  accessToken: "eyJ...",
  expiresIn: 3600,
  refreshExpiresIn: 3600,
  refreshToken: "eyJ...",
  tokenType: "Bearer",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `accessToken`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | AccessToken returns the access token as a string.                                       | eyJ...                                                                                  |
| `expiresIn`                                                                             | *number*                                                                                | :heavy_check_mark:                                                                      | ExpiresIn returns the lifetime of the token in seconds.                                 | 3600                                                                                    |
| `refreshExpiresIn`                                                                      | *number*                                                                                | :heavy_minus_sign:                                                                      | RefreshExpiresIn returns the lifetime of the token in seconds. Not currently supported. | 3600                                                                                    |
| `refreshToken`                                                                          | *string*                                                                                | :heavy_minus_sign:                                                                      | RefreshToken returns the refresh token as a string. Not currently supported.            | eyJ...                                                                                  |
| `tokenType`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | TokenType returns the type of token.                                                    | Bearer                                                                                  |