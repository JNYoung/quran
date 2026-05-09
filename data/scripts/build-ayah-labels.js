const fs = require('fs');
const path = require('path');

const root = '/Users/zhengjinyang/.openclaw/workspace/projects/quran-data';
const ayahIndexPath = path.join(root, 'output/quran/indexes/ayah-index.json');
const outputDir = path.join(root, 'output/content');
const outputPath = path.join(outputDir, 'ayah-label-records.json');
const intentIndexPath = path.join(outputDir, 'indexes/intent-index.json');
const themeIndexPath = path.join(outputDir, 'indexes/theme-index.json');

const ayahIndex = JSON.parse(fs.readFileSync(ayahIndexPath, 'utf8'));
const intentIndex = JSON.parse(fs.readFileSync(intentIndexPath, 'utf8'));
const themeIndex = JSON.parse(fs.readFileSync(themeIndexPath, 'utf8'));

const keywordRules = [
  {
    themes: ['gratitude'],
    intents: ['need_gratitude_today'],
    patterns: [/grateful/i, /gratitude/i, /thanks/i, /thankful/i]
  },
  {
    themes: ['patience'],
    intents: ['need_patience_today'],
    patterns: [/patient/i, /patience/i, /persever/i, /endure/i]
  },
  {
    themes: ['trust'],
    intents: ['need_trust_today'],
    patterns: [/trust/i, /rely/i, /depend/i]
  },
  {
    themes: ['healing', 'calm'],
    intents: ['need_healing_today', 'need_calm_today'],
    patterns: [/mercy/i, /peace/i, /rest/i, /hearts?/i, /healing/i]
  },
  {
    themes: ['forgiveness'],
    intents: ['need_forgiveness_today'],
    patterns: [/forgiv/i, /repent/i, /pardon/i]
  },
  {
    themes: ['family'],
    intents: ['need_family_support_today'],
    patterns: [/parents?/i, /family/i, /wives/i, /children/i, /mother/i, /father/i]
  },
  {
    themes: ['hope'],
    intents: ['need_hope_today'],
    patterns: [/hope/i, /despair/i, /mercy of allah/i]
  },
  {
    themes: ['responsibility', 'consistency'],
    intents: ['need_responsibility_today', 'need_consistency_today'],
    patterns: [/deeds?/i, /prayer/i, /charity/i, /righteous/i, /believe and do/i]
  },
  {
    themes: ['calm'],
    intents: ['need_calm_today'],
    patterns: [/tranquil/i, /comfort/i, /ease/i, /relief/i]
  }
];

function dedupe(list) {
  return [...new Set(list)];
}

function labelAyah(text) {
  const themes = [];
  const intents = [];
  const matched = [];

  for (const rule of keywordRules) {
    if (rule.patterns.some((pattern) => pattern.test(text))) {
      themes.push(...rule.themes);
      intents.push(...rule.intents);
      matched.push(...rule.patterns.filter((pattern) => pattern.test(text)).map(String));
    }
  }

  if (themes.length === 0) {
    themes.push('trust');
    intents.push('need_trust_today');
  }

  return {
    theme_tags: dedupe(themes).slice(0, 3),
    prayer_intents: dedupe(intents).slice(0, 2),
    label_confidence: matched.length > 0 ? 'medium' : 'low',
    label_source: matched.length > 0 ? 'rule_bootstrap_v1' : 'rule_bootstrap_default',
    notes: matched.length > 0 ? `matched=${matched.join(',')}` : 'default trust bootstrap'
  };
}

const records = Object.values(ayahIndex).map((ayah) => {
  const labels = labelAyah(ayah.english_translation || '');
  for (const intent of labels.prayer_intents) {
    if (!intentIndex[intent]) intentIndex[intent] = [];
    intentIndex[intent].push(ayah.ayah_reference);
  }
  for (const theme of labels.theme_tags) {
    if (!themeIndex[theme]) themeIndex[theme] = [];
    themeIndex[theme].push(ayah.ayah_reference);
  }
  return {
    ...ayah,
    ...labels
  };
});

fs.writeFileSync(outputPath, JSON.stringify(records, null, 2));
fs.writeFileSync(intentIndexPath, JSON.stringify(intentIndex, null, 2));
fs.writeFileSync(themeIndexPath, JSON.stringify(themeIndex, null, 2));

console.log(JSON.stringify({
  recordCount: records.length,
  outputPath,
  intentIndexPath,
  themeIndexPath
}, null, 2));
