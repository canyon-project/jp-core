// 副词

// 时间副词
export const TIME_ADVERBS = [
  'いま', // 现在
  'きょう', // 今天
  'きのう', // 昨天
  'あした', // 明天
  'あさって', // 后天
  'まいにち', // 每天
  'まいしゅう', // 每周
  'まいつき', // 每月
  'まいねん', // 每年
  'いつも', // 总是
  'ときどき', // 有时
  'よく', // 经常
  'たまに', // 偶尔
  'まれに', // 很少
  'さいきん', // 最近
  'これから', // 从现在开始
  'もう', // 已经
  'まだ', // 还、仍然
  'すぐ', // 马上
  'さっき', // 刚才
  'あとで', // 之后
  'まえに', // 之前
] as const;

// 程度副词
export const DEGREE_ADVERBS = [
  'とても', // 很、非常
  'たいへん', // 非常
  'すごく', // 非常
  'かなり', // 相当
  'だいぶ', // 相当
  'ちょっと', // 稍微
  'すこし', // 一点
  'あまり', // 不太（与否定连用）
  'ぜんぜん', // 完全（与否定连用）
  'まったく', // 完全
  'ほとんど', // 几乎
  'だいたい', // 大概
  'ぜんぶ', // 全部
  'いちばん', // 最
  'もっと', // 更
  'もっともっと', // 更加
] as const;

// 状态副词
export const MANNER_ADVERBS = [
  'ゆっくり', // 慢慢地
  'はやく', // 快速地
  'きれいに', // 干净地
  'じょうずに', // 熟练地
  'へたに', // 不熟练地
  'しずかに', // 安静地
  'うるさく', // 吵闹地
  'たのしく', // 快乐地
  'かなしく', // 悲伤地
  'おおきく', // 大地
  'ちいさく', // 小地
  'あたらしく', // 新地
  'ふるく', // 旧地
] as const;

// 频率副词
export const FREQUENCY_ADVERBS = [
  'いつも', // 总是
  'よく', // 经常
  'ときどき', // 有时
  'たまに', // 偶尔
  'まれに', // 很少
  'ぜんぜん', // 完全（与否定连用）
  'ほとんど', // 几乎
] as const;

// 语气副词
export const MOOD_ADVERBS = [
  'きっと', // 一定
  'たぶん', // 大概
  'おそらく', // 恐怕
  'ぜひ', // 务必
  'もちろん', // 当然
  'やはり', // 果然
  'やっぱり', // 果然（口语）
] as const;

// 否定副词
export const NEGATIVE_ADVERBS = [
  'ぜんぜん', // 完全（与否定连用）
  'まったく', // 完全（与否定连用）
  'あまり', // 不太（与否定连用）
  'ちっとも', // 一点也不（与否定连用）
  'さっぱり', // 完全不（与否定连用）
] as const;

// 获取所有副词
export function getAllAdverbs(): string[] {
  return [
    ...TIME_ADVERBS,
    ...DEGREE_ADVERBS,
    ...MANNER_ADVERBS,
    ...FREQUENCY_ADVERBS,
    ...MOOD_ADVERBS,
    ...NEGATIVE_ADVERBS,
  ];
}

// 判断是否为时间副词
export function isTimeAdverb(adverb: string): boolean {
  return TIME_ADVERBS.includes(adverb as any);
}

// 判断是否为程度副词
export function isDegreeAdverb(adverb: string): boolean {
  return DEGREE_ADVERBS.includes(adverb as any);
}

// 判断是否为状态副词
export function isMannerAdverb(adverb: string): boolean {
  return MANNER_ADVERBS.includes(adverb as any);
}

// 判断是否为频率副词
export function isFrequencyAdverb(adverb: string): boolean {
  return FREQUENCY_ADVERBS.includes(adverb as any);
}

// 判断是否为语气副词
export function isMoodAdverb(adverb: string): boolean {
  return MOOD_ADVERBS.includes(adverb as any);
}

// 判断是否为否定副词
export function isNegativeAdverb(adverb: string): boolean {
  return NEGATIVE_ADVERBS.includes(adverb as any);
}
