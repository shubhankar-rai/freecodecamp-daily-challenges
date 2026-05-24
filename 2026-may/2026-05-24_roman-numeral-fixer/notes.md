# Roman Numeral Fixer

**Date:** 2026-05-24
**Topic:** JavaScript Algorithms
**Difficulty:** Medium

---

## Problem Summary

> Given a string of malformed (additive-only) Roman numerals, convert it to standard Roman numeral notation using subtractive pairs where needed.

---

## Approach

- Split the problem into two functions: `convertToNumber` (Roman → integer) and `convertToRoman` (integer → Roman).
- For decoding, iterate through each character and sum up values from a lookup table (valid since input is strictly additive — no subtractive pairs to worry about).
- For encoding, greedily subtract the largest possible value (including subtractive pairs like CM, CD, XC, XL, IX, IV) and append the corresponding symbol until the number is exhausted.

## Edge Cases Considered

- Two-character subtractive pairs in input (not needed here since input is additive-only).
- Implicit global variable (`for (key in ...)` without `let`) — caused failures in strict mode environments like FreeCodeCamp.

---

## What I Learned

- FreeCodeCamp likely runs code in strict mode, which disallows implicit global variables. Always use `let`/`const` in `for...in` loops.
- When the problem guarantees additive-only input, single-character parsing is sufficient for decoding. A two-character lookahead is only necessary when subtractive pairs can appear in the input.
- Strings are indexable directly (`str[i]`), so `.split("")` is unnecessary overhead.

---

## Time Taken

~ 15 minutes
