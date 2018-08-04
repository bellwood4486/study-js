class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getName() {
    return this.lastName + this.firstName
  }
}

const m = new Member('suzuki', 'taro')
console.log(m.getName())
