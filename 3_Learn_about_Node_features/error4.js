process.on(`uncaughtException`, (err) => {
	console.error(`예기치 못한 에러`, err);
});

// process 에 uncaughtException 이벤트를 등록했기때문에 catch 가 없어도 메인프로세스가 죽지않습니다.
setInterval(() => {
	throw new Error(`서버를 고장내자!`);
}, 500);

setTimeout(() => {
	console.log(`실행됩니다.`);
}, 2000);
