# 古兰经祷告 App 内容审核与发布规则

- 日期：2026-05-09
- 所属主线：运营
- 关联主文档：`2026-05-09-古兰经祷告App内容CMS结构文档.md`
- 关联 SOP：`2026-05-09-古兰经祷告App-内容生产SOP.md`
- 关联导航：`2026-05-09-古兰经祷告App-文档导航与拆分方案.md`

## 一、目标

这份规则的目标是确保所有上线内容都满足 4 个要求：
- Quran 引用准确
- 宗教表达尊重
- 目标人群语气正确
- 推送、Today、Prayer、Completion 四处内容一致

## 二、审核对象

每个 `DailyContentCard` 上线前，至少审核以下内容：
- ayah reference
- arabic text
- english translation
- reflection
- prayer/dua prompt
- completion blessing
- push title/body
- women mode 替换文案（如有）

## 三、审核维度

## 1. 准确性审核
- ayah 编号是否准确
- Arabic 原文是否与 reference 一致
- English translation 是否与选定译本一致
- 不允许出现错引、漏引、拼接错误

## 2. 宗教表达审核
- 文案不得轻佻
- 不得把 devotional 内容写成营销 slogan
- 不得把用户状态解释成带道德指责的宗教判断

## 3. 人群语气审核
- 印尼版是否足够生活化且自然
- 中东版是否足够庄重
- 男性版是否过度强压
- 女性版是否流于刻板印象
- Women Mode 是否真正降低压力

## 4. 链路一致性审核
必须检查：
- push 文案和 Today 主题是否一致
- Today 和 Prayer 引导是否一致
- Completion 祝福是否延续同一主题
- women mode 替换内容是否整链切换

## 四、审核结论类型

建议只保留 4 种结论：
- `approved`
- `approved_with_minor_edits`
- `needs_revision`
- `blocked`

## 五、发布前检查清单

上线前必须确认：
- 内容版本号已生成
- 4 个 app 对应变体已齐全
- women mode 替换内容已补齐
- Friday / Ramadan / Eid campaign 覆盖关系正确
- 推送文案与内容卡一致
- 离线内容包已同步

## 六、发布规则

### 日常内容发布
- 建议按周或双周批量发布
- 每次发布至少覆盖未来 7-14 天

### 节日内容发布
- Ramadan / Eid / Friday 内容必须提前准备
- 节日前至少完成一轮完整审核

### 紧急修正发布
适用于：
- Quran reference 错误
- women mode 错配
- 推送文案和 today 内容错配
- campaign 覆盖异常

紧急修正允许跳过常规节奏，但不能跳过准确性审核。

## 七、回滚规则

满足以下任一条件应立即回滚：
- Quran 引用错误
- 广泛错配内容已上线
- women mode 内容明显失当
- 节日 campaign 覆盖错误造成大面积错误触达

回滚后必须：
- 恢复上一稳定版本
- 记录问题原因
- 标记受影响 app / 日期 / campaign

## 八、质量红线

绝不允许上线：
- Quran 引用错误
- 推送和内容不一致
- 对女性用户造成额外羞耻/压力的表达
- 广告语气混入 devotional 内容
- 把节日专题写成过强增长活动文案

## 九、结论

这份规则本质上是这条产品线的内容质控底线。

内容生产可以快，但审核和发布不能乱。
