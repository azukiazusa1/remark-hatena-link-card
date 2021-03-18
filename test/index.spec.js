'use strict'
var unified = require('unified')
var markdown = require('remark-parse')
var remark2rehype = require('remark-rehype')
var html = require('rehype-stringify')


describe('test', () => {
  test ('it', async () => {
    const doc = '# Hello'
    const processor = unified()
    .use(markdown)
    .use(remark2rehype)
    .use(html)

    const { contents } = await processor.process(doc)
    expect(contents).toContain('<h1>Hello</h1>')
  })
})