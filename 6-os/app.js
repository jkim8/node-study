// const os = require('os');

// console.log(os.EOL==='\n');
// console.log(os.EOL==='\r\n');

// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.cpus());
// console.log(os.homedir());

const process = require('process'); //현재 동작하고 있는 노드 프로세서의 정보를 얻어 올 수 있다.

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.env);


setTimeout(()=> {
    console.log('setTimeOut');
}, 0)
process.nextTick(()=> {   // 노드가 다끝나고 하지만 제일 먼저 실행 
    console.log('nextTick');
})

for(let i = 0; i < 1000; i ++){
    console.log('for loop');
}