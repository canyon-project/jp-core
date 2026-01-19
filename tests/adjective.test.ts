import { expect, test, describe } from '@rstest/core';
import {
  AdjectiveType,
  getAdjectiveType,
  iAdjectiveNegative,
  iAdjectivePast,
  iAdjectivePastNegative,
  iAdjectiveTeForm,
  iAdjectiveAdverb,
  iAdjectiveBaForm,
  naAdjectiveNegative,
  naAdjectivePast,
  naAdjectivePastNegative,
  naAdjectiveTeForm,
  naAdjectiveAdverb,
  naAdjectiveBaForm,
  adjectiveNegative,
  adjectivePast,
  adjectivePastNegative,
  adjectiveTeForm,
  adjectiveAdverb,
  adjectiveBaForm,
} from '../src/adjective';

describe('形容词分类', () => {
  test('应该正确识别一类形容词（い形容词）', () => {
    expect(getAdjectiveType('たかい')).toBe(AdjectiveType.I_ADJECTIVE);
    expect(getAdjectiveType('おおきい')).toBe(AdjectiveType.I_ADJECTIVE);
    expect(getAdjectiveType('ちいさい')).toBe(AdjectiveType.I_ADJECTIVE);
    expect(getAdjectiveType('あたらしい')).toBe(AdjectiveType.I_ADJECTIVE);
    expect(getAdjectiveType('おいしい')).toBe(AdjectiveType.I_ADJECTIVE);
  });

  test('应该正确识别二类形容词（な形容词）', () => {
    expect(getAdjectiveType('きれい')).toBe(AdjectiveType.NA_ADJECTIVE);
    expect(getAdjectiveType('しずか')).toBe(AdjectiveType.NA_ADJECTIVE);
    expect(getAdjectiveType('にぎやか')).toBe(AdjectiveType.NA_ADJECTIVE);
    expect(getAdjectiveType('きれいな')).toBe(AdjectiveType.NA_ADJECTIVE);
    expect(getAdjectiveType('しずかな')).toBe(AdjectiveType.NA_ADJECTIVE);
  });
});

describe('一类形容词（い形容词）变形', () => {
  test('否定形（くない）', () => {
    expect(iAdjectiveNegative('たかい')).toBe('たかくない');
    expect(iAdjectiveNegative('おおきい')).toBe('おおきくない');
    expect(iAdjectiveNegative('ちいさい')).toBe('ちいさくない');
  });

  test('过去形（かった）', () => {
    expect(iAdjectivePast('たかい')).toBe('たかかった');
    expect(iAdjectivePast('おおきい')).toBe('おおきかった');
    expect(iAdjectivePast('ちいさい')).toBe('ちいさかった');
  });

  test('过去否定形（くなかった）', () => {
    expect(iAdjectivePastNegative('たかい')).toBe('たかくなかった');
    expect(iAdjectivePastNegative('おおきい')).toBe('おおきくなかった');
    expect(iAdjectivePastNegative('ちいさい')).toBe('ちいさくなかった');
  });

  test('て形（くて）', () => {
    expect(iAdjectiveTeForm('たかい')).toBe('たかくて');
    expect(iAdjectiveTeForm('おおきい')).toBe('おおきくて');
    expect(iAdjectiveTeForm('ちいさい')).toBe('ちいさくて');
  });

  test('副词形（く）', () => {
    expect(iAdjectiveAdverb('たかい')).toBe('たかく');
    expect(iAdjectiveAdverb('おおきい')).toBe('おおきく');
    expect(iAdjectiveAdverb('はやい')).toBe('はやく');
  });

  test('ば形（ければ）', () => {
    expect(iAdjectiveBaForm('たかい')).toBe('たかければ');
    expect(iAdjectiveBaForm('おおきい')).toBe('おおきければ');
    expect(iAdjectiveBaForm('ちいさい')).toBe('ちいさければ');
  });
});

describe('二类形容词（な形容词）变形', () => {
  test('否定形（ではない / じゃない）', () => {
    expect(naAdjectiveNegative('きれい')).toBe('きれいではない');
    expect(naAdjectiveNegative('きれい', true)).toBe('きれいじゃない');
    expect(naAdjectiveNegative('しずか')).toBe('しずかではない');
    expect(naAdjectiveNegative('しずか', true)).toBe('しずかじゃない');
  });

  test('过去形（だった）', () => {
    expect(naAdjectivePast('きれい')).toBe('きれいだった');
    expect(naAdjectivePast('しずか')).toBe('しずかだった');
    expect(naAdjectivePast('にぎやか')).toBe('にぎやかだった');
  });

  test('过去否定形（ではなかった / じゃなかった）', () => {
    expect(naAdjectivePastNegative('きれい')).toBe('きれいではなかった');
    expect(naAdjectivePastNegative('きれい', true)).toBe('きれいじゃなかった');
    expect(naAdjectivePastNegative('しずか')).toBe('しずかではなかった');
  });

  test('て形（で）', () => {
    expect(naAdjectiveTeForm('きれい')).toBe('きれいで');
    expect(naAdjectiveTeForm('しずか')).toBe('しずかで');
    expect(naAdjectiveTeForm('にぎやか')).toBe('にぎやかで');
  });

  test('副词形（に）', () => {
    expect(naAdjectiveAdverb('きれい')).toBe('きれいに');
    expect(naAdjectiveAdverb('しずか')).toBe('しずかに');
    expect(naAdjectiveAdverb('にぎやか')).toBe('にぎやかに');
  });

  test('ば形（なら）', () => {
    expect(naAdjectiveBaForm('きれい')).toBe('きれいなら');
    expect(naAdjectiveBaForm('しずか')).toBe('しずかなら');
    expect(naAdjectiveBaForm('にぎやか')).toBe('にぎやかなら');
  });
});

describe('通用形容词变形函数', () => {
  test('否定形（自动判断类型）', () => {
    expect(adjectiveNegative('たかい')).toBe('たかくない');
    expect(adjectiveNegative('きれい')).toBe('きれいではない');
    expect(adjectiveNegative('きれい', true)).toBe('きれいじゃない');
  });

  test('过去形（自动判断类型）', () => {
    expect(adjectivePast('たかい')).toBe('たかかった');
    expect(adjectivePast('きれい')).toBe('きれいだった');
  });

  test('过去否定形（自动判断类型）', () => {
    expect(adjectivePastNegative('たかい')).toBe('たかくなかった');
    expect(adjectivePastNegative('きれい')).toBe('きれいではなかった');
    expect(adjectivePastNegative('きれい', true)).toBe('きれいじゃなかった');
  });

  test('て形（自动判断类型）', () => {
    expect(adjectiveTeForm('たかい')).toBe('たかくて');
    expect(adjectiveTeForm('きれい')).toBe('きれいで');
  });

  test('副词形（自动判断类型）', () => {
    expect(adjectiveAdverb('たかい')).toBe('たかく');
    expect(adjectiveAdverb('きれい')).toBe('きれいに');
  });

  test('ば形（自动判断类型）', () => {
    expect(adjectiveBaForm('たかい')).toBe('たかければ');
    expect(adjectiveBaForm('きれい')).toBe('きれいなら');
  });
});

describe('综合测试', () => {
  test('一类形容词"たかい"的所有变形', () => {
    expect(getAdjectiveType('たかい')).toBe(AdjectiveType.I_ADJECTIVE);
    expect(adjectiveNegative('たかい')).toBe('たかくない');
    expect(adjectivePast('たかい')).toBe('たかかった');
    expect(adjectivePastNegative('たかい')).toBe('たかくなかった');
    expect(adjectiveTeForm('たかい')).toBe('たかくて');
    expect(adjectiveAdverb('たかい')).toBe('たかく');
    expect(adjectiveBaForm('たかい')).toBe('たかければ');
  });

  test('二类形容词"きれい"的所有变形', () => {
    expect(getAdjectiveType('きれい')).toBe(AdjectiveType.NA_ADJECTIVE);
    expect(adjectiveNegative('きれい')).toBe('きれいではない');
    expect(adjectiveNegative('きれい', true)).toBe('きれいじゃない');
    expect(adjectivePast('きれい')).toBe('きれいだった');
    expect(adjectivePastNegative('きれい')).toBe('きれいではなかった');
    expect(adjectiveTeForm('きれい')).toBe('きれいで');
    expect(adjectiveAdverb('きれい')).toBe('きれいに');
    expect(adjectiveBaForm('きれい')).toBe('きれいなら');
  });
});
