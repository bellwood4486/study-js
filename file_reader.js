'use strict'

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('file').addEventListener(
    'change',
    () => {
      const input = document.getElementById('file').files[0]
      const reader = new FileReader()
      reader.addEventListener(
        'load',
        () => {
          document.getElementById('result').textContent = reader.result
        },
        true
      )
      reader.addEventListener(
        'error',
        () => {
          console.log('error:' + reader.error.message)
        },
        true
      )
      reader.readAsText(input, 'UTF-8')
      // reader.abort()
    },
    true
  )
})
