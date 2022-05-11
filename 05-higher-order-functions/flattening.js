function flatten(array) {
  return array.reduce((newArray, item) => newArray.concat(item), [])
}

let arrays = [[1, 2, 3], [4, 5], [6]]
flatten(arrays)
