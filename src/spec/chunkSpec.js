import chunk from '../lib/chunk.js'
import expect from 'expect.js'

describe('chunk', () => {
  it('Divides input array based on size 2 returns an array of arrays', () => {
    expect( chunk([1,2,4,5,6], 2)).to.eql([[1,2],[4,5],[6]])
  })

  it('Divides input array based on size 3 returns an array of arrays', () => {
    expect( chunk([1,2,4,5,6,7,8,9], 3)).to.eql([[1,2,4],[5,6,7],[8,9]])
  })

  it('Divides input array based on size 1 returns an array of arrays', () => {
    expect( chunk([1,2,3])).to.eql([[1], [2], [3]])
  })

  it('Divides input array based on size 6 returns an array', () => {
    expect( chunk([1,2,3], 6)).to.eql([[1,2,3]])
  })

  it('Divides input array based on array 2 and returns an array of arrays', () => {
    expect( chunk([1,2,3], [2])).to.eql([[1, 2], [3]])
  })

  it('Divides input array based on string 1 and returns an array of arrays', () => {
    expect( chunk([1,2,3], '1')).to.eql([[1], [2], [3]])
  })
})
