'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const d = document.getElementById('main')
  console.log(d)
  console.dir(d)

  const storage = sessionStorage
  storage.setItem('fruit1', 'りんご')
  storage.fruit2 = 'みかん'
  storage['fruit3'] = 'ぶどう'
  console.log(storage.getItem('fruit1'))
  console.log(storage.fruit2)
  console.log(storage['fruit3'])

  const apple = { name: 'りんご', price: 150, made: '青森' }
  storage.setItem('apple', JSON.stringify(apple))
  const data = JSON.parse(storage.getItem('apple'))
  console.log(data.name)
})
