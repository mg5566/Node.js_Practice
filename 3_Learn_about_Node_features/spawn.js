const spawn = require(`child_process`).spawn;

const process = spawn(`python`, [`test.py`]);  // 첫번째 인자는 명령어, 두번째 인자는 옵션, 세번째 인자로 { shell: true } 를 추가하면 exec 처럼 쉘에서 동작시킬 수 있음.

process.stdout.on(`data`, function(data) {
	console.log(data.toString());
});

process.stderr.on(`data`, function(data) {
	console.error(data.toString());
});
