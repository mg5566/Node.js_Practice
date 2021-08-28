const http = require(`http`);

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	res.write('<h1>Hello Node!</h1>');
	res.end('<p>Hello Server1</p>');
})
	.listen(8080, () => {
		console.log(`8080 port server is running`);
	});

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	res.write('<h1>Hello Node!</h1>');
	res.end('<p>Hello Server2</p>');
})
	.listen(8081, () => {
		console.log(`8081 port server is running`);
	});
