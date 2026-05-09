# 古兰经祷告 App 跨章节内容关联与祷告编排文档

- 日期：2026-05-09
- 所属主线：产品 / 运营 / 内容
- 关联文档：`2026-05-09-古兰经祷告App内容CMS结构文档.md`
- 关联文档：`2026-05-09-古兰经祷告App-内容数据源与可信度文档.md`
- 关联导航：`2026-05-09-古兰经祷告App-文档导航与拆分方案.md`

## 一、目标

“每天一条 ayah”虽然是 MVP 入口，但真正高质量的内容编排，不能只按章节顺序或随机抽取。

很多适合同一天祷告主题的内容，可能来自：
- 不同 surah
- 不同 ayah
- 不同主题层级

所以内容系统需要支持 **跨章节关联与祷告主题编排**。

## 二、核心结论

这条产品线的 daily content，不应默认按：
- Quran 章节顺序推送
- 单条随机 ayah 推送

而应默认按：
- **祷告主题**
- **用户状态**
- **市场/性别**
- **Women Mode / 节日场景**

来编排。

## 三、内容关联的 3 个层级

## 1. Ayah -> Theme 关联

每条 ayah 不只属于一个章节位置，还要属于一个或多个主题。

例如主题：
- gratitude
- calm
- patience
- trust
- family
- healing
- responsibility

## 2. Theme -> Prayer Intent 关联

主题还要继续下沉到“当天祷告意图”。

例如：
- 今天需要平静
- 今天需要安定感
- 今天需要坚持
- 今天需要面对压力
- 今天需要被理解

这一步很关键，因为用户真正感知的是 prayer intent，而不是后台主题标签。

## 3. Prayer Intent -> Content Pack 关联

同一个 prayer intent，可以映射到多个候选 ayah / reflection 组合。

例如“平静”这个 intent：
- 可以来自不同章节
- 可以针对男性版写成节律型 reflection
- 可以针对女性版写成 gentle reflection
- 可以在 Women Mode 下改成 softer dua 提示

## 四、为什么跨章节关联很关键

### 1. 更符合用户真实需求
用户不是按 Quran 章节消费，而是按当下状态寻找 spiritual support。

### 2. 更适合 daily devotional product
这是 daily companion，不是顺序阅读器。

### 3. 更适合四壳差异化
同一个主题可以服务 4 个 app，但包装不同。

## 五、内容编排规则

## 1. 每日先定 prayer intent，再选 ayah
而不是先选 ayah，再硬写文案。

## 2. 同一 prayer intent 可关联多个 ayah 候选
- 主候选
- 备选
- women mode 替换候选
- Friday / Ramadan 候选

## 3. 同一 ayah 可进入多个 prayer intent
但要控制不要在短周期内反复出现。

## 六、内容结构建议

建议在 CMS 中额外增加：
- `theme_tags`
- `prayer_intents`
- `related_content_ids`
- `alternate_ayah_ids`
- `women_mode_alternate_ids`
- `friday_alternate_ids`
- `ramadan_alternate_ids`

## 七、编排待办

这部分应进入内容侧 P0 / P1：

### P0
- [ ] 建立 theme -> prayer intent 映射框架
- [ ] 定义 30 天内容池的 prayer intent 分布
- [ ] 明确 women mode 下的 intent 替换规则

### P1
- [ ] 建立 related content 结构
- [ ] 建立 Friday / Ramadan 替换内容映射

## 八、结论

内容质量的关键，不只是“引用哪一节经文”，而是：
- 为什么今天给这条
- 它在今天的祷告里承担什么意图
- 它和其他章节的内容如何形成主题支持

这部分会决定这条产品线是不是只是“经文推送器”，还是一个真正有内容理解力的 devotional companion。
