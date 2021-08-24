// WHARWG 방식이 아닌 기존 node 의 url 을 사용할때,
const url = require(`url`);
const querystring = require(`querystring`);

const paresedUrl = url.parse(`http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=jacascript`);

const query = querystring.parse(paresedUrl.query);
console.log(`querystring.parse():`, query);
console.log(`querystring.stringify():`, querystring.stringify(query));
