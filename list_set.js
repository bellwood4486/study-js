'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const setListValues = (id, values) => {
    Array.from(document.getElementById(id).options)
      .filter(o => values.includes(o.value))
      .forEach(o => (o.selected = true))
  }

  setListValues('food', ['ラーメン', '焼き肉'])
})
