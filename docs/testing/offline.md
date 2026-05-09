# 古兰经祷告 App 测试流程文档

- 日期：2026-05-09
- 关联主文档：`2026-05-09-古兰经祷告App执行总文档.md`
- 目标：在开发过程中持续补齐验证链路，不让测试滞后于实现

## 一、测试原则

这个项目不能等功能基本写完再补测试，因为：
- 推送链路复杂
- 离线回退复杂
- 4 个 app 壳 × 双端差异多
- 真实问题大多出在“流程交界处”

所以测试必须跟开发同步推进。

## 二、测试分层

建议按 5 层推进：

### 1. 单元测试
验证：
- content-engine 调度
- prayer-flow 状态机
- push-orchestrator 去重逻辑
- women mode 内容切换
- ad-policy 禁投规则

### 2. 模块集成测试
验证：
- content-engine + offline-cache
- push-orchestrator + notification adapter
- prayer-flow + user-state
- config-runtime + app shell

### 3. 本地 E2E
验证：
- Today -> Prayer -> Completion
- 本地通知
- 离线回退

### 4. 跨平台回归测试
验证：
- Android 通知行为
- iOS 通知行为
- Android/iOS 离线内容读取
- UI 与文案配置差异

### 5. 运营回归测试
验证：
- 内容更新后是否生效
- 推送文案和 today 内容是否一致
- women mode 切换是否正确
- Friday / Ramadan campaign 是否覆盖正常

## 三、开发过程中的测试节奏

### 每新增一个 core module
至少补：
- 单元测试
- 关键状态测试

### 每完成一个 feature 流程
至少补：
- 页面集成测试
- 主流程 E2E 用例更新

### 每完成一个 batch
至少回归：
- today 内容加载
- prayer completion
- 本地通知
- 离线回退

## 四、MVP 阶段必测清单

### 功能必测
- today 加载成功
- today 离线加载成功
- prayer 完成能记录
- completion 页内容正确
- settings 修改提醒时间生效
- women mode 切换生效

### 推送必测
- 本地通知触发
- 点击通知跳 Today
- 推送文案与 today 内容一致
- 修改提醒时间后本地通知重建

### 配置必测
- 不同 app shell 加载不同配置
- 印尼/中东文案切换正确
- 女性版差异内容正确

## 五、测试文档联动要求

后续每次改动下面内容时，都要同步检查：
- 接口文档
- 表结构文档
- E2E 验证文档
- MVP 实施计划

## 六、当前建议

在真正开始开发前，优先建立：
- 一批最小单元测试清单
- 一条本地 E2E 主链路
- 一份 seed 数据驱动的回归集

后续随着工程启动，这份文档继续细化到具体脚本、具体命令和 CI 顺序。
