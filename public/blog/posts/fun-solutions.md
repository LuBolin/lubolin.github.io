---
title: Fun Solutions to the Cumulative Sum Tuple Problem
abstract: A fun solution to the cumulative sum tuple problem
tags: [Programming, Python]
date: 2025/10/11
---

## The Problem
A friend asked me a question from their 1K CS module:
Given a tuple `(a, b, c, ...)`, return `(a, a+b, a+b+c, ...)`
In other words, transform a tuple into its cumulative sum representation.

## The Simple Solution
The straightforward way to solve this is with a loop:

```python
def cumulative_sum(t: tuple[int]) -> tuple[int]:
    result = []
    current_sum = 0
    for x in t:
        current_sum += x
        result.append(current_sum)
    return tuple(result) 
```


## The No-Loop Solution
Use 'itertools.accumulate' feels like cheating.
We can use 'functools.reduce' to avoid an explicit loop:

```python
from functools import reduce
def cumulative_sum(t: tuple[int]) -> tuple[int]:
    initial = [0]
    def accumulator(acc, x):
        acc.append(acc[-1] + x)
        return acc
    return tuple(reduce(accumulator, t, initial)[1:])
```


## The No-Reduce Solution
This was kind of a challenge? A friend saw the No-Loop solution and asked if it could be done without `reduce` either.
```python
def cumulative_sum(t: tuple[int]) -> tuple[int]:
    n = len(t)
    columns = map(lambda i: (0, ) * i + t, range(n))
    result = tuple(map(sum, zip(*columns)))
    return result
```
This works by creating shifted versions of the input tuple and summing them column-wise.

For example, with `(1, 2, 5, 6)`:
```
i=0: (1, 2, 5, 6)
i=1: (0, 1, 2, 5, 6)
i=2: (0, 0, 1, 2, 5, 6)
i=3: (0, 0, 0, 1, 2, 5, 6)

After zip(*columns), we get:
Column 0: (1, 0, 0, 0) → sum = 1
Column 1: (2, 1, 0, 0) → sum = 3
Column 2: (5, 2, 1, 0) → sum = 8
Column 3: (6, 5, 2, 1) → sum = 14
```