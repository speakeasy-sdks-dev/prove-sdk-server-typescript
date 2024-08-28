# V3
(*v3*)

## Overview

### Available Operations

* [v3TokenRequest](#v3tokenrequest) - Request OAuth token.
* [v3ChallengeRequest](#v3challengerequest) - Submit challenge.
* [v3CompleteRequest](#v3completerequest) - Complete flow.
* [v3StartRequest](#v3startrequest) - Start flow.
* [v3ValidateRequest](#v3validaterequest) - Validate phone number.

## v3TokenRequest

Send this request to request the OAuth token.

### Example Usage

```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi();

async function run() {
  const result = await proveapi.v3.v3TokenRequest({
    clientId: "customer_id",
    clientSecret: "secret",
    grantType: "client_credentials",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { v3V3TokenRequest } from "@prove-identity/prove-api/funcs/v3V3TokenRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore();

async function run() {
  const res = await v3V3TokenRequest(proveapi, {
    clientId: "customer_id",
    clientSecret: "secret",
    grantType: "client_credentials",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3TokenRequest](../../models/components/v3tokenrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3TokenRequestResponse](../../models/operations/v3tokenrequestresponse.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,500          | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## v3ChallengeRequest

Send this request to submit challenge information. Either a DOB or last 4 of SSN needs to be submitted if neither was submitted to the /start endpoint (challenge fields submitted to this endpoint will overwrite the /start endpoint fields submitted). It will return a correlation ID, user information, and the next step to call in the flow. This capability is only available in Prove Pre-Fill®, it's not available in Prove Identity®. You'll notice that when using Prove Identity®, if /validate is successful, it will then return `v3-complete` as one of the keys in the `Next` field map instead of `v3-challenge`.

### Example Usage

```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await proveapi.v3.v3ChallengeRequest({
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
    dob: "1981-01",
    ssn: "0596",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { v3V3ChallengeRequest } from "@prove-identity/prove-api/funcs/v3V3ChallengeRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await v3V3ChallengeRequest(proveapi, {
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
    dob: "1981-01",
    ssn: "0596",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3ChallengeRequest](../../models/components/v3challengerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3ChallengeRequestResponse](../../models/operations/v3challengerequestresponse.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,500          | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## v3CompleteRequest

Send this request to verify the user and complete the flow. It will return a correlation ID, user information, and the next step to call in the flow. At least a first name, last name, or SSN is required to verify ownership.

### Example Usage

```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await proveapi.v3.v3CompleteRequest({
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
    individual: {
      addresses: [
        {
          address: "39 South Trail",
          city: "San Antonio",
          extendedAddress: "Apt 23",
          postalCode: "78285",
          region: "TX",
        },
        {
          address: "4861 Jay Junction",
          city: "Boston",
          extendedAddress: "Apt 78",
          postalCode: "02208",
          region: "MS",
        },
      ],
      dob: "2024-05-02T00:00:00Z",
      emailAddresses: [
        "jdoe@example.com",
        "dsmith@example.com",
      ],
      firstName: "Tod",
      last4SSN: "1234",
      lastName: "Weedall",
      ssn: "265228370",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { v3V3CompleteRequest } from "@prove-identity/prove-api/funcs/v3V3CompleteRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await v3V3CompleteRequest(proveapi, {
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
    individual: {
      addresses: [
        {
          address: "39 South Trail",
          city: "San Antonio",
          extendedAddress: "Apt 23",
          postalCode: "78285",
          region: "TX",
        },
        {
          address: "4861 Jay Junction",
          city: "Boston",
          extendedAddress: "Apt 78",
          postalCode: "02208",
          region: "MS",
        },
      ],
      dob: "2024-05-02T00:00:00Z",
      emailAddresses: [
        "jdoe@example.com",
        "dsmith@example.com",
      ],
      firstName: "Tod",
      last4SSN: "1234",
      lastName: "Weedall",
      ssn: "265228370",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3CompleteRequest](../../models/components/v3completerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3CompleteRequestResponse](../../models/operations/v3completerequestresponse.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,500          | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## v3StartRequest

Send this request to start a Prove flow. It will return a correlation ID and an authToken for the client SDK.

### Example Usage

```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await proveapi.v3.v3StartRequest({
    dob: "1981-01",
    emailAddress: "mpinsonm@dyndns.org",
    finalTargetUrl: "https://www.example.com/landing-page",
    flowType: "mobile",
    ipAddress: "10.0.0.1",
    phoneNumber: "2001001695",
    ssn: "0596",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { v3V3StartRequest } from "@prove-identity/prove-api/funcs/v3V3StartRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await v3V3StartRequest(proveapi, {
    dob: "1981-01",
    emailAddress: "mpinsonm@dyndns.org",
    finalTargetUrl: "https://www.example.com/landing-page",
    flowType: "mobile",
    ipAddress: "10.0.0.1",
    phoneNumber: "2001001695",
    ssn: "0596",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3StartRequest](../../models/components/v3startrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3StartRequestResponse](../../models/operations/v3startrequestresponse.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,500          | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## v3ValidateRequest

Send this request to check the phone number entered/discovered earlier in the flow is validated. It will return a correlation ID and the next step.

### Example Usage

```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await proveapi.v3.v3ValidateRequest({
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { v3V3ValidateRequest } from "@prove-identity/prove-api/funcs/v3V3ValidateRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await v3V3ValidateRequest(proveapi, {
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3ValidateRequest](../../models/components/v3validaterequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3ValidateRequestResponse](../../models/operations/v3validaterequestresponse.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,500          | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |
