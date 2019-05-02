document.addEventListener('DOMContentLoaded', () => {
  const timer = window.setInterval(() => {
    const dat = new Date()
    document.getElementById('result').textContent = dat.toLocaleString()
  }, 5000)

  document.getElementById('btn').addEventListener('click', () => {
    window.clearInterval(timer)
  })
})
