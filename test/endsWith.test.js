import chai from "chai"
import endsWith from "../src/endsWith.js"
const expect = chai.expect

describe("endsWith.js Tests", () => {

    it("should return true when last argument ", () =>{
        expect(endsWith("test1","1")).to.be.true
    });

    it('should return false when middle of the sting is given as second argument', () => {
        expect(endsWith('test1','est')).to.be.false
    })

    it('should return true when both inputs are equal', () => {
        expect(endsWith("test1","test1")).to.be.true
    })

    it('should return true when both inputs are empty strings', () => {
        expect(endsWith("","")).to.be.true
    })

    it('should return false when the length of second argument is greater than first argument', () => {
        expect(endsWith('tes', 'test1')).to.be.false
    })

    it('should return true when the position argument is greater than the length of the string', () => {
        expect(endsWith('test1', 't1', 10)).to.be.true
    })

    it('should return false when the negative position argument is given as an input', () => {
        expect(endsWith('hello', 'h', -5)).to.be.false
      })


})