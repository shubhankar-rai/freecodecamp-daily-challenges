# I Before E Except After C

**Date:** 2026-05-21
**Topic:** JavaScript String Manipulation
**Difficulty:** Easy

---

## Problem Summary

> Given a word or sentence, return a corrected version where every word follows the "I before E except after C" rule — swap `ei` → `ie` unless preceded by `c`, and swap `cie` → `cei`.

---

## Approach

- Split the string into a character array and walk through it with a `while` loop index, checking pairs of characters (`ei` or `ie`) and their preceding character.
- On finding `ei` not after `c`, swap in place; on finding `ie` after `c`, swap in place. Skip ahead by 2 after each swap to avoid re-processing the same pair.

## Edge Cases Considered

- `ei` at the very start of the string — `chrArr[i - 1]` is `undefined`, which correctly doesn't equal `"c"`, so the swap fires as expected.
- Words separated by spaces — the space character between words prevents a `c` at the end of one word from affecting `ei` at the start of the next (e.g., `"c eight"` stays correct because the neighbor is `" "`, not `"c"`).
- Case sensitivity — the solution assumes lowercase input; uppercase variants like `"Ei"` or `"cIe"` are silently skipped.

---

## What I Learned

- Skipping the index forward by 2 after a swap is a clean way to prevent infinite loops or double-processing in character-pair problems.
- Accessing out-of-bounds array indices in JavaScript returns `undefined` rather than throwing, which can be leveraged as a natural boundary check.
- A regex alternative (`/(^|[^c])ei/g` → `'$1ie'` and `/cie/g` → `'cei'`) expresses the same logic more declaratively and reads almost like the English rule.

---

## Time Taken

~ 15 minutes
