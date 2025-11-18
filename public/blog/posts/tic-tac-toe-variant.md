---
title: A tic-tac-toe variant
abstract: A variant where the second player places a bomb
tags: [Game Design]
date: 2025/08/25
---

# Discussion
In class, we were tasked to come up with a variant of tic-tac-toe.
Limitations were that we have to use the 3 by 3, it still has to be connect 3 to win, and that there cannot be a draw.
An arbitrary limitation I posed for myself was to be playable with standard medium.
Normally, TTT is played with a pen and a surface, that's all, and so I limited myself to that.

I then came up with a simple addition of a rule.
Let's call it the bomb rule.

Before a round starts, players decide who starts the game.
The other player (the 2nd player) now draws another TTT board somewhere hidden, for example at the back of the piece of paper, or back of his hand, etc.. He then selects one of the 9 cells and draws a bomb on it.
Note that the first player does not know where this bomb is drawn.

The game then plays out as normal tic tac toe.
If default TTT win is achieved, by one player connecting 3 in a row, the game ends and said player wins.
Else in the case of a draw, the second player reveals his hidden drawing.
The player who drew on the bomb cell loses.

I thought that the second player will be able to 'guide' the first player towards the bomb, and correspondingly the first player would be able to read the second players' moves. But from play tests, any read seemed slightly... superficial.

This seems to evolve into more of a reading your opponent kind of game, like poker if you will.
Which then means players should alternate and play multiple rounds.

Idk, maybe a mathematical breakdown of the game in the future.
Or if anyone want to analyze it, tag me!

Cheers.