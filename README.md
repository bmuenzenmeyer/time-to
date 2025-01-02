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

| Metric | Before | After |
| - | - | - |
| # node_modules | 210 | 5 |
| size node_modules | 193 MB | 58 MB |