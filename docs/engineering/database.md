# 古兰经祷告 App 数据库表结构文档

- 日期：2026-05-09
- 关联主文档：`2026-05-09-古兰经祷告App执行总文档.md`
- 所属批次：Batch 2 ~ Batch 5
- 状态：执行骨架已建立，后续持续细化

## 一、MVP 核心表

建议先围绕 7 类核心表展开：

1. `app_runtime_config`
2. `content_cards`
3. `content_campaigns`
4. `user_notification_settings`
5. `user_completion_records`
6. `push_delivery_records`
7. `content_versions`

## 二、后续待展开

后续补充：
- 字段级定义
- 主键与索引
- 版本字段
- 去重字段
- women mode 相关字段
- campaign 覆盖关系
