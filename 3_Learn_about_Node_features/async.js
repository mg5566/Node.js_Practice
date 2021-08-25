const fs = require(`fs`);

console.log(`start`);
// readFile 은 비동기 방식으로 동작하는 method 입니다.
fs.readFile(`./readme2.txt`, (err, data) => {
	if (err) {
		throw err;
	}
	console.log(`1st`, data.toString());
});
fs.readFile(`./readme2.txt`, (err, data) => {
	if (err) {
		throw err;
	}
	console.log(`2nd`, data.toString());
});
fs.readFile(`./readme2.txt`, (err, data) => {
	if (err) {
		throw err;
	}
	console.log(`3th`, data.toString());
});

console.log(`end`);


// start
// end
// 1st  순서가 다를 수 있음
// 3th
// 2nd
