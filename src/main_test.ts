import {
  assertEquals,
  rehypeParse,
  rehypeStringify,
  unified,
} from "../deps.ts";

import rehypeNormalizeSpaces from "./main.ts";

const pipeline = unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeNormalizeSpaces)
  .use(rehypeStringify);

Deno.test("one", async () => {
  const input = "foo bar";
  const expected = "foo bar";

  const actual = (await pipeline
    .process(input)).toString();

  assertEquals(actual, expected);
});

Deno.test("two", async () => {
  const input = "foo  bar";
  const expected = "foo  bar";

  const actual = (await pipeline
    .process(input)).toString();

  assertEquals(actual, expected);
});
