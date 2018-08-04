'use strict'

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('file').addEventListener('change', () => {
    Array.from(document.getElementById('file').files).forEach(f => {
      console.log('ファイル名：' + f.name)
      console.log('種類：' + f.type)
      console.log('最終更新日：' + f.lastModified)
    })
  })
})
