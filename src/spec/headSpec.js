
import head from '../lib/head'
import expect from 'expect.js'

describe('Head', () => {
  it ('It should return the first element', () => {
    expect( head([1, 2, 3])).to.eql(1)
  })

  it ('It should return undefined if array is empty', () => {
    expect( head([])).to.eql(undefined)
  })

  it ('It should return the first letter of the string', () => {
    expect( head('majid')).to.eql('m')
  })

  it ('It should return undefined if input is an integer', () => {
    expect( head(12)).to.eql(undefined)
  })

  it ('It should return undefined if there is no input',() => { 
    expect ( head()).to.eql(undefined)
  })

})