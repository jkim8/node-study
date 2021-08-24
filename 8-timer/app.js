// let num = 1

// const interval = setInterval(()=> {
//     console.log(num++);
// }, 1000)

// setTimeout(()=> {
//     console.log('Timeout!');
//     clearInterval(interval)
// }, 6000)

console.log('code1');
console.time('timeout 0')
setTimeout(()=> {
    console.timeEnd('timeout 0')
    console.log('setTimeout 0');
}, 0)

// console.log('code 2');
// setImmediate(()=> {
//     console.log('setImmediate');
// })

// console.log('code 3');
// process.nextTick(()=> {
//     console.log('process.nextTick');
// })
