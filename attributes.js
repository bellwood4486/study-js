document.addEventListener(
  'DOMContentLoaded',
  () => {
    const logo = document.getElementById('logo')
    for (const attr of logo.attributes) {
      console.log(attr.name + ':' + attr.value)
    }
  },
  false
)
