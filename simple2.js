'use strict'

const Member = function(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.getName = function() {
    return this.lastName + ' ' + this.firstName
  }
  Object.seal(this)
}

const mem = new Member('aa', 'bb')
console.log(mem.getName())
