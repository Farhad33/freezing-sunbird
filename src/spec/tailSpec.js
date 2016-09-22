import tail from '../lib/tail'
import expect from 'expect.js'

describe('tail', () => {
  it('Gets all but the first element of array', () => {
    expect( tail([4, 2, 8, 6])).to.eql([2, 8, 6])
  })
    
  it('Gets all but the first element of array', () => {
    expect( tail([2, 7, 8])).to.eql([7, 8])
  })

})