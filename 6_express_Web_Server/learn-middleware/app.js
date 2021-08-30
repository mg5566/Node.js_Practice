const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

/*
** middle-ware
*/
app.use((req, res, next) => {
	console.log('모든 요청에 대해 실행됩니다.');
	next();
});

app.get('/', (req, res, next) => {
	console.log('GET / 요청에만 실행됩니다.');
	next();
}, (req, res) => {
	throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
});

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
	console.log(app.get('port'), "번 포트 대기 중");
});
