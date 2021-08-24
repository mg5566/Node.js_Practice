const { URL } = require(`url`);

const myURL = new URL(`http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor`);

console.log(`searchParams:`, myURL.searchParams);
const sp = myURL.searchParams;
console.log(`searchParams.getAll():`, myURL.searchParams.getAll(`category`));
console.log(`searchParams.get():`, sp.get(`limit`));
console.log(`searchParams.has():`, sp.has(`page`));

console.log(`searchParams.keys():`, sp.keys());
console.log(`searchParams.values():`, sp.values());

myURL.searchParams.append(`filter`, `es3`);
myURL.searchParams.append(`filter`, `es5`);
// sp 랑 myURL.searchParams 랑 같을까??? 정답은 같다.... 이거 신기하네... cpp 의 reference 처럼 동작하고 있습니다.
console.log(`sp.getAll():`, sp.getAll(`filter`));
console.log(`myUrl.searchParams.getAll():`, myURL.searchParams.getAll(`filter`));

myURL.searchParams.set(`filter`, `es6`);
console.log(myURL.searchParams.getAll(`filter`));

myURL.searchParams.delete(`filter`);
console.log(myURL.searchParams.getAll(`filter`));

console.log(`searchParams.toString():`, myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
console.log(myURL.search);
