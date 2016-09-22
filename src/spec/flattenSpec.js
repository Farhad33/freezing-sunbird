import flatten from '../lib/flatten'
import expect from 'expect.js'

describe('flatten', () => {
  it ('It should flatten an array by one level', () => {
    expect( flatten([1,[2,["three",4],5],"six"])).to.eql([1,2,["three",4],5,"six"])
  })

  it ('If an array is fully flattened, it returns the same array', () => {
    expect( flatten([1,2,5,7])).to.eql([1,2,5,7])
  })

  it ('If given something that is not an array, it returns an empty array', () => {
    expect( flatten(2)).to.eql([])
  })
})
