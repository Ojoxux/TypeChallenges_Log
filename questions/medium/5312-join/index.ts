/*
  5310 - Join
  -------
  by Pineapple (@Pineapple0919) #medium #array

  ### Question

  Implement the type version of Array.join, Join<T, U> takes an Array T, string or number U and returns the Array T with U stitching up.

  ```ts
  type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
  type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
  type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
  type Res3 = Join<["o"], "u">; // expected to be 'o'
  ```

  > View on GitHub: https://tsch.js.org/5310
*/

/* _____________ Your Code Here _____________ */

export type Join<
  T extends unknown[],
  U extends string | number = ',',
  A extends string = '',
> = T extends [infer B, ...infer C]
  ? T['length'] extends 1
    ? Join<C, U, `${A}${B & string}`>
    : Join<C, U, `${A}${B & string}${U}`>
  : A;
