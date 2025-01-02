# time-to

A contrived CLI and server to support a blog post about recent Node.js features.

[Read the blog post](https://brianmuenzenmeyer.com/posts/2024-do-i-need-this-node-dependency/).

- [x] testing source code
- [x] watching source code
- [x] parsing arguments
- [x] reading environment
- [x] styling output
- [x] running typescript
- [ ] testing typescript (done, but tired)

## Usage

time-to --to 2026-01-01T00:00:00.000Z

## Install

```
nvm use
corepack enable
corepack install
pnpm install
```

## Comparison

> npm-built node_modules, omitting biome dependencies

| Metric | Before | After | Delta |
| - | - | - | - | 
| # node_modules | 215 | 2 | 0.9%, or 107 times smaller | 
| size node_modules | 49 MB | 2.6 MB |5.3%, or 18 times smaller | 