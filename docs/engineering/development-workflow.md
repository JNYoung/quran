# Development Workflow

## Goal

Keep implementation work and documentation updates moving together.

## Rule

Every meaningful development step should update documentation in parallel.

This means:
- when code structure changes, update structure docs
- when contracts change, update contract-related docs
- when flows change, update product or engineering docs
- when data handling changes, update data docs

## Required Practice

For ongoing development inside this repository:
- build in `server/`, `ios/`, `android/`, `shared/`
- reflect the development path in GitBook docs
- do not let implementation drift away from documentation

## Recommended Update Targets

### Server changes
Update:
- `docs/engineering/architecture.md`
- `docs/engineering/local-dev-backend.md`
- relevant API/data docs

### iOS / Android changes
Update:
- `DEVELOPMENT_STRUCTURE.md`
- design / product docs if behavior changes
- engineering docs if architecture changes

### Shared contract changes
Update:
- contract-related engineering docs
- content/data docs when schema changes affect them

## Development Path

Current implementation path is:
- `server/`
- `ios/`
- `android/`
- `shared/`

These are now part of the official repo structure, not temporary placeholders.

## Standard

Development is not considered complete if the related docs are left stale.
