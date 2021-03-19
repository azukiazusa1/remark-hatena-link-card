const visit = require('unist-util-visit')
const fetch = require('./fetchOGP')

const h = (type, attrs = {}, children = []) => {
  return {
    type: 'element',
    tagName: type,
    data: {
      hName: type,
      hProperties: attrs,
      hChildren: children,
    },
    properties: attrs,
    children,
  }
}

const t = (value) => {
  return {
    type: 'text',
    value,
  }
}

module.exports = () => (tree) => {
  visit(tree, 'link', (node) => {
    if (node.url !== node.children[0].value) return

    node.children = [
      h('div', { className: 'link-card' }, [
        h('iframe', { className: 'link-card--text', 'src': `https://hatenablog-parts.com/embed?url=${node.url}`  }),
      ]),
    ]
    return node
  })
}
