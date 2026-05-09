# Quran Data

This directory contains the localized Quran dataset and generation scripts used by the Quran prayer app project.

## Structure
- `raw/`
  - `quran-uthmani.json`
  - `quran-en-asad.json`
- `scripts/`
  - `split-quran.js`
  - `build-ayah-labels.js`
- `output/quran/`
  - `surahs/`
  - `indexes/`
- `output/content/`
  - `ayah-label-records.json`
  - `indexes/`

## Notes
- Arabic source: `quran-uthmani`
- English source: `en.asad`
- Label records currently represent bootstrap + manual refinement mix
