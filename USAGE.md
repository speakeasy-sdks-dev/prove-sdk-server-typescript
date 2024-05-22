<!-- Start SDK Example Usage [usage] -->
```typescript
import { Proveapi } from "@prove/prove-api";

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
<!-- End SDK Example Usage [usage] -->