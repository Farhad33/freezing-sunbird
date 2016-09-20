const head = (data) => {
  if (typeof(data) == "undefined") {
    return undefined
  }
  return data[0]
}

export default head