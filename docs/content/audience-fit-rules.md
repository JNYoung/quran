# 古兰经祷告 App 地区性别内容适配规则文档

- 日期：2026-05-09
- 所属主线：内容 / 产品 / 数据
- 关联文档：`2026-05-09-古兰经祷告App-Ayah标签体系文档.md`
- 关联文档：`2026-05-09-古兰经祷告App-Arabic产品文案层文档.md`
- 关联导航：`2026-05-09-古兰经祷告App-文档导航与拆分方案.md`

## 一、结论

**应该区分印尼/中东以及男/女，但区分层级要控制好。**

不能把地区/性别直接写死在 canonical ayah 语义层，否则标签会爆炸。

## 二、正确分层

### Layer 1：Canonical ayah tags
- `theme_tags`
- `prayer_intents`

这层不区分印尼/中东、男/女。

### Layer 2：Audience fit / packaging layer
- `suitable_markets`
- `suitable_genders`
- `women_mode_priority`
- `tone_variants`

这层才区分：
- 印尼 / 中东
- 男性 / 女性

## 三、为什么这样分

### 1. Ayah 的核心语义不应被市场化拆碎
同一条 ayah 的基本主题，不应该因为市场不同就完全变成另一套标签。

### 2. 真正不同的是“怎么包装给谁”
不同市场和性别差异更多体现在：
- 文案语气
- prayer 引导方式
- push 包装
- women mode 替换

### 3. 这样更利于长期维护
如果把地区/性别直接打进主标签，后续索引会迅速爆炸。

## 四、建议新增字段

在 ayah 标注记录表里，逐步增加：
- `suitable_markets`
- `suitable_genders`
- `women_mode_priority`
- `audience_notes`

## 五、结论

所以答案是：
- **要区分**
- **但不在 canonical theme / intent 层区分**
- **而是在 audience fit / packaging 层区分**
