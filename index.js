const request = require("request-promise-native");

class Circle {
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

        resolve(new Circle(data));
    });
};