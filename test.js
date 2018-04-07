// These tests assume the Circle of Trust event is still running...
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

const circle = require("./index.js");

const circleToTake = "MiamiZ";
const promise = circle(circleToTake);

describe("the function", () => {
	it("should return a promise", () => {
		assert.typeOf(promise, "promise");
	});
});
describe("the function's resolved result", () => {
	const circler = circle(circleToTake);

	it("should be an object", () => {
		assert.eventually.typeOf(circler, "object");
	});
	it("should have the 8 properties", () => {
		assert.eventually.hasAllKeys(circler, [
			"name",
			"link",
			"id",
			"owner",
			"betrayed",
			"score",
			"key",
			"members",
		]);
	});
});