# 古兰经祷告 App Ayah 标签体系文档

- 日期：2026-05-09
- 所属主线：内容 / 数据 / 研发
- 关联文档：`2026-05-09-古兰经祷告App-PrayerIntent数据建设文档.md`
- 关联文档：`2026-05-09-古兰经祷告App-跨章节内容关联与祷告编排文档.md`
- 关联导航：`2026-05-09-古兰经祷告App-文档导航与拆分方案.md`

## 一、目标

把 ayah 的内容标注从“零散打 tag”升级为正式的数据体系。

## 二、三层标注结构

### Layer 1：Canonical metadata
- `surah_number`
- `ayah_number`
- `ayah_reference`

### Layer 2：Theme tags
- 表示这条 ayah 的主题语义
- 例如：`gratitude`、`patience`、`healing`、`trust`

### Layer 3：Prayer intents
- 表示这条 ayah 适合被用在什么祷告意图里
- 例如：`need_calm_today`、`need_strength_under_pressure`

## 三、为什么不能只打 theme tag

因为：
- `theme` 更像“它讲什么”
- `intent` 更像“今天为什么给用户这条”

产品编排真正依赖的是 `intent`，不是只有 theme。

## 四、建议字段

每条 ayah 至少预留：
- `theme_tags`
- `prayer_intents`
- `label_confidence`
- `label_source`
- `notes`

## 五、结论

标签建设不是附属工作，而是 daily content 编排的底层能力。
