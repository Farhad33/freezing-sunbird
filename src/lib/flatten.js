const flatten = (arr) => {
  let newArr = []
  for (var i in arr){
    if (arr[i].constructor === Array){
      let subArr = arr[i]
      for (var j in subArr){
        newArr.push(subArr[j])
      }
    } else {
      newArr.push(arr[i])
    }
  }

  return newArr
}

export default flatten
