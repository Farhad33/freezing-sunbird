
import compact from '../lib/compact'
import expect from 'expect.js'

describe('compact', () => {
  it ('It shall return a new array with all falsey values removed', () => {
    expect( compact([1,2,3,"",null,NaN,0])).to.eql([1,2,3])
  })
  it ('If array contains a string, returned array includes that string', () => {
    expect( compact([1,2,3,"",null,NaN,0,"chocolateMuffins"])).to.eql([1,2,3,"chocolateMuffins"])
  })
  it ('If input is a string, returned array with characters separated individually', () => {
    expect( compact('mom')).to.eql(['m','o','m'])
  })
  it ('If input is a number, return an empty array', () => {
    expect( compact(76)).to.eql([])
  })
  it ('If input is undefined, return an empty array', () => {
    expect( compact(undefined)).to.eql([])
  })

  it ('If input is null, return an empty array', () => {
    expect( compact(null)).to.eql([])
  })

 })
