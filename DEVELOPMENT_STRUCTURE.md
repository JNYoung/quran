# Development Structure

## Goal
Start actual app development inside this repository while keeping the existing docs/data layout intact.

## Top-level layout
- `book/` GitBook navigation
- `docs/` project documentation
- `data/` localized Quran data, scripts, outputs
- `server/` backend development workspace
- `ios/` native iOS workspace
- `android/` Android workspace
- `shared/` shared contracts/content/tooling

## Why this split
- `server/` keeps backend/content delivery work independent
- `ios/` and `android/` allow native platform work to grow separately
- `shared/` keeps schemas and contracts reusable

## Current status
This is the initial folder scaffold, not the full implementation yet.

## Next development steps
1. define shared content/app contracts
2. start local dev backend skeleton in `server/`
3. scaffold Android app modules
4. scaffold iOS app shell
