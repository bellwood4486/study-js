document.addEventListener('DOMContentLoaded', () => {
  const getSelectValue = id => {
    return Array.from(document.getElementById(id).options)
      .filter(o => o.selected)
      .map(o => o.value)
  }

  document.getElementById('btn').addEventListener('click', () => {
    console.log(getSelectValue('food').toString())
  })
})
