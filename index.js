const request = require("request-promise-native");

module.exports = ownerUsername => {
    return new Promise(async resolve => {
        const body = await request({
            method: "GET",
            url: `https://www.reddit.com/user/${ownerUsername}/circle.json`,
        });
        const parsed = JSON.parse(body);
        const data = parsed[0].data.children[0].data;
        console.log(data)

        resolve({
            name: data.title,
            link: data.url,
            id: data.id,
            owner: data.author,
            betrayed: data.is_betrayed,
            score: data.score,
            key: data.vote_key,
        });
    });
};