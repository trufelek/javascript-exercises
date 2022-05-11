function some(array, test) {
  for (let i=0; i< array.length; i++) {
    if (test(array[i])) {
      return true
    }
  }
  return false
}

console.log(some([1, 2, 5], n => n % 2 === 0))
console.log(some([2, 4, 16], n => n > 20))
