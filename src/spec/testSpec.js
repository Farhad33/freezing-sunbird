
import test from '../lib/test'
import expect from 'expect.js'

describe('test', () => {
  it ('This is only for test', () => {
    expect( test()).to.eql('Isis')
  })
})