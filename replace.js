document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('list')
  const del = document.getElementById('del')
  const pic = document.getElementById('pic')

  const updatePicture = (isbn, description) => {
    const img = document.createElement('img')
    img.src = `http://www.wings.msn.to/books/${isbn}/${isbn}.jpg`
    img.alt = description
    img.height = 150
    img.width = 108
    if (pic.getElementsByTagName('img').length > 0) {
      pic.replaceChild(img, pic.lastChild)
    } else {
      del.disabled = false
      pic.appendChild(img)
    }
  }

  const clearPicture = () => {
    pic.removeChild(pic.lastChild)
    del.disabled = true
  }

  list.addEventListener('click', e => {
    const isbn = e.target.getAttribute('data-isbn')
    if (isbn) {
      updatePicture(isbn, e.target.innerHTML)
    }
  })

  del.addEventListener('click', () => {
    clearPicture()
  })
})
