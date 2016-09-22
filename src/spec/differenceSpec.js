import difference from '../lib/difference'
import expect from 'expect.js'

describe.only('difference', () => {

  it('Compares the first array to other given arrays and returns the elements that differ', () => {
    expect( difference([2, 1, 4], [2, 3])).to.eql([1, 4])
  })
    
  it('Compares the first array to other given arrays and returns the elements that differ', () => {
    expect( difference([2, 1, 4], [2, 3], [5, 4])).to.eql([1])
  })

  it('Compares the first array to other given arrays and returns the elements that differ', () => {
    expect( difference([1, 4], [5, 4])).to.eql([1])
  })

})