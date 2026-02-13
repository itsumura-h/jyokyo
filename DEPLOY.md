# GitHub Pages デプロイメント設定

このプロジェクトは GitHub Actions で自動的にビルドし、GitHub Pages で公開するように設定されています。

## セットアップ手順

### 1. GitHub リポジトリ設定

GitHub リポジトリの **Settings** > **Pages** に移動して、以下を確認します：

- **Source**: Deploy from a branch を選択
- **Branch**: `main` (または `master`) を選択
- **Folder**: `/ (root)` を選択

または、以下の手順で GitHub Actions を使用した自動デプロイを設定：

- **Source**: GitHub Actions を選択

### 2. デプロイメント方法

#### オプション A: GitHub Actions による自動デプロイ（推奨）

`.github/workflows/deploy.yml` が設定されているため、以下の場合に自動的にビルド・デプロイが実行されます：

- `main` または `master` ブランチへの push
- `main` または `master` ブランチへの Pull Request

#### オプション B: 手動デプロイ

```bash
# 1. ビルド
pnpm build

# 2. dist フォルダを GitHub Pages へアップロード
# 手動で GitHub Pages の Settings から dist フォルダをアップロード
```

### 3. ベースパス設定

このプロジェクトは **サブパスでのホスティング** に対応しています。

- **GitHub Organization Pages** (例: `https://org.github.io/`) の場合
  - `base: '/'` に設定（リポジトリ名を URL に含めない）

- **GitHub Project Pages** (例: `https://username.github.io/jyokyo/`) の場合
  - `base: '/jyokyo/'` に設定（GitHub Actions で自動設定）
  - `vite.config.ts` の `base` をリポジトリ名に変更してください

現在の設定：
```typescript
base: process.env.GITHUB_ACTIONS ? '/jyokyo/' : '/',
```

### 4. 環境変数

GitHub Actions ワークフローで使用される環境変数：

- `GITHUB_ACTIONS`: `true` （GitHub Actions で実行時に自動設定）
- Node.js: 18
- pnpm: 8

### 5. トラブルシューティング

#### Pages が更新されない場合

1. GitHub リポジトリの **Actions** タブで、ワークフロー実行状況を確認
2. ワークフロー実行ログで エラーを確認
3. 必要に応じて `.github/workflows/deploy.yml` を修正

#### ビルドエラーの場合

```bash
# ローカルでビルド確認
pnpm install
pnpm build

# プレビュー
pnpm preview
```

#### ベースパスの問題

以下を確認：
1. `vite.config.ts` の `base` 設定
2. `index.html` のリソースパス
3. リンク URL がベースパスに対応しているか

### 6. ホスティング確認

デプロイ完了後：

1. GitHub リポジトリの **Settings** > **Pages** で公開 URL を確認
2. 例: `https://username.github.io/jyokyo/`
3. ブラウザでアクセスして正しく表示されることを確認

## GitHub Actions ワークフロー概要

`.github/workflows/deploy.yml` では以下のステップが実行されます：

1. **Checkout**: リポジトリのコードをチェックアウト
2. **Setup pnpm**: pnpm パッケージマネージャーのセットアップ
3. **Setup Node.js**: Node.js 18 のセットアップ
4. **Install dependencies**: 依存パッケージのインストール
5. **Build**: `pnpm build` を実行してビルド
6. **Setup Pages**: GitHub Pages の設定
7. **Upload artifact**: `dist` フォルダをアップロード
8. **Deploy**: GitHub Pages にデプロイ

## 参考資料

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
