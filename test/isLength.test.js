import chai from "chai"
import isLength from "../src/isLength.js"
const expect = chai.expect


describe("isLength.js Tests", () => {

    it('should return true when positive integer is given as an input argument', () => {
        expect(isLength(10)).to.be.true
      })

      it('should return false when negative integer is given as an input argument', () => {
        expect(isLength(-10)).to.be.false
      })

      it('should return false when Infinity is given as an input argument', () => {
        expect(isLength(Infinity)).to.be.false
      })

      it('should return false when string is given as an input argument', () => {
        expect(isLength("string")).to.be.false
      })

      it('should return false when NaN is given as an input argument', () => {
        expect(isLength(NaN)).to.be.false
      })
    
})