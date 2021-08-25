const fs = require(`fs`);

console.log(`start`);

// readFileSync 는 동기 method 로 return 값을 사용합니다.
let data = fs.readFileSync(`./readme2.txt`);
console.log(`1st`, data.toString());
data = fs.readFileSync(`./readme2.txt`);
console.log(`2nd`, data.toString());
data = fs.readFileSync(`./readme2.txt`);
console.log(`3th`, data.toString());
console.log(`end`);
