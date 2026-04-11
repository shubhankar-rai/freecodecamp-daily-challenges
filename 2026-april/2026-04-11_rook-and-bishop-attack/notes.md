# Rook and Bishop Attack

**Date:** 2026-04-11
**Topic:** JavaScript Algorithms / Chess / String Manipulation
**Difficulty:** Easy

---

## Problem Summary

> Given a string for the location of a rook on a chess board, and another for the location of a bishop, determine if one piece can attack another.

---

## Approach

Considered the movement rules for each piece separately and mapped them to coordinate comparisons on a standard chess notation string (e.g. `"e4"` → column `e`, row `4`).

- **Rook:** attacks along the same file (column) or rank (row) — check if either character of the two strings matches.
- **Bishop:** attacks diagonally — the column distance and row distance must be equal. Used `charCodeAt()` on both characters to get numeric values for subtraction, making the check uniform for both the letter column and digit row.
- Ordered rook check first (same-square edge case aside, only one can be true at a time).

## Edge Cases Considered

- Same square (e.g. `rookBishopAttack("e4", "e4")`) — both pieces can't share a square; the original rook check would incorrectly return `"rook"`, so a guard is needed.
- Invalid input — strings shorter or longer than 2 characters, `null`, or out-of-range coordinates should throw rather than silently misbehave.

---

## What I Learned

- `charCodeAt()` works cleanly for diagonal detection because chess notation columns (`a`–`h`) and rows (`1`–`8`) are both single characters — treating them uniformly as char codes avoids any parsing step.
- Returning the _attacker's name_ as a string is convenient but slightly ambiguous when the problem framing is mutual ("can either attack the other"). Worth clarifying intent via a comment or reconsidering the return type if consumed downstream.
- Extracting `colDiff` and `rowDiff` into named variables makes the diagonal condition self-documenting without adding any logic.

---

## Time Taken

~ 15 minutes
