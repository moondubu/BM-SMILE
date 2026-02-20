# Project Agent Rules

## CSS Unit and Typo Rules
- Do not use `letter-spacing`.
- Do not use `em` or `rem` units.
- Use units like `px`, `%`, `vw`, `vh` instead.
- Do not add dim/overlay layers on top of images by default (e.g. `*cardDim`). Add only when explicitly requested.
- Do not write CSS fallback values like `var(--token, 24px)`. Use token variables only.
- Use only variables defined in `src/app/globals.css`.
- When Figma values do not match existing spacing tokens, use the nearest spacing token.
- Do not implement responsive styles until PC design implementation is finished.
