const toUpper = (str) => {
  let newString = ""

  for (var letter of str) {
    var num = letter.charCodeAt()
    if ( num > 96 && num < 123 ) {
      num -= 32
      newString += String.fromCharCode(num)
    } else {
      newString += letter
    }
  }
  return newString
}



export default toUpper
