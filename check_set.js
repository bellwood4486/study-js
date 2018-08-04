'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const setCheckValue = (name, values) => {
    Array.from(document.getElementsByName(name))
      .filter(e => values.includes(e.value))
      .forEach(e => (e.checked = true))
  }

  setCheckValue('food', ['餃子'])
})
