function renderTriangle(count, sign) {
  let renderedSigns = sign
  for (var i = 0; i < count; i++) {
    console.log(renderedSigns)
    renderedSigns += sign
  }
}

renderTriangle(7, "#")
