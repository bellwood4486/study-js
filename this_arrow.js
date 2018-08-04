document.addEventListener('DOMContentLoaded', () => {
  class Counter {
    constructor(elem) {
      this.count = 0
      this.elem = elem
      elem.addEventListener('click', () => {
        this.count++
        this.show()
      })
    }
  }
  // const Counter = function(elem) {
  //   this.count = 0
  //   this.elem = elem
  //   elem.addEventListener('click', () => {
  //     this.count++
  //     this.show()
  //   })
  // }

  Counter.prototype.show = function() {
    console.log(this.elem.id + 'は' + this.count + '回クリックされた')
  }

  const c = new Counter(document.getElementById('btn'))
})
