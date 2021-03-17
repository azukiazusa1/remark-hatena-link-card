const visit = require('unist-builder')

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
  };
};

module.exports = () => tree => {
  visit(tree, 'link', (node => {
    const {children = []}  = node
    if (node.url !== node.children[0].value) return
    
    node.children = [h('div', { className: 'border-2 border-gray-300 dark:border-gray-600'}, [
      {
        type: 'text',
        value: 'a'
      }
    ])]
    console.log(node.children)
  })