# babel-tutorial
https://github.com/thejameskyle/babel-handbook/blob/master/translations/ja/user-handbook.md

- babel-register: `require`が使える
- babel-node: `node`コマンドの代わりに使える(詳細不明)
- babel-core: 文字列やFile, ASTからコード解析

## compile options
- デフォルトでは何もしない
- pluginやpresetを渡して初めてcomplileする(preset = groups of plugins)
- babelに何をさせるかは.babelrcで定義する

## presets
- babel-preset-es2015: es2015(es6) -> es5 へのcompile
- babel-preset-react: Reactのcompile
- babel-preset-stage-x: JS仕様は5段階(0-4)を辿る。
  - 0->1->2->3->4の順。但し4は最終版、es2015と同義となるためpreset-stage-4は存在しない。
  - 各stageの詳細を確認したければ(https://github.com/tc39/proposals)を見ると良さそう

## Execute
- compileはできたかもしれないが、話はまだ終わってない。
- HTML/CSS/JSの新しい仕様を古いブラウザで実行できるようにするpolyfillを、babelでも提供している
- babel-polyfill

## Lint
- eslint, babel-eslintをinstall
