document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('fm').addEventListener('submit', e => {
    if (!window.confirm('ページを送信しても良いですか？')) {
      e.preventDefault()
    }
  })
})
