# Last Letter

**Date:** 2026-04-14
**Topic:** JavaScript Algorithms / String Manipulation
**Difficulty:** Easy

---

## Problem Summary

> Given a string, return the letter that appears last in the alphabet. On ties, return the first occurrence. Ignore all non-letter characters.

---

## Approach

Iterate through each character of the string, skip non-letters using a `/[a-z]/i` regex test, and track the alphabetically latest letter seen so far.

- Initialise `lastLetter` to `""` so the first valid letter always wins the first comparison — eliminates the need for a separate `!lastLetter` guard
- Use a strict `>` comparison (after normalising both sides with `.toUpperCase()`) so ties naturally keep the first occurrence, since `>` only updates on a strictly later letter
- Return `lastLetter || null` at the end to handle strings with no letter characters

## Edge Cases Considered

- No letters in the string — `lastLetter` stays `""`, returning `null`
- Tie between two letters (e.g. `"aZz"`) — strict `>` ensures the first `Z`/`z` is kept and the later one is ignored
- Mixed case input — `.toUpperCase()` normalises both sides before comparing so `'z'` and `'Z'` are treated as equal
- Non-letter characters (digits, symbols, spaces) — filtered out by `/[a-z]/i` regex test

---

## What I Learned

- `str.match(/[a-z]/gi) ?? []` paired with `reduce` is a clean functional alternative, though the iterative version is easier to read at a glance

---

## Time Taken

~ 15 minutes
