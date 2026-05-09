# 古兰经祷告 App 客户端模块化架构文档

- 日期：2026-05-09
- 项目：古兰经祷告 App 产品线
- 范围：Android + iOS 双端客户端架构
- 目标：一套跨端主工程，以模块化方式支撑 4 个独立 app

## 一、架构结论

这条产品线客户端最合理的做法，不是：
- 4 个 app 各写一套
- 或先只做安卓，再补 iOS

而是：
- **一套双端主工程**
- **按模块拆通用能力**
- **按平台做适配层**
- **按 app 做品牌壳和配置壳**

这是因为这条产品线同时有 3 种复用关系：

1. **4 个 app 之间大量复用**
2. **Android / iOS 之间大量复用**
3. **推送 / 内容 / 祷告闭环 / 离线逻辑之间需要统一状态管理**

所以最稳妥的结构是：
**Core Modules + Platform Adapters + Feature Modules + App Shells**

## 二、客户端总体分层

建议客户端按 4 层设计。

## 1. Core Modules 通用核心层

这一层承载真正的业务能力，与品牌、市场、平台解耦。

建议模块：
- `core-config-runtime`
- `core-content-engine`
- `core-push-orchestrator`
- `core-prayer-flow`
- `core-user-state`
- `core-offline-cache`
- `core-analytics`
- `core-ad-policy`

## 2. Platform Adapter 平台适配层

这一层负责 Android / iOS 差异。

建议模块：
- `platform-notification-android`
- `platform-notification-ios`
- `platform-storage-android`
- `platform-storage-ios`
- `platform-background-android`
- `platform-background-ios`
- `platform-ads-android`
- `platform-ads-ios`

## 3. Feature UI Modules 功能模块层

这一层负责页面功能与交互。

建议模块：
- `feature-today`
- `feature-prayer`
- `feature-completion`
- `feature-history`
- `feature-saved`
- `feature-settings`
- `feature-onboarding`

## 4. App Shells 产品壳层

这一层负责 4 个 app 的品牌与配置接入。

建议模块：
- `app-id-male`
- `app-id-female`
- `app-me-male`
- `app-me-female`

## 三、为什么必须模块化

## 1. 4 个 App 不是 4 套产品逻辑

它们的真正差异主要在：
- 品牌命名
- 默认语言
- 主题包
- 内容包
- 推送语气
- 女性模式开关与策略
- 广告规则

而不是：
- Today 页逻辑
- 内容缓存逻辑
- Prayer 状态机
- 推送去重逻辑
- streak 计算逻辑

这些应该写一次。

## 2. Android / iOS 差异主要是系统能力差异

比如：
- 通知权限机制不同
- 后台刷新机制不同
- 本地通知调度能力不同
- 广告 SDK 集成方式不同
- 本地存储适配不同

这些差异应该被封装进 adapter，而不是散在业务代码里。

## 3. 推送驱动型产品特别需要解耦

这个项目的核心复杂度不在页面，而在：
- 内容什么时候更新
- 推送什么时候发
- 本地通知怎么兜底
- 离线内容怎么回退
- 远程和本地如何去重

如果这些逻辑直接写进页面层，后期会迅速失控。

## 四、模块详细拆分

## 1. `core-config-runtime`

### 职责
- 读取当前 app 的市场、性别、语言、主题、推送包、广告规则
- 负责默认配置 + 远端配置 + 本地缓存配置三层合并

### 输入
- 安装包默认配置
- 远端配置增量
- 本地最近配置

### 输出
- 当前运行时配置对象

### 依赖
- `core-offline-cache`

## 2. `core-content-engine`

### 职责
- 根据日期、market、gender、campaign、women mode 选择当天内容
- 统一提供 Today / Prayer / Completion 所需内容

### 输入
- 内容包
- 用户状态
- 当前日期与活动专题

### 输出
- 当日 `DailyContentCard`

### 依赖
- `core-config-runtime`
- `core-user-state`
- `core-offline-cache`

## 3. `core-push-orchestrator`

### 职责
- 协调远程推送、本地推送、本地重建、去重、降频
- 输出“今天该不该提醒、提醒什么、由谁提醒”

### 输入
- 用户提醒设置
- 内容引擎输出
- 推送送达/打开状态
- 平台能力状态

### 输出
- 本地推送调度计划
- 推送去重标记
- 推送事件上报

### 依赖
- `core-content-engine`
- `core-user-state`
- `core-analytics`
- 平台通知 adapter

## 4. `core-prayer-flow`

### 职责
- 管理 Today -> Prayer -> Completion 的流程状态
- 统一定义开始、暂停、完成、反思展示规则

### 输出
- 页面状态机
- completion 状态
- streak 更新事件

### 依赖
- `core-content-engine`
- `core-user-state`

## 5. `core-user-state`

### 职责
- 保存用户设置与轻状态

### 状态内容
- 提醒时间
- 第二提醒是否开启
- women mode 状态
- streak
- 历史记录
- 收藏
- 上次打开时间
- 最近推送打开行为

### 依赖
- `core-offline-cache`

## 6. `core-offline-cache`

### 职责
- 管理配置缓存、内容缓存、用户状态缓存
- 提供统一离线读取接口

### 缓存对象
- config
- content
- push templates
- ad rules
- local flags
- completion history

## 7. `core-analytics`

### 职责
- 统一埋点接口
- 支撑 A/B 和转化分析

### 输出事件
- push sent/open
- content source loaded
- prayer start/complete
- women mode toggled
- ad impression/click

## 8. `core-ad-policy`

### 职责
- 控制广告位启用规则、频控、禁投区

### 输出
- 当前页面广告是否可显示
- 应显示哪个 placement

## 五、平台适配层设计

## 1. 通知适配

### `platform-notification-android`
负责：
- Android 通知权限适配
- 本地通知注册
- 通知渠道管理
- 后台/设备限制兼容

### `platform-notification-ios`
负责：
- iOS 通知授权
- UNNotification 本地通知调度
- APNs / FCM token 对接
- iOS 前后台通知处理

## 2. 存储适配

### `platform-storage-android`
- Android 本地数据库/kv 适配

### `platform-storage-ios`
- iOS 本地数据库/kv 适配

## 3. 后台任务适配

### `platform-background-android`
- 后台刷新
- 定时重建本地通知
- 内容静默更新

### `platform-background-ios`
- iOS 可行范围内的 background fetch / refresh
- 静默更新能力适配
- 受限场景的降级逻辑

## 4. 广告适配

### `platform-ads-android`
- Android 广告 SDK 封装

### `platform-ads-ios`
- iOS 广告 SDK 封装

## 六、Feature 模块设计

## 1. `feature-onboarding`
负责：
- 语言选择
- 提醒时间选择
- 女性版第二提醒说明
- 通知权限引导

## 2. `feature-today`
负责：
- 今日经文展示
- 今日主题
- 进入 Prayer
- 首页广告位展示边界

## 3. `feature-prayer`
负责：
- 祷告模式 UI
- 静默计时
- 完成按钮

## 4. `feature-completion`
负责：
- 完成祝福
- 今日 reflection
- 广告位
- 收藏/分享轻动作

## 5. `feature-history`
负责：
- 历史内容回看
- 完成记录

## 6. `feature-saved`
负责：
- 收藏内容列表
- 女性版私人 dua list（后续可扩展）

## 7. `feature-settings`
负责：
- 提醒设置
- women mode
- 语言
- 去广告入口（后续）

## 七、App Shell 设计

每个 app shell 不应该复制业务代码，只负责：
- 注入自身 `app_id`
- 加载自身 brand assets
- 指向自己的 content pack / push pack / ad ruleset
- 注入默认语言和默认主题

### 示例

#### `app-id-male`
- `market=ID`
- `gender=male`
- `theme_pack=iman_pagi`
- `push_pack=id_male_v1`

#### `app-id-female`
- `market=ID`
- `gender=female`
- `theme_pack=sahabat_muslimah`
- `women_mode_enabled=true`

#### `app-me-male`
- `market=ME`
- `gender=male`
- `rtl_enabled=true`

#### `app-me-female`
- `market=ME`
- `gender=female`
- `rtl_enabled=true`
- `women_mode_enabled=true`

## 八、推荐技术路线

从“需要一套双端主工程 + 模块化 + 重推送 + 内容驱动”的角度，我更建议走：

### 推荐
- **Flutter + module/package 结构**

### 原因
- Android/iOS 共享率高
- 推送、离线、本地存储、状态管理都比较成熟
- 很适合“一套主工程 + 多 flavor + 多 module”
- 后续 4 个 app 壳管理成本低

### 备选
- React Native

### 不推荐作为第一选择
- 原生双写

原因：
- 4 个 app × 2 平台，维护成本过高
- 推送和离线逻辑容易双份漂移

## 九、模块依赖关系原则

必须遵守 4 条原则：

1. Feature 不直接依赖平台实现，只依赖 core 接口
2. Core 不直接依赖具体 app shell
3. App shell 只做装配，不承载复杂逻辑
4. 平台 adapter 只做系统能力封装，不写产品决策

## 十、实施顺序建议

### Phase 1
- 建主工程
- 搭 core modules
- 搭 feature-today / prayer / completion
- 做单 app 壳跑通

### Phase 2
- 接 Android + iOS 推送 adapter
- 接离线缓存与内容包
- 接配置 runtime

### Phase 3
- 复制 4 个 app shell
- 接广告规则与 analytics
- 接 women mode 差异逻辑

### Phase 4
- 做节日 campaign
- 做 A/B 与推送优化

## 十一、我对客户端架构的判断

### 结论 1
这个项目非常适合 module 化开发，而且不 module 化后面一定会乱。

### 结论 2
真正需要复用的不是页面，而是：
- 内容引擎
- 推送编排
- 祷告闭环状态机
- 离线缓存
- 配置 runtime

### 结论 3
4 个 app 与双端兼容不是两个问题，本质上都是同一个问题：
**如何把共性抽出来，把差异压缩到配置和 adapter。**

这正是模块化架构最适合解决的事。
