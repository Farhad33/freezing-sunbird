
const filter = (coll, func) => {
  var result = []
  for (var val of coll) {
    if (func(val)) {
      result.push(val)
    }
    if (val.constructor !== Object) {
      result.push(val)
    }
  }
  return result
}

export default filter
