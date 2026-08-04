# Golf Handicap Calculator

**Date:** 2026-08-04
**Topic:** JavaScript Algorithms / Array Iteration / Math
**Difficulty:** Easy

---

## Problem Summary

> Given two parallel arrays — golf scores and course par values — calculate the handicap index by averaging the per-round differentials (score minus par), rounded to one decimal place.

---

## Approach

Iterate over both arrays simultaneously using a standard `for` loop, accumulating the sum of `(scores[i] - pars[i])` for each round. Divide the total sum by the number of rounds to get the average, then format to one decimal place using `.toFixed(1)`.

- Used a classic index-based `for` loop since both arrays need to be accessed at the same index together.
- Stored `scores.length` in `n` upfront to avoid repeated property lookups in the loop condition.
- Applied `.toFixed(1)` on the final division result to satisfy the rounding requirement.

## Edge Cases Considered

- Both arrays are assumed to be the same length — no guard needed per the problem constraints, but worth noting that mismatched lengths would silently produce `NaN` differentials for out-of-bounds indices.
- `.toFixed(1)` returns a **string**, not a number — if the return value is used in further arithmetic downstream, it would need to be wrapped in `Number()` or `parseFloat()`.
- A single-round input (`n = 1`) works correctly — the average of one differential is the differential itself.

---

## What I Learned

- `.toFixed(n)` is the idiomatic way to round a float to `n` decimal places in JavaScript, but it always returns a string. This is a common source of subtle type bugs when the result feeds into other calculations.
- Parallel array iteration (two arrays, same index) is a clean use case for a classic `for` loop over `forEach` — accessing `scores[i]` and `pars[i]` together reads more clearly than trying to manage two arrays through a callback.
- This problem is also expressible as a one-liner using `reduce`: `scores.reduce((sum, s, i) => sum + (s - pars[i]), 0) / scores.length` — useful to know, though the explicit loop is easier to read at a glance.

---

## Time Taken

~ 10 minutes
