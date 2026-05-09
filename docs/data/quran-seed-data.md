# 古兰经祷告 App Quran 种子数据准备文档

- 日期：2026-05-09
- 关联主文档：`2026-05-09-古兰经祷告App执行总文档.md`
- 目标：为本地开发、E2E、离线内容、内容 CMS 提供可用的初始 Quran 内容种子

## 一、目标

开发不能建立在空壳假数据上，至少要准备一批真实可用的种子内容，用于：
- Today 页面展示
- 本地推送文案生成
- Prayer 页面内容
- Completion 页面 reflection
- 离线缓存
- 本地 E2E

## 二、最低种子数据要求

第一阶段至少准备：

### 1. Quran Arabic 原文
- 至少 30 天可用的 ayah 集
- 带准确的 surah / ayah reference

### 2. English translation
- 与 Arabic 原文一一对应
- 用于中东 English fallback 与开发阶段通用调试

### 3. 产品文案层
- reflection
- prayer prompt
- completion blessing
- notification title/body

### 4. app 变体层
- 印尼男性版内容包装
- 印尼女性版内容包装
- 中东男性版内容包装
- 中东女性版内容包装

## 三、建议的数据结构

每条种子内容至少包含：
- `content_id`
- `date_key`
- `ayah_reference`
- `arabic_text`
- `english_translation`
- `theme`
- `reflection_text`
- `prayer_prompt`
- `completion_blessing`
- `notification_title`
- `notification_body`
- `market`
- `gender`
- `campaign_type`

## 四、种子数据分层

### Layer 1：Canonical Quran Seed
- Arabic 原文
- English translation
- ayah reference

### Layer 2：Theme Seed
- gratitude
- calm
- patience
- family
- trust
- hope
- responsibility
- healing

### Layer 3：Variant Seed
- 针对 4 个 app 的 reflection 与 notification 包装

## 五、第一阶段种子规模建议

### MVP 最低要求
- 30 天 daily content
- 每天 1 条主内容
- 女性模式至少 10 条可替换内容
- Friday 至少 4 条特色内容

### 更理想
- 90 天 daily content
- Ramadan 预留专题结构

## 六、数据用途映射

- `Today`：Arabic + English + reflection
- `Prayer`：Arabic + prayer prompt
- `Completion`：completion blessing + reflection
- `Push`：notification title/body
- `Offline`：today/range fallback
- `CMS`：作为首批内容导入样本

## 七、开发阶段要求

在真实内容源完全接入前：
- 本地 dev backend 要能直接读取 seed 数据
- 客户端默认包内也要内置一小批 seed
- E2E 统一使用同一批种子，避免页面内容和推送内容不一致

## 八、后续待补

后续要继续补：
- Quran 数据来源说明
- 英文译本选择
- 印尼文版本策略
- seed 导入脚本规范
- women mode 替换内容清单
