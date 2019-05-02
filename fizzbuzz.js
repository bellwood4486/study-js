function isFizz(i) {
  return i % 3 === 0
}

function isBuzz(i) {
  return i % 5 === 0
}

function fizzBuzz(upto) {
  for (let i = 1; i <= upto; i++) {
    let v
    if (isFizz(i) && isBuzz(i)) {
      v = 'FizzBuzz'
    } else if (isFizz(i)) {
      v = 'Fizz'
    } else if (isBuzz(i)) {
      v = 'Buzz'
    } else {
      v = i
    }
    console.log(v)
  }
}

function fizzBuzz2(upto) {
  for (let i = 1; i <= upto; i++) {
    console.log((isFizz(i) ? 'Fizz' : '') + (isBuzz(i) ? 'Buzz' : '') || i)
  }
}

// fizzBuzz(15)
fizzBuzz2(15)
