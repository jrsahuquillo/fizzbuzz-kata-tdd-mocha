function fizzbuzzList() {
  var fizzbuzzArray = []
  for (var num = 1; num <= 100; num++) {
    fizzbuzzArray.push(setFizzBuzzValue(num))
  }
  return fizzbuzzArray
}

function setFizzBuzzValue(num) {
  if (isMultiple(num,3) && isMultiple(num,5)) {
    return "FizzBuzz"
  } else if (isMultiple(num, 3)) {
    return "Fizz"
  } else if (isMultiple(num, 5)) {
    return "Buzz"
  } else {
    return num
  }
}

function isMultiple(num, multiple) {
  if(num % multiple == 0) {
    return true
  }
}

module.exports = fizzbuzzList();

console.log(fizzbuzzList())
