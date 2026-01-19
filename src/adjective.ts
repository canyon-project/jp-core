// 形容词变形引擎

// 形容词类型
export enum AdjectiveType {
  I_ADJECTIVE = '一类形容词', // い形容词
  NA_ADJECTIVE = '二类形容词', // な形容词
}

// 判断形容词类型
export function getAdjectiveType(adjective: string): AdjectiveType {
  if (!adjective || adjective.length === 0) {
    throw new Error('形容词不能为空');
  }

  // 二类形容词（な形容词）的特殊情况
  // 这些词虽然以い结尾，但是二类形容词
  const naAdjectiveExceptions = [
    'きれい', 'きらい', 'ゆうめい', 'しんせつ', 'べんり', 'ふべん',
    'きらい', 'しずか', 'にぎやか', 'ひま', 'だいじょうぶ', 'だいすき',
    'きれいな', 'きらいな', 'ゆうめいな', 'しんせつな', 'べんりな', 'ふべんな',
  ];

  // 如果以な结尾，肯定是二类形容词
  if (adjective.endsWith('な')) {
    return AdjectiveType.NA_ADJECTIVE;
  }

  // 检查是否在例外列表中
  if (naAdjectiveExceptions.includes(adjective)) {
    return AdjectiveType.NA_ADJECTIVE;
  }

  // 如果以い结尾，通常是一类形容词
  if (adjective.endsWith('い')) {
    return AdjectiveType.I_ADJECTIVE;
  }

  // 默认为一类形容词
  return AdjectiveType.I_ADJECTIVE;
}

// 获取一类形容词的词干（去掉い）
function getIAdjectiveStem(adjective: string): string {
  if (!adjective.endsWith('い')) {
    throw new Error('一类形容词必须以い结尾');
  }
  return adjective.slice(0, -1);
}

// 获取二类形容词的词干（去掉な）
function getNaAdjectiveStem(adjective: string): string {
  if (adjective.endsWith('な')) {
    return adjective.slice(0, -1);
  }
  return adjective;
}

// ========== 一类形容词（い形容词）变形 ==========

// 否定形（くない）
export function iAdjectiveNegative(adjective: string): string {
  const stem = getIAdjectiveStem(adjective);
  return stem + 'くない';
}

// 过去形（かった）
export function iAdjectivePast(adjective: string): string {
  const stem = getIAdjectiveStem(adjective);
  return stem + 'かった';
}

// 过去否定形（くなかった）
export function iAdjectivePastNegative(adjective: string): string {
  const stem = getIAdjectiveStem(adjective);
  return stem + 'くなかった';
}

// て形（くて）
export function iAdjectiveTeForm(adjective: string): string {
  const stem = getIAdjectiveStem(adjective);
  return stem + 'くて';
}

// 副词形（く）
export function iAdjectiveAdverb(adjective: string): string {
  const stem = getIAdjectiveStem(adjective);
  return stem + 'く';
}

// ば形（ければ）
export function iAdjectiveBaForm(adjective: string): string {
  const stem = getIAdjectiveStem(adjective);
  return stem + 'ければ';
}

// ========== 二类形容词（な形容词）变形 ==========

// 否定形（ではない / じゃない）
export function naAdjectiveNegative(adjective: string, useJa: boolean = false): string {
  const stem = getNaAdjectiveStem(adjective);
  return stem + (useJa ? 'じゃない' : 'ではない');
}

// 过去形（だった）
export function naAdjectivePast(adjective: string): string {
  const stem = getNaAdjectiveStem(adjective);
  return stem + 'だった';
}

// 过去否定形（ではなかった / じゃなかった）
export function naAdjectivePastNegative(adjective: string, useJa: boolean = false): string {
  const stem = getNaAdjectiveStem(adjective);
  return stem + (useJa ? 'じゃなかった' : 'ではなかった');
}

// て形（で）
export function naAdjectiveTeForm(adjective: string): string {
  const stem = getNaAdjectiveStem(adjective);
  return stem + 'で';
}

// 副词形（に）
export function naAdjectiveAdverb(adjective: string): string {
  const stem = getNaAdjectiveStem(adjective);
  return stem + 'に';
}

// ば形（なら）
export function naAdjectiveBaForm(adjective: string): string {
  const stem = getNaAdjectiveStem(adjective);
  return stem + 'なら';
}

// ========== 通用函数（自动判断类型） ==========

// 否定形
export function adjectiveNegative(adjective: string, useJa: boolean = false): string {
  const type = getAdjectiveType(adjective);
  if (type === AdjectiveType.I_ADJECTIVE) {
    return iAdjectiveNegative(adjective);
  }
  return naAdjectiveNegative(adjective, useJa);
}

// 过去形
export function adjectivePast(adjective: string): string {
  const type = getAdjectiveType(adjective);
  if (type === AdjectiveType.I_ADJECTIVE) {
    return iAdjectivePast(adjective);
  }
  return naAdjectivePast(adjective);
}

// 过去否定形
export function adjectivePastNegative(adjective: string, useJa: boolean = false): string {
  const type = getAdjectiveType(adjective);
  if (type === AdjectiveType.I_ADJECTIVE) {
    return iAdjectivePastNegative(adjective);
  }
  return naAdjectivePastNegative(adjective, useJa);
}

// て形
export function adjectiveTeForm(adjective: string): string {
  const type = getAdjectiveType(adjective);
  if (type === AdjectiveType.I_ADJECTIVE) {
    return iAdjectiveTeForm(adjective);
  }
  return naAdjectiveTeForm(adjective);
}

// 副词形
export function adjectiveAdverb(adjective: string): string {
  const type = getAdjectiveType(adjective);
  if (type === AdjectiveType.I_ADJECTIVE) {
    return iAdjectiveAdverb(adjective);
  }
  return naAdjectiveAdverb(adjective);
}

// ば形
export function adjectiveBaForm(adjective: string): string {
  const type = getAdjectiveType(adjective);
  if (type === AdjectiveType.I_ADJECTIVE) {
    return iAdjectiveBaForm(adjective);
  }
  return naAdjectiveBaForm(adjective);
}
