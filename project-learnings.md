# Interview revision notes

## Naming
- PascalCase = type or React component
- camelCase = values / variables

## Tooling
- Prettier format: `npx prettier --write src eslint.config.js`
- Git SSL issuer error (local workaround): `$env:GIT_SSL_NO_VERIFY = "true"`

## `components/` vs `features/`
- **Shared UI** (`components/`): knows nothing about the domain. No `Project`, `Task`, `User` imports.
- **Feature** (`features/`): imports a domain type and knows product rules (what to show, where to link).
- Rule: **if it imports a domain type, it is a feature. If it does not, it is shared UI.**


### How to say it in an interview
- “Generic pieces stay reusable. Feature components compose them and own domain knowledge.”
- “I keep presentational components dumb so I don’t leak domain types into the design system.”
