import flattenDeep from '../lib/flattenDeep'
import expect from 'expect.js'

describe('flattenDeep', () => {
  it ('It should flatten an array completely', () => {
    expect( flattenDeep([1,[2,[3,4],5],6])).to.eql([1,2,3,4,5,6])
  })

  it ('It should return an array if it is already flattened', () => {
    expect( flattenDeep([1,2,3,4,5])).to.eql([1,2,3,4,5])
  })

  it ('It should return an empty array if not passed an array', () => {
    expect( flattenDeep(1)).to.eql([])
  })

})
