//const fs = require('fs');

/*fs.readFile('hello.txt', () => console.log('this is readFile 1'));
new Promise(resolve => resolve('Hi')).then(() => console.log("this is Promise.resolve 1"));
process.nextTick(() => console.log("this is process.nextTick 1"));*/

console.log("************************************************************");

/*fs.readFile('hello.txt', () => console.log('this is readFile 1'));
setTimeout(() => console.log("this is setTimeout 1"), 0);*/

console.log("*********************question2***************************************");

/*console.log('start');
setTimeout(() => console.log('timeout 1'), 0);
setTimeout(() => {
    process.nextTick(() => console.log('nextTick 3'));
console.log('timeout 2')

}, 0);
setTimeout(() => console.log('timeout 3'), 0);
new Promise((resolve, reject) => resolve('Hello')).then(() => 
console.log('Promise...1'));
new Promise((resolve, reject) => resolve('Hello')).then(() => 
console.log('Promise...2'));
process.nextTick(() => console.log('nextTick 1'));
process.nextTick(() => console.log('nextTick 2'));
console.log('end');*/


/*fs.readFile('hello.txt', () => {
console.log('readFile....');
});
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('Immediate'));*/
/*const result = (function(exports, module){
    exports = module.exports;
    exports.firstname = 'John';
    module.exports.lastname = 'Smith';
    exports = {
    getFullName: function(){
    console.log('John Smith')
    }
    }
    return module.exports;
    }).apply(null, [null, {exports: {}}]);
    console.log(result);*/

    
/*fs.readFile('hello.txt', () => {
console.log("this is readFile 1");
setImmediate(() => console.log("this is setImmediate 1"));
process.nextTick(() =>
console.log("this is inner process.nextTick inside readFile")
);
Promise.resolve().then(() =>
console.log("this is inner Promise.resolve inside readFile")
);
});
process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
for (let i = 0; i < 2000000000; i++) {}*/


    






