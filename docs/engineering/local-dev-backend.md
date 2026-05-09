# 古兰经祷告 App 本地 Quran 数据落地结构文档

- 日期：2026-05-09
- 所属主线：研发 / 内容 / 测试
- 关联文档：`2026-05-09-古兰经祷告App-稳定内容源结论文档.md`
- 关联文档：`2026-05-09-古兰经祷告App-Quran种子数据准备文档.md`
- 关联导航：`2026-05-09-古兰经祷告App-文档导航与拆分方案.md`

## 一、目标

把 Quran 数据从“外部 API 可访问”推进到“本地可落地、可切分、可索引、可离线使用”。

## 二、为什么必须本地化

### 1. 稳定性
- 开发不能被外部 API 抖动阻塞
- E2E、seed、离线 today 都要有本地可读数据

### 2. 可编排性
- 内容系统要做跨章节关联
- 不能每次编排都在线实时取数

### 3. 可验证性
- 抽样校验、数据 diff、seed 回归都要基于本地落地数据

## 三、本地数据分层

建议本地数据落地为两层。

## 1. Canonical Quran Layer

保存：
- `surah_number`
- `surah_name`
- `ayah_number`
- `ayah_reference`
- `arabic_text`
- `english_translation`

### 作用
- 作为 canonical seed
- 支撑 today / prayer / seed / dev backend

## 2. Product Content Layer

保存：
- `content_id`
- `theme_tags`
- `prayer_intents`
- `reflection_text`
- `push_title`
- `push_body`
- `women_mode_variant`
- `campaign_variant`

### 作用
- 承载产品包装与运营编排

## 四、落地原则

- 原文层和产品文案层必须分离存储
- 同一 ayah 可以关联多个 prayer intent
- 同一 prayer intent 可以引用多个 ayah
- 本地数据既要支持章节结构，也要支持平铺索引

## 五、最小可行结构

### 目录级
- `quran/surahs/`
- `quran/ayahs/`
- `content/cards/`
- `content/indexes/`

### 数据级
- 按章节文件
- 按 ayah 索引文件
- 按 intent 索引文件

## 六、下一步

### P0
- [ ] 先落一版 canonical Quran 本地结构
- [ ] 先落一版 ayah 平铺索引
- [ ] 先落一版 intent 映射骨架

## 七、结论

这一步的重点不是“大而全数据库”，而是先把本地 canonical 层和产品层切开，让后续开发稳定推进。
