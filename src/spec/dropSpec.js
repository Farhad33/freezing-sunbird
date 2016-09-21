import drop from '../lib/drop'
import expect from 'expect.js'

describe('drop', () => {
  it ('It should drop the first element and return the rest', () => {
    expect( drop([1, 2, 3])).to.eql([2, 3])
  })
  it ('It should drop the first two elements and return the rest', () => {
    expect( drop([1, 2, 3], 2)).to.eql([3])
  })

  it ('It should return an empty array', () => {
    expect( drop([1, 2, 3], 6)).to.eql([])
  })

  it ('It should return the original array', () => {
    expect( drop([1, 2, 3], 0)).to.eql([1, 2, 3])
  })
  it ('It should return the original array if there\'s a string as a parameter', () => {
    expect( drop([1, 2, 3], 'mom')).to.eql([1, 2, 3])
  })
})
