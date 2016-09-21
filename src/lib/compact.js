const compact = arr => {
  let trueArr = []
  if (arr == undefined) { return trueArr }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      trueArr.push(arr[i])
    }
  }
  return trueArr
}

export default compact
