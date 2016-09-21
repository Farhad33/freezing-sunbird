
import toUpper from '../lib/toUpper'
import expect from 'expect.js'

describe('toUpper', () => {
  it ('Converts string into uppercase letters and leaves existing uppercase letters', () => {
    expect( toUpper('sTrINg')).to.eql('STRING')
  })

  it ('Converts string, as a whole, to Upper case', () => {
    expect( toUpper('string')).to.eql('STRING')
  })

  it ('Leaves uppercase letters as is', () => {
    expect( toUpper('STRING')).to.eql('STRING')
  })

  it ('Leaves characters that are not letters alone', () => {
    expect( toUpper('$Tr!NG')).to.eql('$TR!NG')
  })

})
