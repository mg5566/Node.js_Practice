// circular dependency 순환 참조....
const dep1 = require(`./dep1`);
const dep2 = require(`./dep2`);

dep1();
dep2();
