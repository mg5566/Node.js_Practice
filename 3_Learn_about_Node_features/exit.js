let i = 1;
setInterval(() => {
	if (i === 5) {
		console.log(`exit!`);
		process.exit();  // default exit(0), if occur error input exit(1)
	}
	console.log(`${i}`);
	i += 1;
}, 1000);
