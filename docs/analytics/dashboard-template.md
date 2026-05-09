# 古兰经祷告 App 数据看板模板

- 日期：2026-05-09
- 所属主线：产品 / 运营 / 研发 / 测试
- 关联文档：`2026-05-09-古兰经祷告App-数据分析与指标文档.md`
- 关联文档：`2026-05-09-古兰经祷告App-GoogleAnalytics接入与数据要求.md`
- 关联导航：`2026-05-09-古兰经祷告App-文档导航与拆分方案.md`

## 一、目标

给这条产品线定义一个固定的数据看板结构，让后续日看、周看、专项看都有统一框架。

## 二、日看板模板

### 1. 获取概览
- 安装量
- 激活量
- onboarding 完成率
- 通知权限授权率

### 2. 推送概览
- 远程推送送达率
- 远程推送打开率
- 本地推送触发率
- 本地推送打开率
- 去重成功率

### 3. 核心漏斗
- Push -> Open
- Open -> Today
- Today -> Prayer
- Prayer -> Completion

### 4. 留存信号
- 次日留存（滚动）
- 推送回流次日留存

### 5. 广告概览
- Completion 页广告曝光率
- 广告点击率
- 广告后退出率

### 6. 异常提醒
- today_loaded_fallback 异常升高
- women mode completion 异常下降
- 节日 campaign 覆盖失败

## 三、周看板模板

### 1. 四个 app 对比
- 印尼男性
- 印尼女性
- 中东男性
- 中东女性

对比项：
- D1 / D7 留存
- Push Open Rate
- Prayer Completion Rate
- Completion Ad View Rate

### 2. Women Mode 专项
- 使用率
- 次日留存
- Completion Rate
- 广告影响

### 3. Campaign 专项
- Friday 表现
- Ramadan 表现
- Eid 表现

### 4. 离线与兜底
- cache 命中率
- fallback 命中率
- offline today 可读成功率

## 四、专项看板建议

## 1. 推送专项
- 不同时段打开率
- remote vs local 效果
- women mode 推送表现

## 2. 内容专项
- 不同主题 completion rate
- 不同 reflection 风格表现
- push 与 today 一致性表现

## 3. 广告专项
- 不同页面广告表现
- women mode 广告影响
- 节日广告影响

## 五、固定维度

所有看板默认支持切分：
- `app_id`
- `market`
- `gender`
- `platform`
- `mode`
- `campaign_type`
- `content_source`
- `push_source`

## 六、结论

这条产品线的数据看板不能只看 DAU/CTR，而要围绕：
- ritual 主闭环
- women mode
- 节日场景
- 广告与体验平衡

做结构化观察。
