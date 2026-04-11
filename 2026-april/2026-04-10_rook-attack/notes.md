# Rook Attack

**Date:** 2026-04-10
**Topic:** JavaScript Algorithms / Chess / String Manipulation
**Difficulty:** Easy

---

## Problem Summary

> Given two strings for the location of two rooks on a chess board, determine if they can attack each other.

---

## Approach

Considered the movement rules for each piece separately and mapped them to coordinate comparisons on a standard chess notation string (e.g. `"e4"` → column `e`, row `4`).

- **Rook:** attacks along the same file (column) or rank (row) — check if either character of the two strings matches.

## Edge Cases Considered

- Same square (e.g. `rookAttack("e4", "e4")`) — both pieces can't share a square.
- Invalid input — strings shorter or longer than 2 characters, `null`, or out-of-range coordinates should throw rather than silently misbehave.

---

## Time Taken

~ 15 minutes
