---
name: tux-release-film
description: Use when making, revising, or reviewing a Tux release film (silent Psychopomp reel of what is new in a Tux version) in the Liquid Carbon dark design. Points to the guide, setup and 0.13 reference implementation in the Tux repo.
---

# Tux release films

The method lives in the Tux repo, so every Tux dev has it:

1. Read `films/README.md` (setup, build, render) and `films/GUIDE.md` (brief, facts, pacing, UI rebuild, engine gotchas, review loop, colour tokens, source map). Follow the guide.
2. Also load `psychopomp` and `explainer-motion`.
3. Setup from the local checkout (faster, offline): `PSYCHOPOMP_REPO=~/Repos/oss/psychopomp films/setup.sh`.
4. Work in `.worktrees/feature/<name>` off `develop`; PR to `develop`. Never push to upstream Psychopomp.
5. New lessons go into `films/GUIDE.md` in the same PR, not into this skill.
6. Done: session note in `~/Vaults/Memory/sessions/`; report to Phil length, what changed, what is illustrative, what was not watched end to end.
