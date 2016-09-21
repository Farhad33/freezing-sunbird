const uniq = arr => {
  let result = []
  let isUniq

  for (let el1 of arr) {
    isUniq = true
    for (let el2 of result) {
      el1 == el2 ? isUniq = false:''
    }
    isUniq ? result.push(el1):''
  }
  return result
}


export default uniq
