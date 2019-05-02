'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const books = [
    { title: '独習PHP1', price: 3200 },
    { title: '独習PHP2', price: 3200 },
    { title: '独習PHP3', price: 3200 },
  ]

  const frag = document.createDocumentFragment()
  books.forEach(book => {
    const li = document.createElement('li')
    const text = document.createTextNode(book.title)
    li.appendChild(text)
    frag.appendChild(li)
  })
  document.getElementById('list').appendChild(frag)
})
