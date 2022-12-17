import chai from "chai"
import isEmpty from "../src/isEmpty.js"
const expect = chai.expect

describe("isEmpty.js Tests", () => {
    
    it('should return true if null is given as an input', () => {
        expect(isEmpty(null)).to.be.true
    })

    it('should return true if empty string is given as an input', () => {
        expect(isEmpty('')).to.be.true
    })

    it('should return false if input sting has been provided', () => {
        expect(isEmpty('test-case')).to.be.false
    })

    it('should return false if an array is given as an input', () => {
        expect(isEmpty([1, 2, 3])).to.be.false
    })

    it('should return true if an empty array is given as an input', () => {
        expect(isEmpty([])).to.be.true
    })

    it('should return true if an boolean is given as an input', () => {
        expect(isEmpty(true)).to.be.true
    })

    it('should return true if an empty object is given as an input', () => {
        expect(isEmpty({})).to.be.true
    })

    it('should return false if an object is given as an input', () => {
        expect(isEmpty({ 'a': 1 })).to.be.false
    })

    it('should return true if an empty map is given as an input', () => {
        const map = new Map();
        expect(isEmpty(map)).to.be.true
    })

    it('should return true if an empty prototype is given as an input', () => {
        function Test() {}
        const test = new Test();
        expect(isEmpty(test.__proto__)).to.be.true
    })

    it('should return true if a typed array is given as an input', () => {
        expect(isEmpty(new Uint8Array([1]))).to.be.false
    })

})