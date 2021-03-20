# remark-hatena-link-card

When the url matches the text, it converts it to a Hatena blog link card.

## install 

```
npm innstall remark-hatena-link-card
```

## usage

* markdown

```
[https://example.com](https://example.com)

[some example text](https://example.com)
```

* script

```js
const fs = require('fs')
const path = require('path')
const remark = require('remark')
const html = require('remark-html')
const remarkCardLink = require('remark-hatena-link-card')

const base = path.join(__dirname, 'sample.md')
const processor = remark().use(remarkCardLink).use(html)

processor.process.then(({ contents }) => console.log(contents)
```

* output

```html
<p><div class="link-card"><iframe class="link-card--iframe" src="https://hatenablog-parts.com/embed?url=https://example.com"></iframe></div></p>
<p><a href="https://example.com">some example text</a></p>
```
