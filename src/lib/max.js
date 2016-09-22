const max = (arr) => {
  if (arr == []) {
    return undefined
  }
  let result = arr[0]
  for(let num of arr){
    if (result < num) {
      result = num
    }
  }

  return result

}

export default max