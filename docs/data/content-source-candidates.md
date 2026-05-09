# 古兰经祷告 App 内容源候选清单与筛选标准

- 日期：2026-05-09
- 所属主线：内容 / 运营 / 研发
- 关联文档：`2026-05-09-古兰经祷告App-内容数据源与可信度文档.md`
- 关联导航：`2026-05-09-古兰经祷告App-文档导航与拆分方案.md`

## 一、目标

基于当前调研，先收敛一版可实际使用的内容源候选池，并给出筛选标准。

## 二、筛选标准

内容源优先级按以下标准判断：

### P0 标准
- 可稳定访问
- 能按 ayah / surah 精确取数
- Arabic 原文与 English translation 可校验
- 文档明确
- 适合本地 seed / dev backend / CMS 前处理使用

### P1 标准
- 支持多译本
- 支持按章节或 ayah 拉取
- 可批量导入或离线化

### 风险项
- 许可不清
- 接口长期稳定性未知
- 文档不完整
- 数据格式不稳定

## 三、当前候选源

## 1. AlQuran Cloud
- 地址：`https://alquran.cloud/api`
- 特征：支持 Arabic 原文、英文译本、多 edition、按 ayah/surah 拉取
- 当前判断：适合作为第一轮开发期内容源候选
- 用途建议：
  - dev backend 内容拉取参考
  - seed 数据抓取候选
  - ayah/reference 校验候选

## 2. Quran.com Developers
- 地址：`https://quran.com/developers`
- 特征：官方感更强，适合作为 canonical reference 参考
- 当前判断：适合作为可信参考源和校验源
- 用途建议：
  - canonical 校验
  - 后续更正式的内容基准源评估

## 3. QuranEnc API
- 地址：`https://quranenc.com/en/home/api/`
- 特征：支持 translation 接口
- 当前判断：适合作为英文翻译层备选/比对源
- 用途建议：
  - 英文译文交叉校验
  - translation fallback 候选

## 4. fawazahmed0/quran-api
- 地址：`https://github.com/fawazahmed0/quran-api`
- 特征：多语言、多翻译、开发友好
- 当前判断：适合作为 seed / 批量导入资料源候选
- 用途建议：
  - 批量离线化
  - dev seed 构建参考

## 四、当前建议结论

### Arabic 原文层
优先候选：
1. Quran.com / canonical reference
2. AlQuran Cloud

### English translation 层
优先候选：
1. AlQuran Cloud 中固定选定的英文译本
2. QuranEnc 作为交叉校验/备选

### 开发期 seed / 批量导入层
优先候选：
1. fawazahmed0/quran-api
2. AlQuran Cloud

## 五、下一步待办

### P0
- [ ] 明确 Arabic 原文最终主来源
- [ ] 明确 English translation 最终主译本
- [ ] 做一轮内容源可用性验证

### P1
- [ ] 形成 seed 导入脚本策略
- [ ] 形成双源校验策略

## 六、结论

当前最稳的做法不是押单一来源，而是：
- 选一个主来源
- 配一个校验来源
- 开发期同时准备 seed 化能力

这样既稳定，又能降低数据风险。
