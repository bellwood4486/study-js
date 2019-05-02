const A = {
  foo: () => {
    console.log(this) // thisはglobalオブジェクト
  },
}

const B = {
  foo: function() {
    console.log(this) // thisはB
  },
}

A.foo()
B.foo()
