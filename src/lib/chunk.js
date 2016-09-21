
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

// 1
// size = 1
// counter = 1
// child = [1, 2]
// parent = [[1]]

// let outputArr = []
// let counter = 0
// let sizeCount = arr.length
// let tempArr = []
//
// for (var i = 0; i < arr.length; i++) {
//   // console.log(sizeCount)
//   tempArr.push(arr[i])
//   counter ++
//   sizeCount --
//
//   if (counter == size) {
//     outputArr.push(tempArr)
//     counter = 0
//     tempArr = []
//   }
//
//   if (sizeCount < size -1) {
//     outputArr.push(tempArr)
//   }
// }
// return outputArr
