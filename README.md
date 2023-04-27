# README

Rehype plugin that replaces non-breaking spaces with whitespace



## Features

- replaces non-breaking spaces with whitespace



## Example

```js
import { unified, rehypeParse, rehypeStringify } from "./deps.ts";
import rehypeNormalizeSpaces from "./src/main.ts";

const result = (await unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeNormalizeSpaces)
  .use(rehypeStringify)
  .process(`foo bar`))
  .toString();
console.log(result);
```

Before

```html
foo bar
```

After

```
foo bar
```
