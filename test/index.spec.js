'use strict'

const fs = require('fs')
const path = require('path')
const remark = require('remark')
const html = require('remark-html')
const remarkCardLink = require('../src/index')

const base = path.join(__dirname, 'fixtures')
const processor = remark().use(remarkCardLink).use(html)

describe('test remark-card-tilte', () => {
  test('same link and text', async () => {
    const doc = fs.readFileSync(base + '/sameLinkAndText.md', 'utf-8')

    const { contents } = await processor.process(doc)
    expect(contents).toEqual(
      '<p><div class="link-card"><iframe class="link-card--iframe" src="https://hatenablog-parts.com/embed?url=https://example.com"></iframe></div></p>\n',
    )
  })

  test('not same link and text', async () => {
    const doc = fs.readFileSync(base + '/notSameLinkAndText.md', 'utf-8')

    const { contents } = await processor.process(doc)
    expect(contents).toEqual('<p><a href="https://example.com">some example text</a></p>\n')
  })
})
