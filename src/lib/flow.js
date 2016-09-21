
const flow = (functions) => {
  return function(...args){
    var result = functions.shift()(...args)
    functions.forEach(function(func){
      result = func(result)
    })
    return result;
  }
}

export default flow
