
import flow from '../lib/flow'
import expect from 'expect.js'

describe('Flow', () => {
  it ('It should pass the return value of the first function into the second', () => {
    const add = (val1, val2) => {
      return val1 + val2
    }
    
    const triple = (value) => {
      return value * value * value
    }

    var addTriple = flow([add, triple])

    expect(addTriple(1, 2)).to.eql(27)
  })

})
