const visit = require('unist-util-visit')

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
  visit(tree, 'link', (node, index, parent) => {
    if (node.url !== node.children[0].value) return

    node.children = [
      h('div', { className: 'link-card' }, [
        h('iframe', { className: 'link-card--iframe', src: `https://hatenablog-parts.com/embed?url=${node.url}` }),
      ]),
    ]
    parent.children.splice(index, 1, ...node.children)
  })
}
