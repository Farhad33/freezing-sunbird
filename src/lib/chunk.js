const chunk = (arr, size = 1) => {
  var parent = []
  var child = []
  var counter = 1
  for (var i = 0; i < arr.length; i++) {
    child.push(arr[i])
    if (size == counter) {
      parent.push(child)
      child = []
      counter = 0
    }
    if ((arr[i+1] == undefined)) {
      if (child[0] == undefined) {
        break
      }
      parent.push(child)
      break
    }
    counter++
  }
  return parent
}

export default chunk
