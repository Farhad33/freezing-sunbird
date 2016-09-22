import sum from '../lib/sum'
import expect from 'expect.js'

describe('Sum', () => {
  it('Computes the sum of the values in array.', () => {
    expect( sum([4, 2, 8, 6])).to.eql(20)
  })
    
  it('Computes the sum of the values in array.', () => {
    expect( sum([4, 2, 8, 8])).to.eql(22)
  })

})