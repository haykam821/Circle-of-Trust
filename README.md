# Circle of Trust [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/haykam821/Circle-of-Trust/Test?style=popout)](https://github.com/haykam821/Circle-of-Trust/actions/workflows/test.yml)

**All circle functionality and endpoints have been removed from the Reddit website, so unfortunately this library will no longer work.**

Get info about a user's circle.

## Documentation

This package exports a function for getting a circle from a Reddit username (using ES6 Promises), like so:

```javascript
const circleOfTrust = require("circle-of-trust");
circleOfTrust("haykam821")
    .then(console.log) // Circle information (see below)
    .catch(console.error); // Failed to get circle info (e.g. no such user or circle)
```

The promise resolves with a `RedditCircle` class containing information about the circle:

Property | Type | Description
--- | --- | ---
`circle.name` | String | The name given to the circle.
`circle.link` | String | A permalink to the circle.
`circle.id` | String | The circle's identifier.
`circle.owner` | String | The owner, good chance it'll be the person you specified.
`circle.betrayed` | Boolean | Whether the circle has been betrayed or not.
`circle.score`, `circle.members` | Number | The score of the circle.
`circle.key` | Null | If key already used, that key as a String. Otherwise, Null.
`circle.websocket` | String | The websocket URL for retrieving live circle updates.
`circle.creation_date` | Date | The circle's date of creation.
