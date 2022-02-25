/* eslint-env mocha */

// These tests assume the Circle of Trust event is still running...
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

const circle = require(".");

const circleToTake = "MiamiZ";
const promise = circle(circleToTake);

describe("the function", () => {
	it("should return a promise", () => {
		assert.typeOf(promise, "promise");
	});
});
describe("the function's resolved result", () => {
	const circler = circle(circleToTake);

	it("should be object-like", () => {
		return assert.eventually.isObject(circler);
	});
	it("should have only all the documented properties", () => {
		return assert.eventually.hasAllKeys(circler, [
			"name",
			"link",
			"id",
			"owner",
			"betrayed",
			"score",
			"members",
			"key",
			"websocket",
			"creation_date",
		]);
	});
});
