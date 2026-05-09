# 古兰经祷告 App 高价值 Ayah 精修标注第二批

- 日期：2026-05-09
- 所属主线：内容 / 数据 / 产品
- 关联文档：`2026-05-09-古兰经祷告App-地区性别内容适配规则文档.md`
- 关联文档：`2026-05-09-古兰经祷告App-高价值Ayah精修标注第一批.md`

## 一、这批补了什么

这批继续扩了 20 条高价值 ayah 的人工精修，并开始补 audience fit 层字段：
- `suitable_markets`
- `suitable_genders`
- `women_mode_priority`
- `audience_notes`

## 二、这批的核心规则

### 1. 是否区分印尼/中东、男/女
结论：
- 要区分
- 但不在 canonical `theme_tags / prayer_intents` 层区分
- 而是在 audience fit / packaging 层区分

### 2. 为什么这样做
- 保住 ayah 核心语义稳定
- 同时为 4 个 app 的内容包装留出空间

## 三、当前进展

当前已开始把高价值 ayah 标成：
- 通用适合 `id + mena`
- 通用适合 `male + female`
- 同时对 women mode 的优先级做区分

## 四、下一步

### P0
- [ ] 扩到 50 条高价值 ayah 精修
- [ ] 把 audience fit 字段系统性补入第一批已精修样本
- [ ] 按 women mode priority 建一组候选池
