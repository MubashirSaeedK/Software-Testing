import chai from "chai"
import eq from "../src/eq.js"
const expect = chai.expect

describe("divide.js Tests", () => {

    it("should return true when comapring integer with integer", () =>{
        expect(eq(5,5)).to.be.true
    });

    it('should return true when comparing string with string', () => {
        expect(eq('hello', 'hello')).to.be.true
    })

    it("should return false when comapring integer with float", () =>{
        expect(eq(2.1,2)).to.be.false
    });

    it('should return true when comparing same boolean with boolean', () => {
        expect(eq(true, true)).to.be.true
    })

    it('should return true when comparing two unequal booleans', () => {
        expect(eq(true, false)).to.be.false
    })

    it('should return true when comparing infinity with infinity', () => {
        expect(eq(Infinity, Infinity)).to.be.true
    })

    it('should return false when comparing unequal integers', () => {
        expect(eq(5,10)).to.be.false
    })

    it('should return false when comparing two unequal objects', () => {
        const object_1 = { a: 1 }
        const object_2 = { b: 2 }
        expect(eq(object_1, object_2)).to.be.false
    })

    it('should return true when comparing NaN with NaN', () => {
        expect(eq(NaN, NaN)).to.be.true
    })

    it('should return false when comparing a number to NaN', () => {
        expect(eq(10, NaN)).to.be.false
    })

})