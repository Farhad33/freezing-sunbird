import last from '../lib/last'
import expect from 'expect.js'

describe('last', () => {
  it('Gets the last element of array', () => {
    expect( last([4, 2, 8, 6])).to.eql(6)
  })
    
  it('Gets the last element of array', () => {
    expect( last([2, 7, 8])).to.eql(8)
  })

})