function renderChessboard(size) {
  var output = ""
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      output += (i + j) % 2 ? " " : "#"
    }
    output += "\n"
  }
  console.log(output)
}

renderChessboard(8)
