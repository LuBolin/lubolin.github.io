---
title: Paeth Predictor
description: Cool predictor for use in .png compression
published: 2026-11-06
tags:
  - Algorithms
draft: false
slug: paeth-predictor
---

## Background
A friend is trying to implement a PNG encoder / decoder himself, and was stuck and frustrated.
I took a look, and learnt about this Paeth predictor.
Its quite cool.

## Context & Purpose
So to compress the pixels, an idea is to exploit spatial similarity between neighboring pixels.
Instead of representing each pixel's values from 0 to 255, if we can represent the delta instead, we can reduce the range of values, and hence reduce the number of bits needed to represent them (in further compression steps like huffman encoding and what not).

The predictor's purpose is that: Given the value of some neighbor pixels, predict the value of the current pixel.
Then, we can encode the difference between the actual value and the predicted value, and if the difference is very small, we have succeded.

The predictor here uses the following:


| | |
|---|---|
| C | B |
| A | X |

Where X is the target pixel, and A, B, C are the neighboring pixels to the left, above, and top-left respectively.


## How it works
The algorithm is as follows:

```python
int paeth_predictor(int a, int b, int c) {
    int p = a + b - c;  // initial estimate
    int pa = abs(p - a); // distances to a, b, c
    int pb = abs(p - b);
    int pc = abs(p - c);

    // return nearest of a,b,c,
    // breaking ties in order a,b,c.
    if (pa <= pb && pa <= pc) return a;
    else if (pb <= pc) return b;
    else return c;
}
```

And this is where my friend got confused, trying to understand Pa, Pb and Pc.
I stared at it for a bit, and felt it really cool.
The algorithm picks pixel value of A, if Pa is the smallest. Same for B and C. (Ignoring tie breakers for now, which I understand as an arbitrary but consistent choice of A over B over C).
Pa represents the difference between B and C, abs(b - c).
Pb represents the difference between A and C, abs(a - c).
Pc represents abs(a + b - 2c).

If Pa is the smallest, that means the horizontal difference between B and C is the smallest. Hence it is likely that there is some horizontal pattern here, and horizontal neighbors are likely to be similar. Hence we pick A, the horizontal neighbor of X.
The logic is the same for picking B when Pb is the smallest.
For Pc to be the smallest, the sign of (b-c) and (a-c) must be different, and the smaller must be at least half the size of the larger. Hence we see that the change in each axis is significant and of opposite sign, and at C, which is both a step left to account for horizontal change, and a step up to account for vertical change, will likely be the best predictor.

## Conclusion..?
Not really a conclusion, but I just felt this very cool.
It is a very clever heuristic that works well in practice.