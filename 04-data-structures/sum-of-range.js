function range(start, end, step = 1) {
  let table = []
  for (var i=start; step > 0 ? i <= end : i >= end ; i += step ) {
    table.push(i)
  }
  return table
}

function sum(table) {
  return table.reduce((total, item) => total += item, 0)
}

console.log(range(1, 10))
console.log(range(5, 2, -1))
console.log(sum(range(1, 10)))
