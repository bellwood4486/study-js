class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getName() {
    return this.lastName + this.firstName
  }
}

class BusinessMember extends Member {
  constructor(firstName, lastName, clazz) {
    super(firstName, lastName)
    this.clazz = clazz
  }

  getName() {
    return super.getName() + '/役職：' + this.clazz
  }

  work() {
    return this.getName() + ' is working!'
  }
}

const bm = new BusinessMember('suzuki', 'taro', '課長')
console.log(bm.getName())
console.log(bm.work())
