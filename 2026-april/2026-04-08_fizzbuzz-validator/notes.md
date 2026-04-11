# FizzBuzz Validator

**Date:** 2026-04-08
**Topic:** JavaScript Algorithms
**Difficulty:** Easy

---

## Problem Summary

> Given an array representing a FizzBuzz sequence, determine if it is valid — i.e. multiples of 3 are "Fizz", multiples of 5 are "Buzz", multiples of both are "FizzBuzz", and all other positions hold the correct integer.

---

## Approach

The sequence can start at any number, so the first task is to **derive the starting value** by finding the first integer element in the array and back-calculating: `startVal = arr[i] - i`. From there, iterate through the array and check each element against what it _should_ be for that value of `startVal`.

- Find `startVal` by locating the first number in the array and subtracting its index.
- Guard against an all-string array by returning `false` if `startVal` remains `undefined`.
- In the validation loop, check `% 15` first (before `% 3` or `% 5`) to correctly catch FizzBuzz cases — since 15 is divisible by both, checking `% 3` first would incorrectly match it.
- Add an `else` branch to validate that plain numbers match `startVal` exactly, not just that they aren't strings.
- Increment `startVal` at the end of every iteration.

## Edge Cases Considered

- Array with no integers at all (every element is a string) — `startVal` stays `undefined`, return `false`.
- Incorrect plain integers (e.g. `999` in place of `4`) — caught by the `else` branch validating `arr[i] !== startVal`.
- Sequence starting at a multiple of 15 — handled correctly by checking `% 15` before `% 3` and `% 5`.

---

## What I Learned

- `return` inside a `forEach` callback only exits the callback, not the outer function — use a `for` loop when early exit from the parent function is needed.
- In FizzBuzz-style problems, always check `% 15` (or the combined condition) **before** the individual `% 3` and `% 5` checks, or the else-if chain will misclassify multiples of both.
- When validating an array, don't forget the "normal" case — skipping an `else` branch means invalid plain values pass through silently.

---

## Time Taken

~ 25 minutes
