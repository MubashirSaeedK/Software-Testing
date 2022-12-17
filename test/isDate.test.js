import chai from "chai"
import isDate from "../src/isDate.js"
const expect = chai.expect

describe("isDate.js Tests", () => {

    it("should return true if Date() is given as an input", () =>{
        expect(isDate(new Date())).to.be.true
    });

    it("should return fase if integer is given as an input", () =>{
        expect(isDate(5)).to.be.false
    });

    it("should return fase if invalid string is given as an input", () =>{
        expect(isDate("Test-case")).to.be.false
    });

    it("should return fase if invalid array is given as an input", () =>{
        expect(isDate([1,2,3])).to.be.false
    });

    it("should return fase if empty object is given as an input", () =>{
        expect(isDate({})).to.be.false
    });

    it("should return false if date inside object is given as an input", () =>{
        expect(isDate({date: new Date()})).to.be.false
    });

})