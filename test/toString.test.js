import chai from "chai"
import toString from "../src/toString.js"
const expect = chai.expect

describe("toString.js Tests", () => {

    it("should return string if string is given as an input", () =>{
        expect(toString("Test-case")).to.equal("Test-case")
    });

    it("should return the corresponding boolean if boolean is given as an input", () =>{
        expect(toString(true)).to.equal("true")
    });

    it("should return the corresponding boolean if boolean is given as an input", () =>{
        expect(toString(false)).to.equal("false")
    });

    it("should return the a string if Array is given as an input", () =>{
        expect(toString([2,3,4])).to.equal("2,3,4")
    });

    it("should return the a string if Symbol(1) is given as an input", () =>{
        expect(toString(Symbol(1))).to.equal("Symbol(1)")
    });

    it("should return string if -0 is given as an input", () =>{
        expect(toString(-0)).to.equal("-0")
    });

    it("should return string if mixed array is given as an input", () =>{
        expect(toString([null, 'test-case', { a: 9 }])).to.equal(',test-case,[object Object]')
    });

})