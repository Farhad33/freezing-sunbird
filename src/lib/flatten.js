const flatten = (arr) => {
  let newArr = []
  for (var index in arr){
    if (arr[index].constructor === Array){
      let subArr = arr[index]
      for (var jndex in subArr){
        newArr.push(subArr[jndex])
      }
    } else {
      newArr.push(arr[index])
    }
  }

  return newArr
}

export default flatten
