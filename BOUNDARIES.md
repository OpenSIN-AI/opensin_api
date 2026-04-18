# opensin_api Boundaries

## Role
`opensin_api` is a standalone API package surface for OpenSIN integrations.

Short version:

- **This repo = package/API surface**
- **Not this repo = sole owner of core runtime, product shell, or full control-plane behavior**

---

## Canonical Ownership

| Concern | Canonical Repo |
|---|---|
| Standalone API package surface | `opensin_api` |
| Free/open runtime core | `OpenSIN` |
| Product web app | `OpenSIN-WebApp` |
| Internal ops control plane | `ai-agent-system` |
| Official documentation | `OpenSIN-documentation` |

---

## Hard rules

- Keep ownership claims scoped to the package/API surface.
- Do not imply this repo alone owns the whole OpenSIN API story if core or app/control-plane repos also define API surfaces.
- Do not redefine product, ops, docs, or runtime canon from here.
