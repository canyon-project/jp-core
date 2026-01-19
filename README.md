# jp-core - 日语学习工具库

日语学习工具库，提供助词、动词、形容词、副词、假名等功能。

## 功能特性

- 📚 **助词查询** - 查询日语助词的用法和示例
- 🔄 **动词变形** - 支持所有动词变形（ます形、て形、た形等）
- 📝 **形容词变形** - 支持一类和二类形容词的各种变形
- 📖 **副词查询** - 查询各类副词的用法
- 🔤 **假名转换** - 平假名和片假名之间的转换

## 命令行工具

### 安装依赖

```bash
pnpm install
```

### 运行CLI

```bash
pnpm cli
```

或者直接运行：

```bash
tsx src/cli.ts
```

### CLI命令

- `help` 或 `h` - 显示帮助信息
- `particle <助词>` - 查询助词信息（如: `particle は`）
- `particles` - 列出所有助词
- `verb <动词>` - 查询动词的所有变形（如: `verb 食べる`）
- `adjective <形容词>` - 查询形容词的所有变形（如: `adjective 高い`）
- `adverb <副词>` - 查询副词信息（如: `adverb とても`）
- `kana <假名>` - 假名转换（如: `kana あいうえお`）
- `exit` 或 `quit` 或 `q` - 退出程序

### 使用示例

```
> particle は
助词: は
类型: 主题助词
含义: 主题标记，表示话题
示例:
  1. わたしは学生です
  2. これは本です

> verb 食べる
动词: 食べる
类型: 二类
变形:
  ます形: 食べ
  て形: 食べて
  た形: 食べた
  ...

> adjective 高い
形容词: 高い
类型: 一类形容词
变形:
  否定形: 高くない
  过去形: 高かった
  ...
```

## 安装

```bash
npm install jp-core
# 或
pnpm add jp-core
# 或
yarn add jp-core
```

## 使用

### 作为库使用

```typescript
import { getParticleInfo, masuForm, adjectiveNegative } from 'jp-core';

// 查询助词
const particle = getParticleInfo('は');
console.log(particle?.meaning); // 主题标记，表示话题

// 动词变形
const masu = masuForm('食べる');
console.log(masu); // 食べ

// 形容词变形
const negative = adjectiveNegative('高い');
console.log(negative); // 高くない
```

### 作为 CLI 工具使用

安装后，可以使用 `jp` 命令：

```bash
jp
```

或者使用 npx：

```bash
npx jp-core
```

## 开发

### 本地开发

```bash
# 安装依赖
pnpm install

# 运行测试
pnpm test

# 构建项目
pnpm build

# 运行 CLI
pnpm cli
```

### 发布

详见 [发布指南](.github/PUBLISH.md)

发布流程：
1. 更新版本号
2. 创建 git tag (格式: v1.0.0)
3. GitHub Actions 会自动发布到 npm