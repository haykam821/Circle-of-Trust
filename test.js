// These tests assume the Circle of Trust event is still running...
const assert = require("chai").assert;
const circle = require("./index.js");

const circleToTake = "MiamiZ";
const promise = circle(circleToTake);

describe("the function", () => {
    it("should return a promise", () => {
        assert.typeOf(promise, "promise");
    });
});
describe("the function's result", async () => {
    const circler = await circle(circleToTake);

    it("should be an object", () => {
        assert.typeOf(circler, "object");
    })
    it("should have the 8 properties", () => {
        assert.hasAllKeys(circler, [
            name,
            link,
            id,
            owner,
            betrayed,
            score,
            key,
            members,
        ]);
    });
});