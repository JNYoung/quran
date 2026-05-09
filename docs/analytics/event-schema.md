# 古兰经祷告 App 事件命名与属性规范

- 日期：2026-05-09
- 所属主线：研发 / 产品 / 运营 / 测试
- 关联文档：`2026-05-09-古兰经祷告App-GoogleAnalytics接入与数据要求.md`
- 关联文档：`2026-05-09-古兰经祷告App-数据分析与指标文档.md`
- 关联导航：`2026-05-09-古兰经祷告App-文档导航与拆分方案.md`

## 一、目标

这份文档用于统一：
- 事件命名方式
- 属性命名方式
- 核心事件最小集
- 后续开发补事件时的约束

目标是避免开发过程中出现：
- 同一动作多个名字
- 属性字段不统一
- 漏斗节点无法串起来

## 二、命名原则

### 1. 事件名统一用英文小写下划线
例如：
- `today_view`
- `prayer_start`
- `prayer_complete`
- `push_remote_open`

### 2. 事件名描述“发生了什么”
不要写成页面名或模糊名词。

正确：
- `completion_view`
- `notification_permission_granted`

不建议：
- `completion_page`
- `notification_ok`

### 3. 属性名也统一用英文小写下划线
例如：
- `app_id`
- `market`
- `gender`
- `campaign_type`

## 三、全局公共属性

所有关键事件默认带上：
- `app_id`
- `market`
- `gender`
- `platform`
- `language`
- `mode`（normal / women_mode）
- `campaign_type`
- `content_source`（remote/cache/fallback/na）
- `push_source`（remote/local/direct/na）
- `event_time`

## 四、MVP 必备事件

## 1. 获取与 onboarding
- `first_open`
- `onboarding_start`
- `onboarding_complete`
- `notification_permission_granted`
- `notification_permission_denied`

## 2. 内容与主闭环
- `today_view`
- `today_loaded_remote`
- `today_loaded_cache`
- `today_loaded_fallback`
- `prayer_start`
- `prayer_complete`
- `completion_view`

## 3. 推送
- `push_remote_sent`
- `push_remote_delivered`
- `push_remote_open`
- `push_local_scheduled`
- `push_local_fired`
- `push_local_open`
- `push_deduplicated`

## 4. Women Mode
- `women_mode_toggle_on`
- `women_mode_toggle_off`
- `women_mode_content_served`
- `women_mode_push_served`
- `women_mode_completion`

## 5. 广告
- `ad_impression`
- `ad_click`
- `completion_ad_view`
- `ad_policy_block_applied`

## 五、关键事件专项属性

### `today_view`
建议额外带：
- `content_id`
- `theme`
- `is_first_today_view`

### `prayer_start`
建议额外带：
- `content_id`
- `entry_point`（today/push/direct）

### `prayer_complete`
建议额外带：
- `content_id`
- `duration_bucket`

### `push_remote_open` / `push_local_open`
建议额外带：
- `notification_id`
- `push_pack_version`
- `scheduled_slot`

### `ad_impression`
建议额外带：
- `placement_id`
- `page_name`
- `ad_context`（normal/women_mode/campaign）

## 六、禁止事项

- 不要临时发明近义事件名
- 不要同一事件在不同端带不同核心属性
- 不要把页面展示和动作完成混成一个事件
- 不要把 women mode 逻辑埋在普通事件里而不打标

## 七、后续补充原则

后续每加一个新事件，都要明确：
- 它解决什么分析问题
- 是否可复用已有事件
- 它的漏斗位置是什么
- 它是否需要写进 GA 接入要求文档和数据看板模板

## 八、结论

埋点规范不是文档装饰，而是这条产品线数据体系的地基。

如果命名和属性从一开始就乱，后面留存、漏斗、women mode、广告分析都会失真。
