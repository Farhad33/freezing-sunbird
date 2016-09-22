import max from '../lib/max'
import expect from 'expect.js'

describe('max', () => {
  it('Computes the maximum value of array', () => {
    expect( max([4, 2, 8, 6])).to.eql(8)
  })
    
  it('If array is empty or falsey, undefined is returned', () => {
    expect( max([])).to.eql(undefined)
  })

})