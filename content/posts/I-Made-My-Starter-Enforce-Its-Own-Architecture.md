---
title: "I Made My Starter Enforce Its Own Architecture"
date: 2026-10-18
excerpt: "Documented architecture does not survive a deadline. JST enforces its layers with custom ESLint plugins and CI, so the build fails when a boundary leaks."
---

## Introduction

Most starter templates document their architecture. Mine did too: seven layers with a one-way dependency direction, drawn in the README. Then the codebase grows, a deadline arrives, someone imports a page into a feature because it already has the data, code review misses it, and the diagram in the docs stays clean.

If the rule only lives in text, it is a suggestion. So JST enforces it.

## The build fails when a boundary leaks

JST checks its layers with two custom ESLint plugins. These are published packages, so deleting a config file does not turn them off.

`@jst-stack/eslint-plugin-architecture` is policy-driven. It reads the layer model and enforces the allowed direction by name: app, pages, modules, widgets, features, entities, shared. A feature cannot import a page. An entity cannot reach into a feature. Slices cannot import siblings directly; they import the slice's public API. A violation is a named error pointing at the file and the direction it crossed. Lint fails, and the commit does not land.

`@jst-stack/eslint-plugin-quality` handles the drift that slips past review: tests live in `__tests__/` next to their source, names follow the project convention, leftover configuration gets flagged. New projects install `@jst-stack/eslint-plugin`, the umbrella that pulls both in as one policy.

The difference between these and a generic linter is that they know JST's layers by name.

## The proof runs everywhere

A lint rule only matters if it runs. On a laptop, skipping `eslint .` is easy. So every pull request runs an architecture proof that breaks the architecture on purpose.

The proof generates a project, injects a violation: a feature importing another feature's component instead of its public API, a `fetch` call sneaking into a component. It asserts the linter rejects both, repairs the files, and asserts green again. Green, then rejected, then repaired, then green. On Linux, macOS, and Windows.

A green build means the rules catch the mistakes they claim to catch, not that the CI step turned green by accident.

## It ships like a product

A starter that lives only in a GitHub repo is a nice idea. JST is released like a real package.

`npm create jst@latest` scaffolds a project with a few choices: color scheme, primary color, style, package manager, example. The CLI pins an immutable template tag, so the project you get is the project that was tested.

That pin is public. `jst.compatibility.json` records which template tag each CLI release ships, which plugin range it supports, and which Node and package manager versions it targets. Before a combination is advertised, a canary job generates real projects from the published packages and runs their checks. A release does not go out until that passes.

## The point

Most starters optimize day one: a bundler, a router, a green test in an hour. JST optimizes day two hundred, when the deadline is pushing on the boundary and nobody has read the README in months.

The lint rule still runs, and the commit still fails.
