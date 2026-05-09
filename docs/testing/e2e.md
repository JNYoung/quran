# 古兰经祷告 App 本地 E2E 验证方案文档

- 日期：2026-05-09
- 关联主文档：`2026-05-09-古兰经祷告App执行总文档.md`
- 目标：在本地开发阶段跑通真实主闭环，不依赖完整线上环境

## 一、目标

本地 E2E 的目的不是模拟所有生产情况，而是确保开发过程中最核心的主链路始终可验证：

- 客户端能拿到 today 内容
- 本地通知能正常触发
- 点击通知能进入 Today
- 用户能走完 Prayer -> Completion
- completion 能落记录
- 无网时有离线兜底

## 二、本地 E2E 范围

建议第一阶段只验证 6 条关键链路：

1. 冷启动拉取 runtime-config
2. 拉取 today 内容并展示
3. 本地通知 1 分钟后触发
4. 点击通知进入 Today
5. 完成 Prayer -> Completion
6. 无网时走离线 today 内容

## 三、本地 Dev Backend 最小能力

本地服务无需一开始就做成完整生产后端，先提供 5 个最小接口：

- `GET /runtime-config`
- `GET /daily-content/today`
- `GET /daily-content/range`
- `POST /me/completions`
- `POST /me/push-token`

## 四、E2E 测试分层

### 1. 客户端本地闭环
- 使用本地 mock server
- 使用本地通知
- 不依赖真实远程 push

### 2. 服务联调闭环
- 客户端连本地 dev backend
- completion 真正入库
- 内容从接口返回，不是页面写死

### 3. 弱网/断网闭环
- 先拉过内容
- 断网后打开 app
- today 仍可读
- 本地通知仍可触发

## 五、核心 E2E 用例

### Case 1：today 内容加载
- given：启动 app
- when：请求 `/runtime-config` 与 `/daily-content/today`
- then：Today 正常显示 Arabic + English 内容与 reflection

### Case 2：本地通知触发
- given：设置 1 分钟后提醒
- when：等待通知触发
- then：收到通知，文案与 today 内容一致

### Case 3：通知点击跳转
- given：通知已触发
- when：点击通知
- then：进入 Today 页面，展示正确内容

### Case 4：Prayer 完成闭环
- given：用户在 Today 页面
- when：进入 Prayer 并点击完成
- then：进入 Completion 页面，写 completion record

### Case 5：离线兜底
- given：已缓存 today 内容
- when：断网重开 app
- then：Today 仍能读取本地缓存

## 六、验证环境建议

- Android 模拟器 + 真机至少各一套
- iOS Simulator + 真机至少各一套
- 本地 dev backend
- 本地 seed 数据

## 七、开发过程要求

后续每完成一批核心能力，都要至少回归这几条 E2E：
- today 加载
- 本地通知
- 点击跳转
- prayer completion
- 离线 today

这条文档后续要随着真实工程结构补充自动化执行方式与脚本。
