/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';
import type { Filter } from './index';

type Falsy = false | 0 | '' | null | undefined;

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
];
