# Open Issues

**Date:** 2026-05-23
**Topic:** JavaScript Algorithms
**Difficulty:** Medium

---

## Problem Summary

> Given arrays of issue numbers and PR numbers, return the issues that remain open. A PR closes an issue if their digits are a rotation of each other (but not if they're the exact same number), with leading zeros considered for matching.

---

## Approach

- Recognize that "rotation" means splitting a string at each position and swapping the two halves (e.g., "201" → "012", "120"), not generating all permutations.
- Handle leading zeros by padding both the PR and issue strings to the same length with leading zeros before checking rotation.
- Use the classic rotation check: string A is a rotation of string B if and only if A appears as a substring within B + B.
- Exclude exact matches (same number) since a PR cannot close an issue with the identical number.

## Edge Cases Considered

- PR and issue have different digit lengths, requiring zero-padding (e.g., PR 17 closing issue 170 via "017" → "170").
- Issues with all identical digits (e.g., 111) — all rotations are the same as the original, so these can never be closed.
- PR number equals issue number — must not close it.

---

## What I Learned

- The string-doubling trick for rotation detection: `(s + s).includes(target)` is a clean O(n) check instead of manually generating each rotation.
- Leading zeros are silently dropped by `Number()` and `toString()`, so when digit-level relationships matter, you need to `padStart` both strings to a common length before comparing.
- Permutations vs rotations is a critical distinction — permutations grow factorially while rotations are linear in the number of digits.

---

## Time Taken

~ 25 minutes
