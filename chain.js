'use strict'

const Animal = function() {}
Animal.prototype = {
  walk: function() {
    console.log('tokotoko')
  },
}

const Dog = function() {
  Animal.call(this)
}
Dog.prototype = new Animal()
Dog.prototype = {
  bark: function() {
    console.log('wanwan')
  },
}
// Dog.prototype.bark = function() {
//   console.log('wanwan')
// }

const d = new Dog()
d.walk()
d.bark()
