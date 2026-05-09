# 古兰经祷告 App Ayah 标注记录表第一版

- 日期：2026-05-09
- 所属主线：内容 / 数据 / 研发
- 关联文档：`2026-05-09-古兰经祷告App-Ayah标签体系文档.md`
- 关联文档：`2026-05-09-古兰经祷告App-ThemeTag与PrayerIntent标注规则文档.md`

## 一、目标

产出第一版全量 ayah 标注记录表，作为后续人工复核、内容编排、intent 扩展和索引迭代的底板。

## 二、当前落地结果

第一版记录表已输出到：
- `projects/quran-data/output/content/ayah-label-records.json`

当前记录表字段包括：
- `ayah_reference`
- `arabic_text`
- `english_translation`
- `theme_tags`
- `prayer_intents`
- `label_confidence`
- `label_source`
- `notes`

## 三、当前版本性质

当前是 **bootstrap v1**：
- 已覆盖全量 ayah
- 已产出真实可用标签字段
- 但仍属于第一轮规则驱动标注，不是最终人工精修版

## 四、当前用途

- 支持 intent-index / theme-index 第一轮填充
- 支持 30 天内容池初步筛选
- 支持后续人工复核与重点 ayah 精修

## 五、下一步

### P0
- [ ] 抽样复核 20-50 条 ayah 标注质量
- [ ] 标记高价值 ayah 的人工精修优先级
- [ ] 建立 `manual_curated` 升级流程

## 六、结论

现在已经不是“准备做标签”，而是已经拥有一版全量 ayah 标注记录表，可以直接继续往内容生产和精修流程推进。
