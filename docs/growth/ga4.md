# 古兰经祷告 App Google Analytics 接入与数据要求

- 日期：2026-05-09
- 所属主线：产品 / 研发 / 运营 / 测试
- 关联文档：`2026-05-09-古兰经祷告App-数据分析与指标文档.md`
- 关联导航：`2026-05-09-古兰经祷告App-文档导航与拆分方案.md`

## 一、目标

该产品线后续默认接入 Google Analytics（更准确说建议按 Firebase Analytics / GA4 移动端链路理解），用于承载：
- 留存分析
- 推送回流分析
- 关键行为漏斗分析
- Women Mode 与节日专题效果分析
- 广告与留存平衡分析

## 二、当前执行口径

现阶段不要求一次性把所有埋点都做完，但要从一开始就按“可分析”来设计事件。

执行规则：
- MVP 阶段先把核心事件打全
- 事件命名、属性、用户维度要尽量稳定
- 随开发逐步补齐二级事件和报表维度
- 所有新增埋点优先回写到本项目文档体系和 memory

## 三、第一阶段必须关注的数据

## 1. 留存数据

必须能够看到：
- D1 retention
- D7 retention
- D14 retention
- push 回流后的次日留存
- Women Mode 用户留存
- 节日 campaign 期间留存变化

## 2. 关键事件数据

MVP 必须采集：
- `first_open`
- `onboarding_complete`
- `notification_permission_granted`
- `today_view`
- `prayer_start`
- `prayer_complete`
- `completion_view`
- `push_remote_open`
- `push_local_open`
- `women_mode_toggle_on`
- `women_mode_content_served`
- `ad_impression`
- `ad_click`

## 3. 漏斗数据

必须能分析：
- Push -> Open
- Open -> Today
- Today -> Prayer
- Prayer -> Completion
- Completion -> Next Return

## 4. 稳定性与兜底数据

建议尽早采集：
- `today_loaded_remote`
- `today_loaded_cache`
- `today_loaded_fallback`
- `offline_mode_detected`
- `push_deduplicated`

## 四、事件属性要求

关键事件至少要支持以下属性维度：
- `app_id`
- `market`
- `gender`
- `mode`（normal / women_mode）
- `campaign_type`
- `content_source`（remote/cache/fallback）
- `push_source`（remote/local/direct）
- `language`
- `platform`（android/ios）

## 五、开发过程要求

- GA 事件设计可以随着开发逐步补齐
- 但核心留存与主闭环事件不能后补
- 每新增关键流程时，都要同步考虑是否需要新增事件
- 事件、属性和漏斗变化要及时回写项目文档

## 六、与项目 memory 的关系

这条要求需要作为项目长期约束保留：
- 该产品线默认会接入 Google Analytics / GA4
- 数据重点是留存、关键事件、主闭环漏斗、Women Mode、节日、广告平衡
- 埋点可以随开发补齐，但从 MVP 阶段就要按这个框架设计

## 七、下一步建议

后续开发推进时，建议继续补两类文档：
- `事件命名与属性规范`
- `数据看板模板`
