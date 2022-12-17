import chai from "chai"
import divide from "../src/divide.js"
const expect = chai.expect


describe("divide.js Tests", () => {

    it("should return the correct answer when dividing integer by integer", () =>{
        expect(divide(5,5)).to.equal(1)
    });

    it("should return NaN when dividing int by 0", () =>{
        expect(divide(4,0)).to.be.NaN
    });
    
    it("should return 1 when dividing Infinity with integer", () =>{
        expect(divide(Infinity,4)).to.equal(1)
    });

    it('should return 1 when no input arguments are given', () => {
        expect(divide()).to.equal(1)
      })

    it("should return 1 when dividing float with integer", () =>{
        expect(divide(3.2,2)).to.equal(1)
    });

    it('should return the value of the only argument when called with one argument', () => {
        expect(divide(10)).to.equal(10)
      })

    it('should return 1 when mixture of string and integer arguments are passed as an input', () => {
        expect(divide(10, '2')).to.equal(1)
    })

    it('should return 1 when string arguments are passed as an input', () => {
        expect(divide('10', '2')).to.equal(1)
    })

    it('should return 1 when both of the input argument are negative', () => {
        expect(divide(-10, -2)).to.equal(1)
      })
    
    it('should return 1 when one of the input argument is negative', () => {
        expect(divide(-10, 2)).to.equal(1)
      })
    
})