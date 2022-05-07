function deepEqual(a, b) {
  if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null) {
    for (var item in a) {
      return b[item] && deepEqual(a[item], b[item])
    }
  } else {
    return a === b
  }
}

let obj = {here: {is: 'an'}, object: 2}
console.log(deepEqual(obj, obj))
console.log(deepEqual(obj, {here: 1, object: 2}))
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}))
