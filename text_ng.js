document.addEventListener(
  'DOMContentLoaded',
  () => {
    document.getElementById('btn').addEventListener(
      'click',
      () => {
        const name = document.getElementById('name')
        const result = document.getElementById('result')
        // NG↓
        // result.innerHTML = 'こんにちは、' + name.value + 'さん！'
        // OK
        result.textContent = 'こんにちは、' + name.value + 'さん！'
      },
      false
    )
  },
  false
)
