# General notes

- Windows ignores import case; Linux does not. Matching locally is not enough — a wrong-case path can ship and only fail in CI/prod.
- Require a minimum password length; don’t force uppercase/number/symbol mixes. NIST: composition rules push people into predictable passwords like `Password1!` instead of longer passphrases.
