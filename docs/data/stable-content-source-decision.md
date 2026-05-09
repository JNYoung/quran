# 古兰经祷告 App 稳定内容源结论文档

- 日期：2026-05-09
- 所属主线：内容 / 研发 / 运营
- 关联文档：`2026-05-09-古兰经祷告App-内容源候选清单与筛选标准.md`
- 关联文档：`2026-05-09-古兰经祷告App-内容数据源与可信度文档.md`
- 关联导航：`2026-05-09-古兰经祷告App-文档导航与拆分方案.md`

## 一、今天的目标

今天优先把“稳定内容源”这件事定下来，不再停留在泛候选阶段。

## 二、结论

当前最稳妥的方案是：

### 主方案
- **Canonical / 校验参考源：`Quran.com Developers / Quran Foundation API Docs`**
- **开发期主取数源：`AlQuran Cloud`**

### 备份方案
- **英文译文交叉校验 / 备选：`QuranEnc API`**
- **批量 seed / 离线化候选：`fawazahmed0/quran-api`**

## 三、为什么这样定

## 1. Quran.com 适合作为 canonical reference

当前可确认信号：
- Quran.com developers 页面明确提供 API docs 入口
- Quran.com / Quran Foundation 的定位更像可信基准与开发者正式入口
- 还提供 Quran MCP、官方项目和多端应用链路

判断：
- 更适合做“权威参考源 / canonical 校验源”
- 后续凡是 ayah reference、文本校验、官方一致性判断，优先参考这一侧

## 2. AlQuran Cloud 适合作为开发期主取数源

当前可确认信号：
- 支持按 ayah / surah / edition 拉取
- 明确支持 Arabic 原文和英文译本（如 `en.asad`、`en.pickthall`）
- 文档示例足够直接，适合快速开发与本地 seed 验证

判断：
- 最适合今天就开始推进开发期取数
- 适合作为本地 dev backend、seed 数据、内容原型阶段的主接口源

## 3. QuranEnc 适合作为英文译文交叉校验

当前可确认信号：
- 提供 translation API 入口
- 更适合作为 translation comparison / fallback

判断：
- 不作为第一主取数源，但可以作为英文译文层的交叉校验源

## 4. fawazahmed0/quran-api 适合作为 seed / 批量资料候选

当前可确认信号：
- 覆盖多翻译、多语言
- 更像“批量数据集合 / 开发友好资料源”

判断：
- 更适合 seed 构建、离线化预处理、数据导入准备
- 不优先作为唯一 runtime 主源

## 四、今天定下来的执行口径

### Arabic 原文层
- 主取数：`AlQuran Cloud`
- canonical 校验：`Quran.com`

### English translation 层
- 主取数：`AlQuran Cloud` 中固定使用 `en.asad`
- 交叉校验：`QuranEnc`

### Seed / 批量离线层
- 优先候选：`fawazahmed0/quran-api`
- 补充候选：`AlQuran Cloud`

## 五、今天之后立刻要做的事

### P0
- [x] 最终固定一个英文译本标识：`en.asad`
- [ ] 用 AlQuran Cloud 验证 5-10 条 ayah 抓取是否稳定
- [ ] 用 Quran.com 做 reference / text spot check

### P1
- [ ] 建立双源校验规则
- [ ] 建立 seed 导入策略

## 六、风险提醒

当前还没有完成 license / 长期 SLA 级别的正式法务确认，因此：
- 现阶段结论适用于“开发期稳定内容源”
- 后续进入正式上线前，仍应补一轮来源许可与长期稳定性复核

## 七、最终结论

今天先把事情做实：
- **Quran.com = canonical reference / 校验源**
- **AlQuran Cloud = 开发期主取数源**
- **QuranEnc = 英文校验备份**
- **fawazahmed0/quran-api = seed / 批量离线候选**

这个组合已经足够支持下一步内容池、seed 数据、本地 dev backend、E2E 和内容编排继续推进。
