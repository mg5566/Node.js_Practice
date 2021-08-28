const http = require(`http`);

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	res.write('<h1>Hello Node!</h1>');
	res.end('<p>Hello Server</p>');
});
server.listen(8080);  // listening 이벤트 리스너

server.on(`listening`, () => {
	console.log(`8080 port server is running`);
});
server.on(`error`, (err) => {
	console.error(err);
})
