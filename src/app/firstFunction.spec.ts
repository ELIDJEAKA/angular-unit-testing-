import {addition} from "./firstFunction"
describe("Test Addition",()=>{
    it("testing addition function",()=>{
        expect(addition(10,20)).toBe(30)
    })
})