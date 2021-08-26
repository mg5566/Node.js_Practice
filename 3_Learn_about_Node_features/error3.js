// promise 가 아니면 메인 프로세스가 종료된다.
// const fs = require(`fs`);
// promise 는 catch 가 없어도 프로세스가 종료되지 않는다.
const fs = require(`fs`).promises;


setInterval(() => {
	fs.unlink(`dsakfjl`);
	// fs.unlink(`dsakfjl`)
		// .catch(err => console.error(err));
}, 500);
