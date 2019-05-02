document.addEventListener('DOMContentLoaded', () => {
  b = 2 // <-ここはチェックに引っかからない
  console.log(b)
  ;(function() {
    'use strict'
    a = 1 // <-ここは引っかかる
    console.log(a)
  })()
})
