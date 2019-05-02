'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const books = [
    { title: '独習PHP1', price: 3200 },
    { title: '独習PHP2', price: 3200 },
    { title: '独習PHP3', price: 3200 },
  ]

  const list = document.getElementById('list')
  for (const book of books) {
    const li = document.createElement('li')
    const text = document.createTextNode(book.title)
    li.appendChild(text)
    list.appendChild(li)
  }
})
