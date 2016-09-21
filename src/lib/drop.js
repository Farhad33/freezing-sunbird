
const drop = (arr, number = 1) => {
  let newArr = []

  if (typeof number != 'number') {
    return arr
  }
  for (var i = number; i < arr.length; i++) {
    newArr.push(arr[i])
  }
  return newArr
}

export default drop
