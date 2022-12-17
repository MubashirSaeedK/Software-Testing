// node 12 and up
//import chai from "chai"
//import sum from "../sum.js"
// below for node 10
import chai from "chai"
import add from "../src/add.js"
const expect = chai.expect


describe("Sum", () => {

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
})