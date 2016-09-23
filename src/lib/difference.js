const difference = (...arg) => {
  let firstArr = arg[0]

  for (var i = 1; i < arg.length; i++) {
    firstArr = arrComp(firstArr,arg[i])
  }
  return firstArr
}


const arrComp = (arr1, arr2) => {
  let result = []
  for (let first of arr1) {
    let counter = 0
    for (let second of arr2) {
      if (first != second) {
        counter++
      }
      if (counter == arr2.length) {
        result.push(first)
      }
    }
  }
  return result
}


export default difference