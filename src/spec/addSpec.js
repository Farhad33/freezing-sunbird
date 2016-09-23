
import add from '../lib/add'
import expect from 'expect.js'

describe('add', () => {

	it ('It should return the sum of two numbers', () => {
		expect(add(1, 2)).to.eql(3)
	})

	it ('It should add two decimal numbers and return a decimal sum', () => {
		expect(add(1.1, 2.1)).to.eql(3.2)
	})

	it ('It should return the sum of two numbers', () => {
		expect(add(5, 9)).to.eql(14)
	})

})
