# Name Initials

**Date:** 2026-04-13
**Topic:** JavaScript Algorithms / String Manipulation
**Difficulty:** Easy

---

## Problem Summary

> Given a full name as a string, return the initials of each word, uppercased and separated by dots (e.g. `"Tommy Millwood"` → `"T.M."`).

---

## Approach

Split the full name into individual words using `" "` as the delimiter. Then reduce over the array, picking the first character of each word, uppercasing it, and appending a dot — building the initials string in one pass.

- `split(" ")` breaks the name into tokens
- `reduce` accumulates the result without needing a separate `map` + `join`
- Appending `"."` after every initial naturally produces the trailing dot required by the format

## Edge Cases Considered

- Already-lowercase names — handled automatically by `.toUpperCase()`
- Multiple/extra spaces producing empty tokens — can be guarded with `.filter(Boolean)` before reducing
- Empty string input — `val[0]` would be `undefined`, causing a `TypeError`; `.filter(Boolean)` also mitigates this

---

## What I Learned

- Appending the separator character inside the `reduce` accumulator (rather than using `join` + manual trailing char) is a clean pattern when the separator doubles as a suffix
- `.filter(Boolean)` is a concise way to strip empty strings from a `split` result, guarding against extra whitespace

---

## Time Taken

~ 10 minutes
