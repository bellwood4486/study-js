'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main')
  main.addEventListener('mousemove', e => {
    main.innerHTML = `screen${e.screenX}/${e.screenY}<br/>`
    // あとは省略
  })
})
