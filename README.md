# Prove Server SDK in TypeScript

## SDK Installation

Download the SDK from this repository.

<!-- No SDK Installation -->

## SDK Example Usage

### Example

```typescript
import { ProveAPI } from "@payfone/prove-api";
import { NewOAuthClientFromEnv, OAuthClient, WithAuthorization } from "@payfone/prove-api/sdk/oauth"

async function run() {
    // Create OAuth client from environment variables.
    const oauthClient: OAuthClient = NewOAuthClientFromEnv()

    const proveEnv = "uat-us" // Use UAT in US region.

    // Create client for Prove Auth API.
    const sdk = new ProveAPI({
        server: proveEnv,
        security: WithAuthorization(oauthClient, proveEnv)
    });

    // FIXME: Add endpoints here.

    // // Build the AuthStart request.
    // const authStartRequest = new authstart.AuthStartBuilder()
    //     .withProveKey()
    //     .build()

    // // Start the auth flow.
    // const authStartResponse = await sdk.auth.authStartRequest(authStartRequest)
    // const authStartResult = authStartResponse.authStartResponse
    // if (!authStartResult) {
    //     console.error("Auth start error.")
    //     return
    // }

    // // Get the authToken for the client SDK.
    // const authToken = authStartResult.authToken
    // const authId = authStartResult.authId

    // //
    // // Client SDK work happens here.
    // //

    // // Get the auth flow results.
    // const authFinishResponse = await sdk.auth.authFinishRequest({authId: authId})
    // const authFinishResult = authfinish.authFinishResult(authFinishResponse)

    // if (!authFinishResult.success()) {
    //     console.error("One or more authenticators failed: " + authFinishResult.errorString())
    // } else {
    //     console.info("Auth success!")
    // }
}

run();
```

### OAuth for Authentication

In order to access the Prove Auth API, you need to authenticate with your OAuth credentials. We provide a helper function that loads them already from environment variables:

```typescript
// Create OAuth client from environment variables.
const oauthClient: OAuthClient = NewOAuthClientFromEnv()
```

The credentials are pulled from these environment variables:
- `PROVE_USERNAME` - OAuth username.
- `PROVE_PASSWORD` - OAuth password.
- `PROVE_CLIENT_ID` - optional client ID - this is only required for Europe and India regions.
- `PROVE_SUBCLIENT_ID` - optional subclient ID - this may be required for Europe and India regions.

If you prefer to load the variables another way, you can pass them in to this function instead:

```typescript
// Create OAuth client with passed in variables.
const proveOAuthClient = new OAuthClient(
    proveUsername,
    provePassword,
    proveClientID,
    proveSubClientID,
)
```

<!-- No SDK Example Usage -->
<!-- No SDK Available Operations -->
<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,500          | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Proveapi } from "@payfone/prove-api";
import * as errors from "@payfone/prove-api/models/errors";

const proveapi = new Proveapi({
    auth: "<YOUR_AUTH_HERE>",
});

async function run() {
    let result;
    try {
        result = await proveapi.v3.v3ChallengeRequest({
            correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
            dob: "2024-05-02T00:00:00Z",
            last4SSN: "1234",
        });
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.ErrorT: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server | Variables |
| ----- | ------ | --------- |
| `uat-us` | `https://api.uat.proveapis.com` | None |

```typescript
import { Proveapi } from "@payfone/prove-api";

const proveapi = new Proveapi({
    server: "uat-us",
    auth: "<YOUR_AUTH_HERE>",
});

async function run() {
    const result = await proveapi.v3.v3ChallengeRequest({
        correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
        dob: "2024-05-02T00:00:00Z",
        last4SSN: "1234",
    });

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Proveapi } from "@payfone/prove-api";

const proveapi = new Proveapi({
    serverURL: "https://api.uat.proveapis.com",
    auth: "<YOUR_AUTH_HERE>",
});

async function run() {
    const result = await proveapi.v3.v3ChallengeRequest({
        correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
        dob: "2024-05-02T00:00:00Z",
        last4SSN: "1234",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Proveapi } from "@payfone/prove-api";
import { HTTPClient } from "@payfone/prove-api/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Proveapi({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `auth`       | oauth2       | OAuth2 token |

To authenticate with the API the `auth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Proveapi } from "@payfone/prove-api";

const proveapi = new Proveapi({
    auth: "<YOUR_AUTH_HERE>",
});

async function run() {
    const result = await proveapi.v3.v3ChallengeRequest({
        correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
        dob: "2024-05-02T00:00:00Z",
        last4SSN: "1234",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->


