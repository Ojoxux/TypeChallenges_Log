/*
  16 - Pop
  -------
  by Anthony Fu (@antfu) #中級 #array

  ### 質問

  > この課題ではTypeScript 4.0が推奨されます

  配列 `T` を受け取り、最後の要素を除いた配列を返す汎用的な `Pop<T>` を実装してください。

  例えば

  ```ts
  type arr1 = ['a', 'b', 'c', 'd']
  type arr2 = [3, 2, 1]

  type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
  type re2 = Pop<arr2> // expected to be [3, 2]
  ```

  **おまけ**: 同様に `Shift`、 `Push`、 `Unshift` も実装できますか？

  > GitHubで確認する：https://tsch.js.org/16/ja
*/

/* _____________ ここにコードを記入 _____________ */

export type Pop<T extends any[]> = T extends [...infer S, infer _] ? S : [];
