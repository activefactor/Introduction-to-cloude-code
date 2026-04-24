# ClaudeCode入門

Chat AIを使い慣れた人が、ClaudeCodeを体験しながら学べるオンボーディングサイトです。

[![サイトを見る](https://img.shields.io/badge/🌐%20サイトを見る-公開中-2e74e8?style=for-the-badge)](https://activefactor.github.io/Introduction-to-cloude-code/)

---

## このサイトについて

「ClaudeCodeって何？」「普通のChat AIと何が違うの？」という疑問を持つ人に向けて、難しい説明より先に**体験から入れる**構成にしています。

対象読者は、ChatGPTやClaudeなどのChat AIは使っているが、ClaudeCodeは初めて・使い始めたばかりの人です。

## ページ構成

| ページ | 内容 |
|---|---|
| トップ | ClaudeCodeの概要と体験への導線 |
| まず体験してみる | 「ファイルを作れる」感覚を先につかむ |
| ClaudeCodeとは | 基本的な仕組みとポジション |
| Chat AIとの違い | 比較で違いを整理 |
| 導入方法を選ぶ | Desktop / CLI / VS Code 拡張の3択 |
| はじめての使い方 | 最初のコマンドから動かすまで |
| 便利な活用事例 | 文書作成・分析・コーディング等の例 |
| セッション・記憶・ルール | CLAUDE.md・memory機能の使い方 |
| 料金とトークン | 料金の考え方とコスト感覚 |
| モデルの使い分け | Opus / Sonnet / Haiku の選び方 |
| セキュリティ・オプトアウト | 安全に使うための設定と考え方 |
| FAQ | よくある疑問をまとめて回答 |
| 用語集 | ClaudeCode特有の用語を解説 |

## 技術構成

- 静的HTML / CSS / JavaScript（フレームワークなし）
- GitHub Pagesで公開
- スマホ・PC両対応（レスポンシブ）

## ディレクトリ構成

```
/
├── index.html          # トップページ
├── experience.html     # まず体験してみる
├── *.html              # 各コンテンツページ
├── css/
│   ├── variables.css   # デザイントークン
│   ├── base.css        # レイアウト・共通スタイル
│   └── components.css  # UIコンポーネント
├── js/
│   └── main.js         # ナビ・アコーディオン等
└── docs/               # 企画・仕様書類
```
