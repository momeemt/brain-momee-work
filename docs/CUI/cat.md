# Linuxコマンド

- [Linux基本コマンドTips一覧](https://www.atmarkit.co.jp/ait/series/3065/) を読んで勉強したことをまとめる

## cat
- con**cat**eate。連結するコマンド。
- ファイルの内容を確認できる。
- ファイルを連結できる。

```sh
cat a b > ab
```

## more
- 長い文章を分けて表示する
- WordPressのmoreボタンとほぼ同じ？
- 実行結果が長いとき、 `<command> | more` のようにパイプを渡すとわかりやすい
- catと組み合わせると**行番号付き**で表示できる