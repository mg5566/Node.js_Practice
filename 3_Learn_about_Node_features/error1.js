setInterval(() => {
	console.log(`시작`);
	try {  // try/catch 때문에 고장 절대안남...
		throw new Error(`서버를 고장내자!`);
	} catch (err) {
		console.error(err);
	}
}, 500);
