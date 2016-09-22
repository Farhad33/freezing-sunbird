import map from '../lib/map'
import expect from 'expect.js'

describe('map', () => {
  it ('It should return a new array with the given function performed on every value in the input array', () => {

    const addOne = num => { return ++num }
    expect( map([2,4,6], addOne)).to.eql([3,5,7])
  })

  it ('It should return a new array with the given function performed of the value of a dictionary pair', () => {

    const addOne = num => { return ++num }
    expect( map({ 'a' : 2, 'b' : 4, 'c' : 6}, addOne)).to.eql([3,5,7])
  })

  it ('It should return a new array with the given function performed on every value in the input object', () => {

    const eightMetamorphosis = input => {
      if (input == 8) {
        return "phoenix"
      }  else {
        return input
      }
    }
    expect( map([3,8,"dad",8], eightMetamorphosis)).to.eql([3,"phoenix","dad","phoenix"])
  })

  it ('It should return a new array with the given function performed on every value in the input object', () => {

    const oneFishTwoFish = input => {
        if (input == 1) {
          return "red"
        } else if (input == 2) {
          return "blue"
        } else {
          return input
        }
    }
    expect( map([1,'fish',2,'fish'], oneFishTwoFish)).to.eql(['red','fish','blue','fish'])
  })

})
