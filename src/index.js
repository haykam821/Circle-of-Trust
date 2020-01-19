const request = require("request-promise-native");
const RedditCircle = require("./reddit-circle.js");

async function fetchCircle(ownerUsername) {
	const body = await request({
		method: "GET",
		url: `https://www.reddit.com/user/${ownerUsername}/circle.json`,
	});
	const parsed = JSON.parse(body);
	const data = parsed[0].data.children[0].data;

	return new RedditCircle(data);
}
module.exports = fetchCircle;