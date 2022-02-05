# Express API Project🚅
This week's project is to start my backend journey by creating an API using Express. My API have a multiple of RESTful endpoints which return either an array of data, or a single item.

## The problem
Since I did not learn how to use databases yet, I had to use a hard-coded set of data, stored as a JSON file in the project. The API endpoints use the file along with array methods such as .find(), .filter(), and .slice() to select, filter, or limit the items returned in the responses.

## Tricky part: Example routes 🧭
RESTful routing took me a little time to get used to. I tried to think of what the 'Plural term' for my data is and used that as a starting point. For example, if I am building an API using the Spotify data in the repo, each item in the data is a track - or song. So a pluralized route for this would be `/songs`. The routes could then look like this:
`/songs` - Returns an array of songs
`/songs/5` - Returns a single song whose ID is '5'

## View it live💕
https://haruahn-project-express-api.herokuapp.com/
