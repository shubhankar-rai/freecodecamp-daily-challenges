# Next Bingo Number

**Date:** 2026-04-09
**Topic:** JavaScript Algorithms
**Difficulty:** Easy

---

## Problem Summary

> Given a bingo number (e.g. `"B10"`), return the next bingo number in sequence. Each letter maps to a fixed range (B: 1–15, I: 16–30, N: 31–45, G: 46–60, O: 61–75). Wraps around from `"O75"` back to `"B1"`.

---

## Approach

Treated all 75 bingo numbers as a single linear sequence and derived the letter mathematically rather than branching on ranges.

- Sliced the letter off and parsed the number with `Number()`
- Computed the next number: `number === 75 ? 1 : number + 1` to handle the wrap-around in one line
- Used `Math.floor((next - 1) / 15)` as an index into `['B', 'I', 'N', 'G', 'O']` to get the correct letter — since each letter covers exactly 15 numbers, integer division maps cleanly to the letter

## Edge Cases Considered

- Last bingo number `"O75"` should wrap around to `"B1"` — handled with a ternary before any other logic
- `(next - 1)` offset is necessary so that number `1` maps to index `0`, number `15` maps to index `0`, and number `16` maps to index `1`

---

## What I Learned

- When ranges are uniform in size, index math (`Math.floor`) replaces branching entirely — no if/else needed
- Wrap-around is cleaner as a pre-step (compute `next` first) rather than a special case at the end
- Keeping a lookup array like `['B', 'I', 'N', 'G', 'O']` makes the letter mapping explicit and easy to change

---

## Time Taken

~ 30 minutes
