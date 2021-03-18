const fetch = require('node-fetch')

module.exports = async (url) => {
  const res = await fetch(url)
  const text = await res.text()
    const el = new DOMParser().parseFromString(text, "text/html")
    const headEls = (el.head.children)
    const results = {}
    Array.from(headEls).forEach(v => {
        const prop = v.getAttribute('property')
        if (!prop) return;
        results[prop] =  v.getAttribute("content")
    })

    return results  
}