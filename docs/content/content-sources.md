# 古兰经祷告 App 内容数据源与可信度文档

- 日期：2026-05-09
- 所属主线：运营 / 产品 / 研发
- 关联文档：`2026-05-09-古兰经祷告App内容CMS结构文档.md`
- 关联文档：`2026-05-09-古兰经祷告App-Quran种子数据准备文档.md`
- 关联导航：`2026-05-09-古兰经祷告App-文档导航与拆分方案.md`

## 一、目标

内容侧必须建立稳定、靠谱、可追溯的数据源体系。

这不是普通内容网站，核心内容涉及：
- Quran Arabic 原文
- 英文译文
- 产品层 reflection / prayer prompt / women mode / 节日包装

所以内容源必须分层管理，而不能混成一个来源。

## 二、内容源分层

建议明确拆成 4 层。

## 1. Layer 1：Quran Arabic 原文层

### 作用
- 提供标准 Quran Arabic 原文
- 为所有内容变体提供唯一底座

### 要求
- 来源稳定
- 可重复获取
- 引用可校验
- 不允许人工二次改写原文

### 规则
- Arabic 原文必须与 `surah_number + ayah_number` 强绑定
- 原文错误优先级为最高风险

## 2. Layer 2：English Translation 层

### 作用
- 作为开发期通用译文层
- 作为中东 English fallback
- 作为运营和审核时的统一中间理解层

### 要求
- 固定选定译本/来源
- 版本稳定
- 不随意混用多个英文译本

### 规则
- 一旦 MVP 阶段选定译本，必须保持一致，除非明确版本迁移

## 3. Layer 3：产品解释文案层

### 作用
- 承载 reflection
- 承载 prayer prompt / dua prompt
- 承载 completion blessing
- 承载 Women Mode / 节日变体文案

### 要求
- 可按 market / gender / campaign 变体化
- 明确属于“产品包装层”，不是 Quran 原文/译文本身
- 审核时必须和原文层、译文层区分

## 4. Layer 4：推送与场景包装层

### 作用
- 承载 notification title/body
- 承载 Friday / Ramadan / Eid push 包装
- 承载 Women Mode push 替换

### 要求
- 必须和当日内容主题一致
- 允许更短、更轻、更入口化，但不能脱离内容主线

## 三、可信度规则

## 1. 哪些内容必须“强可信”
- Quran Arabic 原文
- Surah / Ayah reference
- English translation

## 2. 哪些内容允许“产品解释”
- reflection
- prayer prompt
- completion blessing
- push 文案
- women mode 替换内容

## 3. 风险分级

### 高风险
- Arabic 原文错误
- ayah reference 错误
- translation 错配

### 中风险
- reflection 与主题错位
- push 与 today 不一致
- women mode 文案不够柔和

### 低风险
- 语气不够理想
- 页面表达可继续优化

## 四、内容数据源待办

这部分必须进入内容侧 P0：
- [ ] 明确 Arabic 原文稳定来源
- [ ] 明确 English translation 稳定来源
- [ ] 明确产品解释层的写作与审核来源机制
- [ ] 明确 women mode / 节日包装层的来源与审核机制

## 五、结论

这条产品线的“内容”不是单一内容库，而是：
- 原文层
- 译文层
- 产品解释层
- 推送包装层

只有分层之后，才能既稳定又可运营。
