'use strict'

const strFormat = (format, ...args) => {
  return format.replace(/\{(\d+)\}/g, (m, k) => {
    return args[k] || ''
  })
}

console.log(strFormat('1 -> aa:{0} bb:{1}', 1, 2))

const one = 1
const two = 2
console.log(`2 -> aa:${one} bb:${two}`)
