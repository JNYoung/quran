# 古兰经祷告 App 章节拆分与本地索引方案文档

- 日期：2026-05-09
- 所属主线：研发 / 内容
- 关联文档：`2026-05-09-古兰经祷告App-本地Quran数据落地结构文档.md`
- 关联导航：`2026-05-09-古兰经祷告App-文档导航与拆分方案.md`

## 一、目标

明确本地 Quran 数据下载后，如何拆章节、建索引、支持后续编排。

## 二、章节拆分原则

本地必须保留原生章节结构：
- `surah_number`
- `surah_name`
- `ayahs[]`

这样做的原因：
- 原始结构清晰
- 易于校验 reference
- 易于抽样验证

## 三、平铺索引原则

除了按章节，还要生成 ayah 平铺索引：
- key：`ayah_reference`（如 `2:255`）
- value：该 ayah 的 Arabic + English + base metadata

### 作用
- 快速按 ayah 找内容
- 方便 dev backend 与客户端读取
- 方便后续内容编排

## 四、内容编排索引

在 ayah 平铺索引之外，再做编排层索引：
- `theme -> ayah_ids[]`
- `prayer_intent -> ayah_ids[]`
- `campaign_type -> ayah_ids[]`

## 五、建议输出结构

### 1. 按章节文件
- `surah-001.json`
- `surah-002.json`
- ...

### 2. 总 ayah 索引
- `ayah-index.json`

### 3. intent 索引
- `intent-index.json`

### 4. theme 索引
- `theme-index.json`

## 六、编排使用顺序

后续 daily content 编排默认：
1. 先按 prayer intent 找候选 ayah
2. 再回到 ayah index 取 canonical 数据
3. 再叠加产品层 reflection / push / women mode 变体

## 七、结论

底层数据按章节保留，使用时按 ayah 与 intent 索引消费。

这能同时满足：
- canonical 准确性
- 内容编排灵活性
- 离线与本地开发稳定性
