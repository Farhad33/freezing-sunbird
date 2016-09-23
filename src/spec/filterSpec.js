import filter from '../lib/filter'
import expect from 'expect.js'

describe('filter', () => {
  it ('Returns an array of dictionaries that match the condition in the given function', () => {
    const amazingFind = (val) => {
      return (val.quality == "amazing")
    }

    expect( filter([
      {"name":"Sylvan","quality":"fantastic"},
      {"name":"Max","quality":"amazing"},
      {"name":"Isis","quality":"fantastic"}
    ], amazingFind)).to.eql([{"name":"Max","quality":"amazing"}])
  })

  it ('Returns an array of dictionaries that match the conditions in the given function', () => {
    const fantasticBeard = (val) => {
      return (val.quality == "fantastic" && val.beard)
    }

    expect( filter([
      {"name":"Sylvan","quality":"fantastic","beard":true},
      {"name":"Max","quality":"amazing","beard":true},
      {"name":"Isis","quality":"fantastic","beard":false}
    ], fantasticBeard)).to.eql([{"name":"Sylvan","quality":"fantastic","beard":true}])
  })

  it ('Returns a filtered array of dictionaries and other non-dictionary inputs', () => {
    const fantasticBeard = (val) => {
      return (val.quality == "fantastic" && val.beard)
    }

    expect( filter([
      {"name":"Sylvan","quality":"fantastic","beard":true},
      {"name":"Max","quality":"amazing","beard":true},
      {"name":"Isis","quality":"fantastic","beard":false},
      [1,2,3,4]
    ], fantasticBeard)).to.eql([{"name":"Sylvan","quality":"fantastic","beard":true},[1,2,3,4]])
  })

})
