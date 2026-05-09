# 古兰经祷告 App 内容 CMS 结构文档

- 日期：2026-05-09
- 项目：古兰经祷告 App 产品线
- 目标：支撑 4 个 app 的日更内容、女性差异化内容、节日专题内容与推送文案协同运营

## 一、CMS 的角色定义

这套 CMS 不是普通资讯 CMS，也不是长文章后台。

它的核心任务只有 3 个：
- 组织每日经文内容
- 为 4 个 app 输出差异化内容
- 为推送、本地提醒、Today、Prayer、Completion 提供统一内容源

所以它本质上是一个 **daily devotional content orchestration system**。

## 二、CMS 必须解决的问题

1. 同一套 Quran ayah，如何给不同地区与性别生成不同包装
2. 如何让推送文案、首页文案、祷告引导、完成页反思保持统一主题
3. 如何处理女性特殊阶段内容
4. 如何切换 Ramadan / Eid 等节日专题
5. 如何保证离线内容包与线上内容版本一致

## 三、CMS 内容分层

建议把 CMS 拆成 5 层。

## 1. Canonical Ayah 层

这是最底层，不带市场与性别偏向。

字段：
- `ayah_id`
- `surah_number`
- `ayah_number`
- `ayah_reference`
- `arabic_text`
- `canonical_theme_tags`
- `source_translation_refs`
- `audio_ref`（后续）

职责：
- 存放原始 ayah 数据
- 作为所有内容衍生的共同源头

## 2. Theme Layer 主题层

用于把 ayah 组织成用户可感知的 spiritual 场景。

建议主题池：
- gratitude
- patience
- calm
- family
- trust
- forgiveness
- consistency
- hope
- healing
- responsibility
- stress
- marriage
- motherhood
- self_acceptance

职责：
- 为 ayah 建立“今天适合用在什么场景”的语义标签
- 支撑不同 app 的内容筛选与排期

## 3. Market Layer 市场层

在不改变宗教核心内容的前提下，做地区本地化表达。

### 印尼层
重点：
- Bahasa Indonesia 文案
- 更生活化、更柔和、更陪伴感
- 更适合日常习惯提醒

### 中东层
重点：
- Arabic-first
- 更庄重、更尊重 religious tone
- 避免过度产品化和生活方式化表达

职责：
- 决定翻译风格、reflection 语气、推送语言、标题语义

## 4. Gender Layer 性别层

这个层决定“同一个主题如何被不同性别的人感知和接受”。

### 男性层
关键词：
- discipline
- steadiness
- responsibility
- resilience
- focus

### 女性层
关键词：
- calm
- understood
- gentle
- inner peace
- emotional support

职责：
- 生成不同版本的 reflection
- 生成不同版本的 prayer prompt
- 控制推送文案语气
- 决定 women mode 内容替换规则

## 5. Campaign Layer 运营层

用于承载节日、专题、连续活动和特殊推送节奏。

类型建议：
- daily default
- Ramadan special
- Eid special
- Friday featured
- women care mode
- recovery / calm week

职责：
- 覆盖普通排期
- 让运营可集中切换专题包，而不改底层结构

## 四、CMS 内容单元设计

建议最核心内容单元为 `DailyContentCard`。

### 字段建议
- `content_id`
- `date_key`
- `app_scope`
- `market`
- `gender`
- `campaign_type`
- `theme`
- `ayah_reference`
- `arabic_text`
- `translation_text`
- `reflection_title`
- `reflection_text`
- `prayer_prompt`
- `completion_blessing`
- `notification_title`
- `notification_body`
- `secondary_notification_title`
- `secondary_notification_body`
- `menstruation_safe`
- `priority`
- `status`（draft/review/approved/published/archived）
- `version`

### 为什么要把推送文案放进同一内容单元

因为这个产品是“内容驱动 + 推送驱动”的：
- 推送说的内容
- 首页看到的内容
- Prayer 页面引导内容
- 完成页祝福内容

必须是同一主题链路，不然体验会散。

## 五、内容池组织方式

建议不是按 app 建 4 套完全独立数据库，而是按“共享源 + 差异包装”组织。

### 结构建议

#### 1. Shared Quran Pool
- 所有 ayah 原始库

#### 2. Shared Theme Pool
- 所有主题标签与主题说明

#### 3. App Variant Pool
- ID male
- ID female
- ME male
- ME female

#### 4. Special Campaign Pool
- Ramadan
- Eid
- Friday
- women mode

### 好处
- 降低内容生产成本
- 同一条 ayah 可多次复用但不同包装
- 节日切换和女性模式切换更容易维护

## 六、内容生产工作流

建议内容工作流拆成 6 步。

## 1. 选 ayah
- 从 canonical pool 里选适合本阶段主题的 ayah

## 2. 标主题
- 给 ayah 打主题标签
- 确定适配人群和节日属性

## 3. 写 4 套包装
- 印尼男性版 reflection
- 印尼女性版 reflection
- 中东男性版 reflection
- 中东女性版 reflection

## 4. 写推送文案
- 主推送文案
- 女性版第二提醒文案（如有）
- 节日替换文案（如有）

## 5. 审核
审核重点：
- 宗教表达是否尊重
- 语气是否符合市场
- 女性向内容是否真实被理解而非刻板化
- 推送是否过度制造压力

## 6. 发布
- 发布到内容版本系统
- 同步生成离线内容包
- 通知推送系统可调用新内容

## 七、90 天内容池规划建议

建议第一阶段直接准备 90 天内容，而不是每天临时写。

### 结构建议
- 60 天常规主题池
- 20 天女性强化/情绪修复池
- 10 天节日或 Friday 特别池

### 节奏建议
- 不连续三天使用同一主题
- 每周至少有 1 天偏平静修复
- 女性版每周至少有 2 天明显强化“被理解/内在安定”
- 男性版每周至少有 2 天强化“节律/责任/坚持”

## 八、女性模式内容结构

女性模式不应只是关闭打卡，而应切换内容逻辑。

### 切换原则
- 降低完成压力
- 强化 calm / dua / reflection
- 减少“必须完成 today prayer”的暗示

### 内容替换项
- `prayer_prompt` -> softer_dua_prompt
- `completion_blessing` -> gentle_presence_message
- `notification_body` -> low-pressure reminder

### 专属主题建议
- gentleness
- healing
- emotional safety
- quiet remembrance
- trust in difficult days

## 九、节日与专题内容策略

### Ramadan
- 强化 spiritual momentum
- 可增加 morning / evening 双节点提醒
- 完成页祝福更节日化

### Eid
- 频率降低
- 更重祝福与感恩

### Friday
- 可做每周固定特色内容
- 用于提升 ritual 感和 weekly memory

## 十、CMS 后台视图建议

建议后台不要做成重型编辑器，而是做 4 个核心视图：

1. Content Calendar
2. Variant Editor
3. Campaign Manager
4. Review Queue

### 1. Content Calendar
- 按日查看 4 个 app 当天内容是否齐全
- 一眼看出未来 30/90 天是否缺内容

### 2. Variant Editor
- 同屏查看同一 ayah 在 4 个 app 下的差异包装
- 方便避免语气跑偏

### 3. Campaign Manager
- 节日、Friday、women mode 专题配置

### 4. Review Queue
- 待审核内容
- 待发布内容
- 待回滚内容

## 十一、内容质量规则

CMS 必须有明确的质量红线。

### 不允许
- 语义轻浮
- 过度营销化标题
- 过度命令式推送
- 对女性内容的刻板印象化表达
- 把广告语气混进 devotional 内容

### 必须保证
- Quran 引用准确
- 语气与目标人群一致
- 推送、首页、祷告、完成页是一条完整主题链
- 离线包与线上内容版本一致

## 十二、我对 CMS 的判断

### 结论 1
CMS 是这条产品线真正的内容操作系统，不只是后台。

### 结论 2
这条产品线成败，更多取决于：
- 内容策展能力
- 4 套差异包装能力
- 女性模式内容细腻度
- 节日与日常节奏控制

### 结论 3
如果 CMS 设计得好，4 个 app 的扩张成本会非常低；如果 CMS 只是简单文章后台，后续运营会很重、很乱。
