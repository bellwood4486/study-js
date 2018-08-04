'use strict'

function Triangle() {
  let _base
  let _height
  const _checkArgs = function(val) {
    return typeof val === 'number' && val > 0
  }

  this.setBase = function(base) {
    if (_checkArgs(base)) {
      _base = base
    }
  }

  this.getBase = function() {
    return _base
  }

  this.setHeight = function(height) {
    if (_checkArgs(height)) {
      _height = height
    }
  }

  this.getHeight = function() {
    return _height
  }
}

Triangle.prototype.getArea = function() {
  return (this.getBase() * this.getHeight()) / 2
}

const t = new Triangle()
t._base = 10
t._height = 2
console.log(t.getArea())

t.setBase(10)
t.setHeight(2)
console.log(t.getBase())
console.log(t.getHeight())
console.log(t.getArea())
