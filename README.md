# Mastra Playwright MCP

このプロジェクトは、Mastraを使用してPlaywrightのブラウザ自動化を実装するためのテンプレートプロジェクトです。

## 機能

- Mastraを使用したブラウザ自動化
- PlaywrightのMCP（Model-Control-Protocol）統合
- TypeScriptによる型安全な実装

## 必要条件

- Node.js (v20以上推奨)
- npm または yarn

## インストール

```bash
# 依存パッケージのインストール
npm install
```

## 開発環境の起動

```bash
# 開発サーバーの起動
npm run dev
```

## プロジェクト構成

- `src/` - ソースコードディレクトリ
  - `mastra/` - Mastra関連の設定とエージェント
    - `agents/` - Playwrightエージェントの実装
    - `mcp/` - MCPサーバーの登録
    - `index.ts` - Mastraのメインセットアップ

## 環境変数

開発時は `.env.development` ファイルに必要な環境変数を設定してください。

## 依存パッケージ

主な依存パッケージ：
- @mastra/core: ^0.7.0
- @mastra/mcp: ^0.3.6
- @playwright/mcp: ^0.0.5
- mastra: ^0.4.4 