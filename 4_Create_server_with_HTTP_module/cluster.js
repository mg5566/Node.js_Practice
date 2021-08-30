const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	console.log(`master process ID: ${process.pid}`);
	for (let i = 0; i < numCPUs; ++i) {
		cluster.fork();
	}
	cluster.on('exit', (worker, code, signal) => {
		console.log(`${worker.process.pid} worker is done`);
		console.log('code', code, 'signal', signal);
		cluster.fork();
	});
} else {
	http.createServer((req, res) => {
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
		res.write('<h1>Hello Node!</h1>');
		res.end('<p>Hello Cluster!</p>');
		setTimeout(() => {
			process.exit(1);
		}, 1000);
	}).listen(8086);

	console.log(`${process.pid} worker is running`);
}
