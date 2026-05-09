# 古兰经祷告 App 数据分析与指标文档

- 日期：2026-05-09
- 所属主线：产品 / 运营 / 测试
- 关联主文档：`2026-05-09-古兰经祷告App产品文档.md`
- 关联技术文档：`2026-05-09-古兰经祷告App技术方案.md`
- 关联导航：`2026-05-09-古兰经祷告App-文档导航与拆分方案.md`

## 一、目标

这条产品线的数据分析，不是为了泛泛看 DAU，而是为了回答 4 个核心问题：

1. 推送有没有把人带回来
2. 用户有没有走完 Today -> Prayer -> Completion 主闭环
3. Women Mode、节日、不同市场/性别的体验是否有效
4. 广告是否在不破坏 sacred flow 的前提下产生收入

## 二、分析框架

建议把数据分析拆成 5 层：

1. 获取层
2. 触达层
3. 行为闭环层
4. 留存层
5. 商业化层

## 三、关键指标总表

## 1. 获取层指标

### 核心指标
- 安装量
- 激活量
- 首次打开率
- onboarding 完成率
- 通知权限授权率

### 关键节点
- `app_install`
- `first_open`
- `onboarding_start`
- `onboarding_complete`
- `notification_permission_granted`
- `notification_permission_denied`

## 2. 触达层指标

### 核心指标
- 远程推送送达率
- 远程推送打开率
- 本地推送触发率
- 本地推送点击率
- 推送去重成功率

### 关键节点
- `push_remote_sent`
- `push_remote_delivered`
- `push_remote_open`
- `push_local_scheduled`
- `push_local_fired`
- `push_local_open`
- `push_deduplicated`

## 3. 行为闭环层指标

### 核心指标
- Today 内容加载成功率
- Today -> Prayer 转化率
- Prayer -> Completion 完成率
- 完整闭环完成率
- Women Mode 切换使用率

### 关键节点
- `today_view`
- `today_loaded_remote`
- `today_loaded_cache`
- `today_loaded_fallback`
- `prayer_start`
- `prayer_complete`
- `completion_view`
- `women_mode_toggle_on`
- `women_mode_toggle_off`

## 4. 留存层指标

### 核心指标
- 次日留存
- 7 日留存
- 14 日留存
- 推送回流率
- 连续 3 天/7 天 completion 比例

### 关键节点
- `app_open`
- `daily_active`
- `return_after_push`
- `streak_day_3`
- `streak_day_7`

## 5. 商业化层指标

### 核心指标
- 广告曝光量
- Completion 页广告曝光率
- 广告点击率
- 单用户广告收入
- 广告后留存变化

### 关键节点
- `ad_impression`
- `ad_click`
- `ad_blocked_by_policy`
- `completion_ad_view`

## 四、产品核心漏斗

这条产品线最重要的漏斗，不是注册漏斗，而是 **daily devotional funnel**。

### 核心漏斗
1. 收到推送
2. 打开 app
3. 看到 today 内容
4. 点击进入 prayer
5. 完成 completion

### 漏斗指标
- Push -> Open
- Open -> Today View
- Today View -> Prayer Start
- Prayer Start -> Completion
- Completion -> Next-day Return

## 五、分维度分析要求

所有关键指标至少按以下维度切：

### 1. 按 app 维度
- 印尼男性
- 印尼女性
- 中东男性
- 中东女性

### 2. 按模式维度
- 普通模式
- Women Mode

### 3. 按内容来源维度
- remote
- cache
- fallback

### 4. 按触达来源维度
- remote push
- local push
- direct open

### 5. 按 campaign 维度
- default daily
- Friday
- Ramadan
- Eid

## 六、Women Mode 专项指标

Women Mode 不能只看开关使用率。

建议重点看：
- Women Mode 用户的次日留存
- Women Mode 下 push 打开率
- Women Mode 下 Today -> Completion 完成率
- Women Mode 下广告曝光率变化
- Women Mode 下用户是否更愿意持续打开

### 关键节点
- `women_mode_content_served`
- `women_mode_push_served`
- `women_mode_completion`

## 七、内容与推送一致性指标

这是这个产品很关键的一层。

### 核心问题
推送把用户带回来后，内容是否“接住了”。

### 建议指标
- push_open 后 10 秒内 today_view 成功率
- push campaign 与 today content campaign 一致率
- push_open 后跳失率

### 关键节点
- `push_open_to_today_success`
- `push_content_mismatch_detected`
- `push_open_bounce`

## 八、离线与兜底专项指标

离线不是边缘情况，而是产品稳定性的一部分。

### 核心指标
- fallback 内容命中率
- cache 命中率
- 无网 today 可读成功率
- 本地推送在离线状态下触发率

### 关键节点
- `offline_mode_detected`
- `today_loaded_cache`
- `today_loaded_fallback`
- `offline_notification_flow_success`

## 九、广告专项指标

广告分析不能只看 CTR。

### 应该同时看
- Completion 页广告曝光率
- 广告后退出率
- 广告后次日留存变化
- Women Mode 场景广告策略是否过重
- Ramadan / Eid 场景广告曝光是否引发体验下降

### 关键节点
- `completion_ad_view`
- `completion_after_ad_exit`
- `ad_policy_block_applied`

## 十、日报 / 周报建议指标

### 日报
- 安装 / 激活
- 推送送达 / 打开
- Today -> Prayer -> Completion 漏斗
- 广告曝光 / 点击
- 异常情况

### 周报
- 4 个 app 对比
- Women Mode 对比
- Friday / Ramadan / Eid campaign 对比
- 留存趋势
- completion 趋势
- 广告与留存关系

## 十一、结论

这条产品线真正要盯的，不是单一 DAU，而是：
- 推送有没有把人带回来
- 内容有没有接住
- 用户有没有完成 ritual
- 广告有没有在不破坏体验的情况下存在

所以数据体系的重点是：**节点完整、漏斗清晰、按人群拆分、按场景拆分。**
