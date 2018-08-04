document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', () => {
    const values = Array.from(document.getElementsByName('food'))
      .filter(e => e.checked)
      .map(e => e.value)
    console.log(values.toString())
  })
})
