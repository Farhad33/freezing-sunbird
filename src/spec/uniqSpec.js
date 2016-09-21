import uniq from '../lib/uniq'
import expect from 'expect.js'

describe('Uniq', () => {
  it ('It should return an array without duplicate elements', () => {
    expect( uniq([2, 1, 2])).to.eql([2, 1])
  })

  it ('It should remove multiple duplicates within the array', () => {
    expect( uniq([2, 1, 2, 3, 4, 4])).to.eql([2, 1, 3, 4])
  })

  it ('It should eliminate the duplicates, but be case sensitive', () => {
    expect( uniq(['a', 'a', 'A'])).to.eql(['a', 'A'])
  })

})
