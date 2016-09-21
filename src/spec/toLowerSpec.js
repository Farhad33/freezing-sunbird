
import toLower from '../lib/toLower'
import expect from 'expect.js'

describe('toLower', () => {
  it ('Converts string into lowercase letters and leaves existing lowercase letters', () => {
    expect( toLower('sTrINg')).to.eql('string')
  })

  it ('Converts string, as a whole, to lowercase', () => {
    expect( toLower('STRING')).to.eql('string')
  })

  it ('Leaves lowercase letters as is', () => {
    expect( toLower('string')).to.eql('string')
  })

  it ('Leaves characters that are not letters alone', () => {
    expect( toLower('$Tr!NG')).to.eql('$tr!ng')
  })

})
