/**
 * A circle.
 */
class RedditCircle {
	constructor(data) {
		/**
		 * The name of the circle.
		 * @type {string}
		 */
		this.name = data.title;

		/**
		 * A permalink to the circle.
		 * @type {string}
		 */
		this.link = data.url;

		/**
		 * The circle's identifier.
		 * @type {string}
		 */
		this.id = data.id;

		/**
		 * The circle's owner.
		 * @type {string}
		 */
		this.owner = data.author;

		/**
		 * Whether the circle has been betrayed already.
		 * @type {boolean}
		 */
		this.betrayed = data.is_betrayed;

		/**
		 * The circle's score.
		 * @type {number}
		 */
		this.score = data.score;

		/**
		 * The key to the circle.
		 * @type {string?}
		 */
		this.key = data.vote_key;

		/**
		 * The number of members in the circle.
		 * @type {number}
		 */
		this.members = data.score;

		/**
		 * The websocket URL for subscribing to the circle's updates.
		 * @type {string}
		 */
		this.websocket = data.circlepost_websocket_url;

		/**
		 * The creation date of the circle.
		 * @type {date}
		 */
		/* eslint-disable-next-line camelcase */
		this.creation_date = new Date(data.created * 1000);
	}
}
module.exports = RedditCircle;