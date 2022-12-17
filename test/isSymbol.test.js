import chai from "chai"
import isSymbol from "../src/isSymbol.js"
const expect = chai.expect

describe("isSymbol.js Tests", () => {
    
    it("should return false if integer is given as an input", () =>{
        expect(isSymbol(5)).to.be.false
    });

    it("should return false if Infinity is given as an input", () =>{
        expect(isSymbol(Infinity)).to.be.false
    });

    it("Should return false if Null is given as an input", () =>{
        expect(isSymbol(null)).to.be.false
    });
    
    it("should return false if float is given as an input", () =>{
        expect(isSymbol(20.2)).to.be.false
    });
    
    it("should return false if string is given as an input", () =>{
        expect(isSymbol("test-case")).to.be.false
    });

})