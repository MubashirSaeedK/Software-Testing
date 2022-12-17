// node 12 and up
//import chai from "chai"
//import sum from "../sum.js"
// below for node 10
import chai from "chai"
import add from "../src/add.js"
const expect = chai.expect


describe("add.js Tests", () => {

    it("should return the correct sum when adding two integers", () =>{
        expect(add(5,5)).to.equal(10)
    });

    it("should return the correct sum when adding two floats", () =>{
        expect(add(3.2,4.1)).to.equal(7.3)
    });

    it("should return the correct sum when adding integer with float", () =>{
        expect(add(5,4.2)).to.equal(9.2)
    });

    it("should return the correct sum when adding float with integer", () =>{
        expect(add(3.2,4)).to.equal(7.2)
    });

    it("should return the correct sum when adding posive integer with negative integer", () =>{
        expect(add(3,-2)).to.equal(1)
    });

    it("should return the correct sum when adding negative integer with negative integer", () =>{
        expect(add(-5,-3)).to.equal(-8)
    });

    it("should return the correct sum when adding integer with negative float", () =>{
        expect(add(6,-2.2)).to.equal(3.8)
    });

    it("should return the correct sum when adding negative float with negative float", () =>{
        expect(add(-5.5,-5.6)).to.equal(-11.1)
    });

    it("should return NaN when adding integer and NaN", () =>{
        expect(add(1,NaN)).to.be.NaN
    });

    it("should return a value when adding integer and undefined", () =>{
        expect(add(5,undefined)).to.equal(5)
    });

    it("should return infinity when adding infinity and integer", () =>{
        expect(add(Infinity,5)).to.equal(Infinity)
    });

    it("should return a value when adding null and integer", () =>{
        expect(add(null,5)).to.equal(5)
    });

    it("should return NaN when adding positive and negative Infinity", () =>{
        expect(add(Infinity,-Infinity)).to.be.NaN
    });

    it("should return NaN when adding undefined and NaN", () =>{
        expect(add(undefined, NaN)).to.be.NaN
    });

    it("should return NaN when adding NaN and Array", () =>{
        expect(add(new Array(),NaN)).to.be.NaN
    });
    
    
})