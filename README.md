# 日本株取引記録(trade-next-prisma-chart)

## 目的

- Prismaを使用してデータベースに接続してNext.jsでCRUDを実現する  
- Chart.jsやPlotlyを使用してチャートを表示する

## デプロイ先

https://trade-next-prisma-test.vercel.app/

## 使用フレームワーク

- [Next.js v13.4](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)

## 使用データベース

- [Vercel Postgres](https://vercel.com/dashboard/stores)

## 使用ライブラリ

- [Prisma](https://www.prisma.io/)
- [Chart.js](https://www.chartjs.org/docs/latest/)
- [react-chartjs-2](https://react-chartjs-2.js.org/)
- [Plotly](https://plotly.com/javascript/)
- [React Plotly](https://plotly.com/javascript/react/)

## 使用サービス

- [Vercel](https://vercel.com/dashboard)

## 目標

- Next.jsのApp RouterでのParallel Routesの理解
- Prismaの理解
- Chart.jsの理解
- Plotlyの理解
- Vercel Postgresの理解
- Vercelへのデプロイ

## 参考資料

### Tailwind CSS

- [Tailwind cheatsheet](https://tailwindcomponents.com/cheatsheet/)

### Prisma

- [tradeでリレーションしたstockのデータを表示](https://zenn.dev/sendokakeru/articles/4d8d9b97d6c1ad)
- [seedからデータベースに登録](https://www.prisma.io/docs/guides/migrate/seed-database#seeding-your-database-with-typescript-or-javascript)
- [Vercel build dependency](https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/vercel-caching-issue)

### Chart.js

- [Next.js+TypeScript+Chart.js](https://zenn.dev/nihashi/articles/1f8a1f828554af)
- [グラフ配色サポートツール「COLORS」](https://colors.design4u.jp/)

### Plotly

- [React + TypeScript + Plotly で3次元グラフ](https://qiita.com/aktr996/items/f3483c9fc17cf0ad3c10)
- [Next.js plotly Build](https://github.com/plotly/react-plotly.js/issues/272#issuecomment-1328283528)

### Vercel Postgres

- [Next.js × NextAuth × Prisma × VercelPostgresで構築するモダン認証機能システム](https://zenn.dev/arsaga/articles/3f5bce7c904ebe)
- [Integrated seeding with Prisma Migrate](https://www.prisma.io/docs/guides/migrate/seed-database#integrated-seeding-with-prisma-migrate)
- [JavaScriptで日付をYYYY-MM-DD形式で得るコード](https://www.ey-office.com/blog_archive/2023/04/18/short-code-to-get-todays-date-in-yyyy-mm-dd-format-in-javascript/)
