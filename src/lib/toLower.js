const toLower = (str) => {
  let newString = ""

  for (var letter of str) {
    var num = letter.charCodeAt()
    if ( num > 64 && num < 91 ) {
      num += 32
      newString += String.fromCharCode(num)
    } else {
      newString += letter
    }
  }
  return newString
}


export default toLower