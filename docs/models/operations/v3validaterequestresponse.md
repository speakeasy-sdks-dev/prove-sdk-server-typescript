# V3ValidateRequestResponse

## Example Usage

```typescript
import { V3ValidateRequestResponse } from "@prove-identity/prove-api/models/operations";

let value: V3ValidateRequestResponse = {
    httpMeta: {
        response: new Response('{"message": "hello world"}', {
            headers: { "Content-Type": "application/json" },
        }),
        request: new Request("https://example.com"),
    },
    v3ValidateResponse: {
        challengeMissing: true,
        next: {
            "v3-challenge": "/v3/challenge",
        },
        phoneNumber: "2001001686",
        success: true,
    },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                              | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `v3ValidateResponse`                                                                                                    | [components.V3ValidateResponse](../../models/components/v3validateresponse.md)                                          | :heavy_minus_sign:                                                                                                      | Successful request.                                                                                                     | {<br/>"next": {<br/>"v3-challenge": "/v3/challenge"<br/>},<br/>"phoneNumber": "2001001686",<br/>"success": true,<br/>"challengeMissing": true<br/>} |