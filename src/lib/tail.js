const tail = (arr) => {
  let result = []
  
  for (var i = 1; i < arr.length; i++) {
    result.push(arr[i])
  }

  return result
}


export default tail