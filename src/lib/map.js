
const map = (container, func) => {
  let newArr = []

  for (var key in container) {
    var value = container[key]
    ourPush(newArr, func(value))
  }

  return newArr
}

const ourPush = (array, item) => {
  array[array.length] = item
  return array
}

export default map
