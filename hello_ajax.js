'use strict'

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', () => {
    const result = document.getElementById('result')
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          result.textContent = xhr.responseText
        } else {
          result.textContent = 'server error'
        }
      } else {
        result.textContent = 'connecting...'
      }
    }
    xhr.open('GET', 'http://localhost')
    xhr.send()
  })
})
