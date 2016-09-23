
const map = (container, func) => {
  let newArr = []

  for (var key in container) {
    ourPush(newArr, func(container[key]))
  }

  return newArr
}

const ourPush = (array, item) => {
  array[array.length] = item
  return array
}

export default map
