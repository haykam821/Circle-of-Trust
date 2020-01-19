const request = require("request-promise-native");
const RedditCircle = require("./reddit-circle.js");

module.exports = ownerUsername => {
	return new Promise(async (resolve, reject) => {
		const body = await request({
			method: "GET",
			url: `https://www.reddit.com/user/${ownerUsername}/circle.json`,
		}).catch(error => {
			reject(error);
		});
		const parsed = JSON.parse(body);
		const data = parsed[0].data.children[0].data;

		resolve(new RedditCircle(data));
	});
};