'use strict'

document.addEventListener(
  'DOMContentLoaded',
  () => {
    document.getElementById('btn').addEventListener(
      'click',
      () => {
        window.alert('ボタンがクリックされた')
      },
      false
    )
  },
  false
)
