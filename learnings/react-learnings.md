# React cheat notes

## `useId`

- SSR HTML is built on the server, then hydrated on the client.
- A random/counter ID can differ between those two passes → hydration mismatch.
- `useId` returns the same string on both sides.
- You’re not doing SSR yet — that’s still why the hook exists (interview answer).

## Controlled vs uncontrolled inputs

- **Controlled:** React state is the source of truth (`value` + `onChange`).
- **Uncontrolled:** the DOM holds the value; read it on submit via `FormData` or a ref.
- Uncontrolled = less code; React Hook Form leans on this.
- Once state owns the value you can:
  - validate as they type
  - clear the form after submit
  - prefill from an API
  - disable the button conditionally
  - derive anything else from it
- None of that exists if the value only lives in the DOM.
