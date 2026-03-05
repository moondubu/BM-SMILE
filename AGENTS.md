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

## Responsive Breakpoint Rules
- For layouts with `max-width: 1280px`, tablet horizontal padding is `48px` from viewport width `1376px` and below.
- Mobile horizontal padding is `16px` at viewport width `768px` and below.
- Apply this tablet/mobile padding rule to footer and all other responsive sections unless a separate spec is explicitly provided.

## Token Remap Guardrails
- `src/app/globals.css` tokens are remapped at `@media (max-width: 768px)`. Always check both desktop and mobile token values before assigning size/spacing/font tokens.
- Do not assume token names map to the same pixel value on mobile (example: `--font-size-48` becomes `28px` on mobile).
- If the user asks for a fixed pixel value across breakpoints, do not use a remapped token for that property; follow the explicit fixed value requirement.
- Before finalizing responsive edits, verify whether the requested value means:
  1. token-based responsive value
  2. fixed pixel value
