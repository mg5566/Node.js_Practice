const A = require(`./globalA`);

global.message = `안녕하세요.`;  // A 가 return 할 global.message 를 세팅
console.log(A());
