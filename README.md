# Bloin

Hi, I’m Lu Bolin, also known as Bloin. I’m a Computer Science student at the National University of Singapore who enjoys making games and turning ideas into real projects.

This site is a home for my projects, blog posts, creative experiments, and other things I make along the way.

## Salary Package Comparer

The card on `/projects/` opens the [live comparer](https://lubolin.github.io/salary-package-comparer/).
Maintain the tool in [LuBolin/salary-package-comparer](https://github.com/LuBolin/salary-package-comparer).
GitHub Pages publishes that repository's root on each push to `master`.
The card's text and thumbnail live in this repository.

## Fold experiment

The 20-level paper-folding game lives at `/fold/` and is linked from Little experiments.
Its self-contained static build is in `public/fold/`, built from
[LuBolin/fold](https://github.com/LuBolin/fold), commit `672a72c`.

To update it, run `npm ci` and `npm run build -- --base=/fold/` in the Fold
repository, replace `public/fold/` with that build's `dist/` contents, and run
`npm run build` here. The website build verifies the experiment link and asset paths.
