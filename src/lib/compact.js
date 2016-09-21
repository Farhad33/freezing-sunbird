const compact = (arr) => {
  let trueArr = []
  if (arr == undefined) {
    return trueArr
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' && arr[i] != '') {
      trueArr.push(arr[i])
    }
    if (arr[i] != false && arr[i] != null && arr[i] != undefined && !isNaN(arr[i])) {
      trueArr.push(arr[i])
    }
  }
  return trueArr
}

export default compact
