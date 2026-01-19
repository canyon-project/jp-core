// 助词

// 助词类型
export enum ParticleType {
  TOPIC = '主题助词', // は
  SUBJECT = '主语助词', // が
  OBJECT = '宾语助词', // を
  LOCATION = '地点助词', // に、で
  DIRECTION = '方向助词', // へ、に
  TOOL = '工具助词', // で
  TIME = '时间助词', // に
  COMPANION = '伴随助词', // と、とともに
  SOURCE = '起点助词', // から
  DESTINATION = '终点助词', // まで
  COMPARISON = '比较助词', // より
  PURPOSE = '目的助词', // に
  REASON = '原因助词', // から、ので
  ADDITION = '并列助词', // と、や、も
  EMPHASIS = '强调助词', // も、さえ、でも
  POSSESSIVE = '所有格助词', // の
  QUESTION = '疑问助词', // か
  MOOD = '语气助词', // ね、よ、さ
}

// 助词定义
export interface Particle {
  particle: string;
  type: ParticleType[];
  meaning: string;
  examples: string[];
}

// 常用助词列表
export const PARTICLES: Particle[] = [
  {
    particle: 'は',
    type: [ParticleType.TOPIC],
    meaning: '主题标记，表示话题',
    examples: ['わたしは学生です', 'これは本です'],
  },
  {
    particle: 'が',
    type: [ParticleType.SUBJECT],
    meaning: '主语标记，表示动作的主体',
    examples: ['雨が降っています', '私が行きます'],
  },
  {
    particle: 'を',
    type: [ParticleType.OBJECT],
    meaning: '宾语标记，表示动作的对象',
    examples: ['本を読む', 'ご飯を食べる'],
  },
  {
    particle: 'に',
    type: [ParticleType.LOCATION, ParticleType.DIRECTION, ParticleType.TIME, ParticleType.PURPOSE],
    meaning: '地点、方向、时间、目的',
    examples: ['学校に行く', '三時に会う', '勉強に行く'],
  },
  {
    particle: 'で',
    type: [ParticleType.LOCATION, ParticleType.TOOL],
    meaning: '地点、工具、手段',
    examples: ['学校で勉強する', 'ペンで書く', '電車で行く'],
  },
  {
    particle: 'へ',
    type: [ParticleType.DIRECTION],
    meaning: '方向（比に更正式）',
    examples: ['東京へ行く', '学校へ行く'],
  },
  {
    particle: 'と',
    type: [ParticleType.COMPANION, ParticleType.ADDITION],
    meaning: '和、与、一起',
    examples: ['友達と遊ぶ', 'りんごとバナナ'],
  },
  {
    particle: 'から',
    type: [ParticleType.SOURCE, ParticleType.REASON],
    meaning: '从、因为',
    examples: ['学校から帰る', '疲れたから休む'],
  },
  {
    particle: 'まで',
    type: [ParticleType.DESTINATION],
    meaning: '到、为止',
    examples: ['学校まで歩く', '十時まで待つ'],
  },
  {
    particle: 'より',
    type: [ParticleType.COMPARISON],
    meaning: '比、比较',
    examples: ['バスより電車が速い', '去年より暑い'],
  },
  {
    particle: 'も',
    type: [ParticleType.ADDITION, ParticleType.EMPHASIS],
    meaning: '也、都',
    examples: ['私も行きます', 'これも欲しい'],
  },
  {
    particle: 'や',
    type: [ParticleType.ADDITION],
    meaning: '和（列举，不完全列举）',
    examples: ['りんごやバナナ', '本やノート'],
  },
  {
    particle: 'の',
    type: [ParticleType.POSSESSIVE],
    meaning: '的、所属',
    examples: ['私の本', '学校の先生'],
  },
  {
    particle: 'か',
    type: [ParticleType.QUESTION],
    meaning: '疑问、选择',
    examples: ['これは何ですか', 'コーヒーか紅茶'],
  },
  {
    particle: 'ね',
    type: [ParticleType.MOOD],
    meaning: '确认、征求同意',
    examples: ['いい天気ですね', 'そうですね'],
  },
  {
    particle: 'よ',
    type: [ParticleType.MOOD, ParticleType.EMPHASIS],
    meaning: '强调、告知',
    examples: ['これは本ですよ', '大丈夫ですよ'],
  },
  {
    particle: 'さ',
    type: [ParticleType.MOOD],
    meaning: '语气词（口语）',
    examples: ['それはさ、難しいよ'],
  },
];

// 根据助词获取信息
export function getParticleInfo(particle: string): Particle | undefined {
  return PARTICLES.find(p => p.particle === particle);
}

// 根据类型获取助词
export function getParticlesByType(type: ParticleType): Particle[] {
  return PARTICLES.filter(p => p.type.includes(type));
}

// 获取所有助词
export function getAllParticles(): Particle[] {
  return PARTICLES;
}

// 判断是否为助词
export function isParticle(word: string): boolean {
  return PARTICLES.some(p => p.particle === word);
}

// 常用助词组合
export const PARTICLE_COMBINATIONS = {
  'から～まで': '从...到...',
  'に～を': '在...做...',
  'で～を': '用...做...',
  'と～と': '...和...',
  'も～も': '...也...也',
  'より～のほうが': '比...更...',
} as const;
