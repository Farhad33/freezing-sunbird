const flattenDeep = (arr) => {
  let newArr = []

  if (arr.constructor !== Array) {
    return newArr
  }

  subFlatten(newArr, arr)
  return newArr
}

const subFlatten = (pusharray, subarray) => {
  for (var index of subarray){
    if (index.constructor === Array){
      subFlatten(pusharray, index)
    } else {
      pusharray.push(index)
    }
  }
}

export default flattenDeep
