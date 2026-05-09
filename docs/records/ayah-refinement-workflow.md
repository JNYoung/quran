# Ayah Refinement Workflow

## Goal

Standardize how ayah refinement moves from bootstrap labeling to reviewed, reusable production-quality records.

## Scope

This workflow applies to:
- `data/output/content/ayah-label-records.json`
- `data/output/content/indexes/intent-index.json`
- `data/output/content/indexes/theme-index.json`
- related refinement notes under `docs/records/`

## Layers

### 1. Bootstrap Layer
- Rule-based first pass labels
- Used to ensure full coverage of all ayahs
- May be low-confidence and overly generic

### 2. Manual Curated Layer
- Human-reviewed refinement for high-value ayahs
- Corrects generic bootstrap defaults
- Adds stronger theme/intent precision

### 3. Audience Fit Layer
- Adds packaging-oriented fields without changing canonical semantic meaning
- Fields include:
  - `suitable_markets`
  - `suitable_genders`
  - `women_mode_priority`
  - `audience_notes`

## Workflow Steps

### Step 1: Start From Label Records
Use `data/output/content/ayah-label-records.json` as the single working base.

### Step 2: Select Refinement Batch
Prioritize in this order:
1. `women_mode_priority=high`
2. `calm`
3. `hope`
4. `healing`
5. `gratitude`
6. `trust`
7. remaining intents

### Step 3: Refine Canonical Labels
For each selected ayah:
- review `theme_tags`
- review `prayer_intents`
- update `label_confidence`
- set `label_source` to a manual-curated value
- update `notes`

### Step 4: Add Audience Fit Fields
Where useful, add:
- `suitable_markets`
- `suitable_genders`
- `women_mode_priority`
- `audience_notes`

### Step 5: Record Batch Output
Document each refinement batch in `docs/records/`.
Suggested naming:
- `high-value-ayah-refinement-batch-N.md`

### Step 6: Sync Progress Notes
Write short progress notes to daily memory and relevant project docs.

## Rules

- Do not rewrite Quran Arabic canonical text
- Do not confuse `theme_tags` with packaging fields
- Do not put market/gender split directly into canonical semantic tags
- Prefer stable taxonomy over ad-hoc tag growth

## Completion Standard

An ayah is considered acceptably refined when:
- `theme_tags` are specific enough for content selection
- `prayer_intents` are usable for daily distribution
- confidence is not left ambiguous without reason
- audience fit fields exist when needed for packaging decisions

## Output Files

Primary working file:
- `data/output/content/ayah-label-records.json`

Supporting indexes:
- `data/output/content/indexes/intent-index.json`
- `data/output/content/indexes/theme-index.json`

Supporting docs:
- refinement batch notes under `docs/records/`

## Recommendation

Treat refinement as an ongoing editorial pipeline, not a one-shot labeling pass.
