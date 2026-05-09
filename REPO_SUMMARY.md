# Quran Repo Summary

## What This Repo Is

This repository is the structured project base for the Quran prayer app initiative.

It now contains four things together:
- GitBook-style product and execution documentation
- localized Quran data assets
- scripts and records for ayah labeling and refinement
- initial app development workspaces for server / iOS / Android / shared

## Core Project Shape

The product direction is:
- four separate apps
  - Indonesia male
  - Indonesia female
  - Middle East male
  - Middle East female
- one shared content/data core
- differentiated packaging, copy, push, and audience handling

## Main Areas

### 1. Product
Contains scope, positioning, Women Mode, page content hierarchy, and product-level planning.

### 2. Content
Contains content source decisions, Arabic product copy layer, ayah tagging, prayer intent mapping, audience fit rules, and spiritual source expansion.

### 3. Data
Contains raw Quran data, local splits, indexes, translation choices, and data structure docs.

### 4. Engineering
Contains architecture, API, database, local backend planning, CMS structure, client modules, and push strategy.

### 5. Operations / Growth / Analytics
Contains ASO, push/content ops, campaign rules, GA4, metrics, event schema, and growth assets.

### 6. Records
Contains execution logs, label records, and ayah refinement workflow/history.

## Important Runtime Facts

- Arabic Quran source is localized in `data/raw/quran-uthmani.json`
- main English translation is `en.asad`
- per-surah files and indexes live under `data/output/quran/`
- ayah label records live under `data/output/content/ayah-label-records.json`

## Labeling Model

Ayah labeling is split into layers:
- canonical semantic layer
  - `theme_tags`
  - `prayer_intents`
- audience fit / packaging layer
  - `suitable_markets`
  - `suitable_genders`
  - `women_mode_priority`
  - `audience_notes`

## Recommended Entry Files For Other Models

Start here:
- `README.md`
- `book/SUMMARY.md`
- `REPO_SUMMARY.md`

Then check:
- `docs/product/document-index.md`
- `docs/content/ayah-tagging.md`
- `docs/records/ayah-refinement-workflow.md`
- `docs/data/data-repo-structure.md`

## Current Working Style

- execute first, document in parallel
- keep refinement history in records
- treat ayah refinement as an ongoing editorial pipeline
