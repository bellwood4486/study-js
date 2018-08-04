'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const getRadioButton = name => {
    return (
      Array.from(document.getElementsByName(name))
        .filter(e => e.checked)
        .map(e => e.value)[0] || ''
    )
  }

  document.getElementById('btn').addEventListener('click', () => {
    console.log(getRadioButton('food'))
  })
})
