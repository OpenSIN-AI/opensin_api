# Contributing

## Boundary Rules

Before adding an endpoint contract or top-level claim, answer:

1. Is this package-local API surface, or a broader platform/API ownership claim?
2. Does another OpenSIN repo already own the canonical source of truth?

### Put it in `opensin_api` if:
- it improves the standalone API package surface
- it clarifies package-local API usage and integration

### Do NOT put it in `opensin_api` if:
- it claims product or control-plane ownership
- it implies this repo alone owns all OpenSIN APIs
