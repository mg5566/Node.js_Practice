setImmediate(() => {
	console.log(`Immediate`);
});

process.nextTick(() => {  // microtask
	console.log(`nextTick`);
});

setTimeout(() => {
	console.log(`timeout`);
}, 0);

// microtask
Promise.resolve().then(() => console.log(`promise`));  // Promise 객체를 바로 resolve 시키고, then 에서 log 를 찍는다.


// nextTick
// promise
// timeout
// Immediate
