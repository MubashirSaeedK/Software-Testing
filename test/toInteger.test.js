import chai from "chai"
import toInteger from "../src/toInteger.js"
const expect = chai.expect

describe("toInteger.js Tests", () => {

    it("should return integer if integer is given as an input", () =>{
        expect(toInteger(5)).to.equal(5)
    });

    it("should return 1 if boolean true is given as an input", () =>{
        expect(toInteger(true)).to.equal(1)
    });

    it("Should return 0 if Null is given as an input", () =>{
        expect(toInteger(null)).to.equal(0)
    });
    
    it("should return integer if float is given as an input", () =>{
        expect(toInteger(20.2)).to.equal(20)
    });
    
    it("should return integer if string is given as an input", () =>{
        expect(toInteger("20.2")).to.equal(20)
    });

})