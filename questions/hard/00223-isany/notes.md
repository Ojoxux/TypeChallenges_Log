# 223 - isany

## 🤔 詰まったこと

- 交差型（`&`）と`any`型の相互作用

## 💡 学んだこと

- `0 & any`は`any`になるが、`0 & string`は`never`になる
- `1 extends 0 & T`パターンで`any`型を検出できる
