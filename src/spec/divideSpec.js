import divide from '../lib/divide'
import expect from 'expect.js'

describe('divide', () => {
  it ('It should divide the first number by the second and return the quotient', () => {
    expect( divide(4,2)).to.eql(2)
  })
  it ('It should return a decimal quotient when necessary', () => {
    expect( divide(5,2)).to.eql(2.5)
  })
  it ('It should return 1 if there is no input', () => {
    expect( divide()).to.eql(1)
  })
  it ('If only one number is given, it should return that number', () => {
    expect( divide(6)).to.eql(6)
  })
  it ('If a string is given, it should return the string', () => {
    expect( divide('muffins').to.eql('muffins')
  })


})
