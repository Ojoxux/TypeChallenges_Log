import type { Equal, Expect } from "@type-challenges/utils";
import type { MyPick } from "questions/easy/00004-pick/index";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,

  MyPick<Todo, "title" | "completed" | "invalid">,
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
