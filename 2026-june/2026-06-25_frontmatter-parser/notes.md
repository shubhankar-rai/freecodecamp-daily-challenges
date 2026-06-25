# Parse Frontmatter

**Date:** 2025-06-25
**Topic:** JavaScript Algorithms / String Parsing
**Difficulty:** Easy

---

## Problem Summary

> Given a string representing a YAML-style frontmatter block wrapped in `---` delimiters, parse each `key: value` pair and return an object with values coerced to their correct types (Number, Boolean, or String).

---

## Approach

Split the string on `\n` to get individual lines, then iterate over each line — skipping the opening and closing `---` delimiters. For every remaining line, find the first colon to split the key from the value, trim whitespace, and pass the value through a type-coercion helper before storing it in the result object.

- Used `indexOf(":")` + `slice` instead of `split(":")` to correctly handle values that contain colons (e.g. URLs).
- Wrote a `getValue` helper that checks for numbers first (`isNaN(Number(value))`), then booleans (`"true"` / `"false"`), and falls back to returning the raw string.
- Guarded against lines with no colon (`colonIndex === -1`) to avoid silent corruption.
- Replaced index-based `---` detection with a content check (`line.trim() === "---"`) to handle trailing newlines gracefully.

## Edge Cases Considered

- Values containing colons (e.g. `url: https://example.com`) — handled by splitting on the first colon only.
- Trailing newline in the input string producing an empty last element after `split("\n")`.
- Empty or whitespace-only values — `Number("")` and `Number("  ")` both return `0`, so an explicit `value !== ""` guard is needed before the `isNaN` check.
- Lines inside the block that have no colon (comments, blank lines) — skipped with an early `continue`.

---

## What I Learned

- `String.prototype.split(delimiter)` splits on *every* occurrence. For key-value parsing, `indexOf` + `slice` is the safer and more explicit pattern — it gives you first-colon semantics without any extra work.
- `isNaN(Number(""))` is `false` — the empty string coerces to `0` in JavaScript, which is a numeric-looking value. Always check `value !== ""` before treating a string as a number.
- Index-based boundary detection (`i === 0 || i === length - 1`) is brittle when input format isn't perfectly controlled. Content-based checks (`line.trim() === "---"`) are more resilient.
- Nested helper functions that don't close over outer scope variables are better declared at module level — they're clearer in intent and not re-created on every outer function call.

---

## Time Taken

~ 25 minutes
