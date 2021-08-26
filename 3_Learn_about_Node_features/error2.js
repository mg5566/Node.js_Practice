const fs = require(`fs`);

setInterval(() => {
	fs.unlink(`aksdfjlsakd`, (err) => {  // 내장 모듈은 error 가 발생해도 메인 프로세스가 죽지 않는다.
		if (err) {
			console.error(err);
		}
	});
}, 500);
