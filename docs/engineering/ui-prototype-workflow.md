# UI Prototype Workflow

## Goal

Start app development by first building screen structure, navigation, and mock-data-driven rendering before wiring real backend/content pipelines.

## Current scope
- Android prototype flow
- iOS prototype flow
- mock content only
- Today -> Prayer -> Completion

## Current files
- `android/app/src/MainActivity.kt`
- `ios/App/AppEntry.swift`
- `ios/Sources/Views/ScreenRenderers.swift`
- `shared/content/mock-content.json`

## Rule

At this stage:
- prioritize screen flow and app shell
- use mock content
- keep docs updated when navigation or structure changes

## Next step after this stage
- move from string renderers to real UI components
- define shared contracts for content models
- start local dev backend endpoints
