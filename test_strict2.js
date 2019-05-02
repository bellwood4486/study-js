a = 1 // <-ここは引っかからない
console.log(a)
;(function() {
  'use strict'

  b = 2 // <-ここは引っかかる
  console.log(b)
})()
