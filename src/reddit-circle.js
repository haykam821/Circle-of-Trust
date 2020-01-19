class RedditCircle {
	constructor(data) {
		this.name = data.title;
		this.link = data.url;
		this.id = data.id;
		this.owner = data.author;
		this.betrayed = data.is_betrayed;
		this.score = data.score;
		this.key = data.vote_key;
		this.members = data.score;
		this.websocket = data.circlepost_websocket_url;
		this.creation_date = new Date(data.created * 1000);
	}
}
module.exports = RedditCircle;