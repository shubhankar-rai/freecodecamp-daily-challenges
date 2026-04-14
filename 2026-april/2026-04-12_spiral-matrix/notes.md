# Spiral Matrix

**Date:** 2026-04-12
**Topic:** JavaScript Algorithms / Matrix Traversal
**Difficulty:** Medium

---

## Problem Summary

> Given a 2D matrix, return a flat array of all values visited in clockwise spiral order — starting top-left, moving right, then down, then left, then up, repeating inward for each layer.

---

## Approach

Used a **boundary-shrinking** strategy with four pointers (`top`, `bottom`, `left`, `right`) that close inward after each full layer is traversed.

- Each iteration of the `while` loop handles one full spiral layer
- Four `for` loops cover the four sides: top row → right column → bottom row → left column
- Guard conditions (`top < bottom`, `left < right`) prevent double-counting cells when the remaining layer is a single row or column
- After each layer, all four boundaries move one step inward

An alternative direction-cycling simulation (with a `vis` matrix to track visited cells) also works, but costs O(m × n) extra space and is harder to read. The boundary approach uses O(1) extra space.

## Edge Cases Considered

- Empty matrix (`[]`) — guard with `if (!matrix.length) return []` before accessing `matrix[0]`
- Single row matrix — the `top < bottom` guard prevents the bottom row from being re-traversed leftward
- Single column matrix — the `left < right` guard prevents the left column from being re-traversed upward
- 1×1 matrix — the while condition holds for one iteration and correctly returns the single element

---

## What I Learned

- The **boundary-shrinking pattern** is cleaner and more space-efficient than a visited-matrix simulation for spiral traversal — no extra O(m × n) space needed
- Always guard against `matrix[0]` access when the input could be an empty array

---

## Time Taken

~ 20 minutes
