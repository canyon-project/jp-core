import { expect, test, describe } from '@rstest/core';
import {
  TIME_ADVERBS,
  DEGREE_ADVERBS,
  MANNER_ADVERBS,
  FREQUENCY_ADVERBS,
  MOOD_ADVERBS,
  NEGATIVE_ADVERBS,
  getAllAdverbs,
  isTimeAdverb,
  isDegreeAdverb,
  isMannerAdverb,
  isFrequencyAdverb,
  isMoodAdverb,
  isNegativeAdverb,
} from '../src/adverb';

describe('副词列表', () => {
  test('时间副词应该包含常用词汇', () => {
    expect(TIME_ADVERBS).toContain('いま');
    expect(TIME_ADVERBS).toContain('きょう');
    expect(TIME_ADVERBS).toContain('きのう');
    expect(TIME_ADVERBS).toContain('あした');
    expect(TIME_ADVERBS).toContain('いつも');
    expect(TIME_ADVERBS).toContain('よく');
  });

  test('程度副词应该包含常用词汇', () => {
    expect(DEGREE_ADVERBS).toContain('とても');
    expect(DEGREE_ADVERBS).toContain('たいへん');
    expect(DEGREE_ADVERBS).toContain('すごく');
    expect(DEGREE_ADVERBS).toContain('ちょっと');
    expect(DEGREE_ADVERBS).toContain('すこし');
  });

  test('状态副词应该包含常用词汇', () => {
    expect(MANNER_ADVERBS).toContain('ゆっくり');
    expect(MANNER_ADVERBS).toContain('はやく');
    expect(MANNER_ADVERBS).toContain('きれいに');
    expect(MANNER_ADVERBS).toContain('しずかに');
  });

  test('频率副词应该包含常用词汇', () => {
    expect(FREQUENCY_ADVERBS).toContain('いつも');
    expect(FREQUENCY_ADVERBS).toContain('よく');
    expect(FREQUENCY_ADVERBS).toContain('ときどき');
    expect(FREQUENCY_ADVERBS).toContain('たまに');
  });

  test('语气副词应该包含常用词汇', () => {
    expect(MOOD_ADVERBS).toContain('きっと');
    expect(MOOD_ADVERBS).toContain('たぶん');
    expect(MOOD_ADVERBS).toContain('おそらく');
    expect(MOOD_ADVERBS).toContain('ぜひ');
  });

  test('否定副词应该包含常用词汇', () => {
    expect(NEGATIVE_ADVERBS).toContain('ぜんぜん');
    expect(NEGATIVE_ADVERBS).toContain('まったく');
    expect(NEGATIVE_ADVERBS).toContain('あまり');
  });
});

describe('副词判断函数', () => {
  test('isTimeAdverb应该正确识别时间副词', () => {
    expect(isTimeAdverb('いま')).toBe(true);
    expect(isTimeAdverb('きょう')).toBe(true);
    expect(isTimeAdverb('きのう')).toBe(true);
    expect(isTimeAdverb('とても')).toBe(false);
  });

  test('isDegreeAdverb应该正确识别程度副词', () => {
    expect(isDegreeAdverb('とても')).toBe(true);
    expect(isDegreeAdverb('たいへん')).toBe(true);
    expect(isDegreeAdverb('ちょっと')).toBe(true);
    expect(isDegreeAdverb('いま')).toBe(false);
  });

  test('isMannerAdverb应该正确识别状态副词', () => {
    expect(isMannerAdverb('ゆっくり')).toBe(true);
    expect(isMannerAdverb('はやく')).toBe(true);
    expect(isMannerAdverb('きれいに')).toBe(true);
    expect(isMannerAdverb('とても')).toBe(false);
  });

  test('isFrequencyAdverb应该正确识别频率副词', () => {
    expect(isFrequencyAdverb('いつも')).toBe(true);
    expect(isFrequencyAdverb('よく')).toBe(true);
    expect(isFrequencyAdverb('ときどき')).toBe(true);
    expect(isFrequencyAdverb('とても')).toBe(false);
  });

  test('isMoodAdverb应该正确识别语气副词', () => {
    expect(isMoodAdverb('きっと')).toBe(true);
    expect(isMoodAdverb('たぶん')).toBe(true);
    expect(isMoodAdverb('おそらく')).toBe(true);
    expect(isMoodAdverb('とても')).toBe(false);
  });

  test('isNegativeAdverb应该正确识别否定副词', () => {
    expect(isNegativeAdverb('ぜんぜん')).toBe(true);
    expect(isNegativeAdverb('まったく')).toBe(true);
    expect(isNegativeAdverb('あまり')).toBe(true);
    expect(isNegativeAdverb('とても')).toBe(false);
  });
});

describe('getAllAdverbs', () => {
  test('应该返回所有副词', () => {
    const allAdverbs = getAllAdverbs();
    expect(allAdverbs.length).toBeGreaterThan(0);
    expect(allAdverbs).toContain('いま');
    expect(allAdverbs).toContain('とても');
    expect(allAdverbs).toContain('ゆっくり');
    expect(allAdverbs).toContain('いつも');
    expect(allAdverbs).toContain('きっと');
    expect(allAdverbs).toContain('ぜんぜん');
  });

  test('所有副词都应该被正确分类', () => {
    const allAdverbs = getAllAdverbs();
    allAdverbs.forEach(adverb => {
      const isClassified = 
        isTimeAdverb(adverb) ||
        isDegreeAdverb(adverb) ||
        isMannerAdverb(adverb) ||
        isFrequencyAdverb(adverb) ||
        isMoodAdverb(adverb) ||
        isNegativeAdverb(adverb);
      expect(isClassified).toBe(true);
    });
  });
});
