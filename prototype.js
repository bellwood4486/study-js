'use strict'

const Member = function(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Member.prototype.getName = function() {
  return this.lastName + ' ' + this.first()
}

const mem = new Member('a', 'b')
console.log(mem.getName())
