import { expect, test, describe } from '@rstest/core';
import {
  ParticleType,
  PARTICLES,
  PARTICLE_COMBINATIONS,
  getParticleInfo,
  getParticlesByType,
  getAllParticles,
  isParticle,
} from '../src/particle';

describe('助词信息', () => {
  test('应该能够获取助词信息', () => {
    const waInfo = getParticleInfo('は');
    expect(waInfo).toBeDefined();
    expect(waInfo?.particle).toBe('は');
    expect(waInfo?.type).toContain(ParticleType.TOPIC);
    expect(waInfo?.meaning).toBe('主题标记，表示话题');
    expect(waInfo?.examples.length).toBeGreaterThan(0);
  });

  test('应该能够获取所有助词', () => {
    const allParticles = getAllParticles();
    expect(allParticles.length).toBeGreaterThan(0);
    expect(allParticles).toContainEqual(
      expect.objectContaining({ particle: 'は' })
    );
    expect(allParticles).toContainEqual(
      expect.objectContaining({ particle: 'が' })
    );
    expect(allParticles).toContainEqual(
      expect.objectContaining({ particle: 'を' })
    );
  });

  test('应该能够判断是否为助词', () => {
    expect(isParticle('は')).toBe(true);
    expect(isParticle('が')).toBe(true);
    expect(isParticle('を')).toBe(true);
    expect(isParticle('に')).toBe(true);
    expect(isParticle('で')).toBe(true);
    expect(isParticle('本')).toBe(false);
    expect(isParticle('学生')).toBe(false);
  });
});

describe('助词类型', () => {
  test('应该能够根据类型获取助词', () => {
    const topicParticles = getParticlesByType(ParticleType.TOPIC);
    expect(topicParticles.length).toBeGreaterThan(0);
    expect(topicParticles.some(p => p.particle === 'は')).toBe(true);

    const subjectParticles = getParticlesByType(ParticleType.SUBJECT);
    expect(subjectParticles.length).toBeGreaterThan(0);
    expect(subjectParticles.some(p => p.particle === 'が')).toBe(true);

    const objectParticles = getParticlesByType(ParticleType.OBJECT);
    expect(objectParticles.length).toBeGreaterThan(0);
    expect(objectParticles.some(p => p.particle === 'を')).toBe(true);
  });

  test('常用助词应该包含正确的类型', () => {
    const niParticle = getParticleInfo('に');
    expect(niParticle).toBeDefined();
    expect(niParticle?.type).toContain(ParticleType.LOCATION);
    expect(niParticle?.type).toContain(ParticleType.DIRECTION);
    expect(niParticle?.type).toContain(ParticleType.TIME);
    expect(niParticle?.type).toContain(ParticleType.PURPOSE);

    const deParticle = getParticleInfo('で');
    expect(deParticle).toBeDefined();
    expect(deParticle?.type).toContain(ParticleType.LOCATION);
    expect(deParticle?.type).toContain(ParticleType.TOOL);
  });
});

describe('助词示例', () => {
  test('常用助词应该包含示例', () => {
    const particles = ['は', 'が', 'を', 'に', 'で', 'へ', 'と', 'から', 'まで'];
    particles.forEach(particle => {
      const info = getParticleInfo(particle);
      expect(info).toBeDefined();
      expect(info?.examples.length).toBeGreaterThan(0);
    });
  });
});

describe('助词组合', () => {
  test('应该包含常用助词组合', () => {
    expect(PARTICLE_COMBINATIONS['から～まで']).toBe('从...到...');
    expect(PARTICLE_COMBINATIONS['に～を']).toBe('在...做...');
    expect(PARTICLE_COMBINATIONS['で～を']).toBe('用...做...');
    expect(PARTICLE_COMBINATIONS['と～と']).toBe('...和...');
    expect(PARTICLE_COMBINATIONS['も～も']).toBe('...也...也');
    expect(PARTICLE_COMBINATIONS['より～のほうが']).toBe('比...更...');
  });
});

describe('综合测试', () => {
  test('所有助词都应该有完整信息', () => {
    PARTICLES.forEach(particle => {
      expect(particle.particle).toBeTruthy();
      expect(particle.meaning).toBeTruthy();
      expect(particle.examples.length).toBeGreaterThan(0);
      expect(particle.type.length).toBeGreaterThan(0);
    });
  });

  test('常用助词应该都能被找到', () => {
    const commonParticles = ['は', 'が', 'を', 'に', 'で', 'へ', 'と', 'から', 'まで', 'より', 'も', 'や', 'の', 'か', 'ね', 'よ'];
    commonParticles.forEach(particle => {
      const info = getParticleInfo(particle);
      expect(info).toBeDefined();
      expect(info?.particle).toBe(particle);
    });
  });
});
