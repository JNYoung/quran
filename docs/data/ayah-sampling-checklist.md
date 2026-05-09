# 古兰经祷告 App Ayah 抽样验证清单

- 日期：2026-05-09
- 所属主线：内容 / 研发 / 测试
- 关联文档：`2026-05-09-古兰经祷告App-稳定内容源结论文档.md`
- 关联导航：`2026-05-09-古兰经祷告App-文档导航与拆分方案.md`

## 一、目标

在正式构建 seed 数据和 dev backend 之前，先做一轮小样本验证，确认主内容源的取数与 reference 能对得上。

## 二、抽样原则

样本不需要多，但要覆盖不同情况：
- 不同章节
- 不同长度
- 高频引用经文
- 非高频经文

## 三、建议第一轮抽样数量

- 先抽 `5-10 条 ayah`

## 四、建议抽样字段

每条样本都检查：
- `surah_number`
- `ayah_number`
- `ayah_reference`
- `arabic_text`
- `english_translation`
- 主源返回值
- 校验源返回值
- 是否一致/可接受

## 五、验证流程

### Step 1
从主内容源取样本：
- `AlQuran Cloud`

### Step 2
用校验源核对：
- `Quran.com`
- 必要时参考 `QuranEnc` 的英文译文层

### Step 3
记录结论：
- reference 是否一致
- Arabic 原文是否一致
- English translation 是否符合主译本预期

## 六、建议抽样清单结构

- sample_01
- sample_02
- sample_03
- sample_04
- sample_05
- sample_06（可选）
- sample_07（可选）
- sample_08（可选）
- sample_09（可选）
- sample_10（可选）

## 七、通过标准

这一轮不追求所有来源字面完全一样，但至少要满足：
- ayah reference 一致
- Arabic 原文一致
- 主英文译本稳定可取
- 数据结构可用于 seed / dev backend

## 八、结论

这份抽样验证清单是把“源看起来可用”推进到“源可实际用于开发”的关键一步。
