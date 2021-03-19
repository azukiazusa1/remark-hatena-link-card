'use strict'

const fs = require('fs')
const path = require('path')
const unified = require('unified')
const markdown = require('remark-parse')
const remark2rehype = require('remark-rehype')
const html = require('rehype-stringify')
const remarkCardLink = require('../index')

const base = path.join(__dirname, 'fixtures')
const doc = fs.readFileSync(base + '/test.md', 'utf-8')

describe('test remark-card-tilte', () => {
  test('it', async () => {
    const processor = unified().use(markdown).use(remarkCardLink).use(remark2rehype).use(html)

    const { contents } = await processor.process(doc)
    expect(contents).toEqual('<p><a href="https://zenn.dev/steelydylan/articles/zenn-web-components"><div class="link-card"><div class="link-card--text"><div class="link-card--title">Web Componentsを利用したZennマークダウン部分の改善について</div><div class="link-card--description"></div><div class="link-card--meta">Zenn</div></div></div></a></p>')
  })
})
