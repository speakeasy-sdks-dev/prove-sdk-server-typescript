<!-- Start SDK Example Usage [usage] -->
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
        dob: "2024-05-02T00:00:00Z",
        emailAddress: "jdoe@example.com",
        finalTargetUrl: "https://www.example.com/landing-page",
        flowType: "mobile",
        ipAddress: "10.0.0.1",
        phoneNumber: "2001001686",
        ssn: "1234",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->