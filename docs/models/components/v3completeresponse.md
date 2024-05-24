# V3CompleteResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `changeDetected`                                                   | *boolean*                                                          | :heavy_check_mark:                                                 | ChangeDetected returns true if the individual information changed. | false                                                              |
| `next`                                                             | Record<string, *string*>                                           | :heavy_check_mark:                                                 | Next contains the next set of allowed calls in the same flow.      | {<br/>"done": null<br/>}                                           |
| `success`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | Success returns true if the individual was verified successfully.  | true                                                               |