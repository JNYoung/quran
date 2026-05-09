# 古兰经祷告 App 接口文档

- 日期：2026-05-09
- 关联主文档：`2026-05-09-古兰经祷告App执行总文档.md`
- 所属批次：Batch 2 ~ Batch 5
- 状态：执行骨架已建立，后续持续细化

## 一、MVP 核心接口

建议先定义以下接口：

### 配置接口
- `GET /runtime-config`
- `GET /runtime-config/version`

### 内容接口
- `GET /daily-content/today`
- `GET /daily-content/range`
- `GET /daily-content/version`

### 用户设置接口
- `GET /me/notification-settings`
- `PUT /me/notification-settings`

### 完成记录接口
- `POST /me/completions`
- `GET /me/completions`

### 推送相关接口
- `POST /me/push-token`
- `POST /push/open-event`

## 二、后续待展开

后续补充：
- 请求/响应 schema
- 字段说明
- 错误码
- 幂等规则
- 缓存策略
- 鉴权要求
