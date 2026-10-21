# CSS cheat notes

When I need X, I use Y — short recipes, not full sheets.

- Center one child → flex + `align-items` / `justify-content`
- Circle avatar → equal width/height + `border-radius: 50%` + `overflow: hidden`
- Photo in a box → `width`/`height: 100%` + `object-fit: cover` on the `img`
- Don’t shrink in a flex row → `flex-shrink: 0`
- Responsive equal columns (no media query) → `grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))` — as many columns as fit, each ≥140px, share leftover space; stack when narrow. Space with `gap`.
- `auto-fill` vs `auto-fit` (same `repeat(..., minmax(...))`) → both create as many tracks as fit; **`auto-fit` collapses empty tracks** so items stretch; **`auto-fill` keeps empty tracks**, so leftover space stays as blank columns. Prefer `auto-fit` when you want filled items to grow.
