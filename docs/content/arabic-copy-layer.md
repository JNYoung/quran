# 古兰经祷告 App Arabic 产品文案层文档

- 日期：2026-05-09
- 所属主线：内容 / 产品 / 运营
- 关联文档：`2026-05-09-古兰经祷告App-内容数据源与可信度文档.md`
- 关联文档：`2026-05-09-古兰经祷告App产品文档.md`
- 关联导航：`2026-05-09-古兰经祷告App-文档导航与拆分方案.md`

## 一、目标

明确“阿拉伯版本”在这个项目里不只包括 Quran Arabic 原文，还包括中东版产品文案层。

## 二、三层语言结构

中东版至少需要 3 层：

### Layer 1：Quran Arabic 原文
- canonical Quran text
- 不允许产品化改写

### Layer 2：English translation
- 用于开发期统一译文层
- 用于 English fallback

### Layer 3：Arabic product copy
- 用于 Today 主题句
- 用于 reflection
- 用于 prayer / dua 引导
- 用于 completion blessing
- 用于 push 文案
- 用于 Women Mode 和节日变体

## 三、为什么 Arabic product copy 必须单独存在

因为中东版用户不会只看原文：
- 需要更贴近日常 spiritual support 的表达
- 需要更庄重但可读的引导句
- 需要 push 与 completion 的阿语语境

如果只有原文 + 英文：
- 中东版体验会断层
- Women Mode 和节日变体无法真正本地化

## 四、Arabic product copy 的使用位置

### Today 页面
- 今日主题句
- 今日简短 reflection

### Prayer 页面
- prayer / remembrance 引导句

### Completion 页面
- completion blessing
- 安静收尾句

### Push
- 主推送标题
- 主推送正文
- Women Mode 替换推送
- Friday / Ramadan / Eid 替换推送

## 五、语气规则

Arabic product copy 必须满足：
- 庄重
- 简洁
- 有安静感
- 不过度 sermon 化
- 不做强命令式宗教压力

### 中东男性版
- 更偏节律、坚定、安静

### 中东女性版
- 更偏温柔、私密、安心、被理解

## 六、Women Mode 下的 Arabic copy

Women Mode 阿语版本必须单独维护，不能简单复用普通阿语文案。

重点：
- 降低压力
- 不强化“完成义务”心智
- 更偏 gentle remembrance / quiet dua

## 七、节日场景下的 Arabic copy

Friday / Ramadan / Eid 也必须有阿语产品文案变体，不能只替换 push，不替换 Today / Completion。

## 八、待办

### P0
- [ ] 建立 Arabic product copy 层
- [ ] 为中东男性版建立基础文案模板
- [ ] 为中东女性版建立基础文案模板

### P1
- [ ] 建立 Women Mode 阿语替换模板
- [ ] 建立 Friday / Ramadan / Eid 阿语模板

## 九、结论

“阿拉伯版本”不是只有 Quran Arabic 原文，而是：
- 原文层
- 阿语产品文案层

这层不补，中东版永远只能算半本地化。
