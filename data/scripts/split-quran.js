const fs = require('fs');
const path = require('path');

const root = '/Users/zhengjinyang/.openclaw/workspace/projects/quran-data';
const arabicPath = path.join(root, 'raw/quran-uthmani.json');
const englishPath = path.join(root, 'raw/quran-en-asad.json');
const surahDir = path.join(root, 'output/quran/surahs');
const indexesDir = path.join(root, 'output/quran/indexes');

const arabic = JSON.parse(fs.readFileSync(arabicPath, 'utf8'));
const english = JSON.parse(fs.readFileSync(englishPath, 'utf8'));

const arabicSurahs = arabic.data.surahs;
const englishSurahs = english.data.surahs;

const ayahIndex = {};
const surahSummary = [];

for (let i = 0; i < arabicSurahs.length; i++) {
  const arSurah = arabicSurahs[i];
  const enSurah = englishSurahs[i];
  const surahNumber = arSurah.number;
  const surahRecord = {
    surah_number: surahNumber,
    surah_name_arabic: arSurah.name,
    surah_name_english: arSurah.englishName,
    surah_name_english_translation: arSurah.englishNameTranslation,
    revelation_type: arSurah.revelationType,
    ayahs: arSurah.ayahs.map((ayah, idx) => {
      const enAyah = enSurah.ayahs[idx];
      const ref = `${surahNumber}:${ayah.numberInSurah}`;
      const record = {
        ayah_reference: ref,
        surah_number: surahNumber,
        ayah_number: ayah.numberInSurah,
        juz: ayah.juz,
        hizb_quarter: ayah.hizbQuarter,
        manzil: ayah.manzil,
        page: ayah.page,
        ruku: ayah.ruku,
        sajda: ayah.sajda,
        arabic_text: ayah.text,
        english_translation: enAyah.text,
      };
      ayahIndex[ref] = record;
      return record;
    }),
  };

  surahSummary.push({
    surah_number: surahNumber,
    surah_name_arabic: arSurah.name,
    surah_name_english: arSurah.englishName,
    ayah_count: arSurah.ayahs.length,
  });

  const filename = `surah-${String(surahNumber).padStart(3, '0')}.json`;
  fs.writeFileSync(path.join(surahDir, filename), JSON.stringify(surahRecord, null, 2));
}

fs.writeFileSync(path.join(indexesDir, 'ayah-index.json'), JSON.stringify(ayahIndex, null, 2));
fs.writeFileSync(path.join(indexesDir, 'surah-summary.json'), JSON.stringify(surahSummary, null, 2));

console.log(JSON.stringify({
  surahCount: surahSummary.length,
  ayahCount: Object.keys(ayahIndex).length,
  surahDir,
  indexesDir,
}, null, 2));
