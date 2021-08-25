const fs = require('fs');


//3
// rename(...., callback(error, data))
//try { renameSync(...) } cstch(e) {}    -> 사용 권장하지 않음
//promise.rename().then().catch(0)


//동기 처리 하는 것임
try {
    fs.renameSync('./text.txt', './text-new.txt')
}
catch(error) {
    console.error(error);
}

//비동기 처리로 콜백으로 에러를 전달
fs.rename('./text-new.txt', './text.txt', (error) => {
    console.error(error);
})

console.log('hello');

//프로미스 사용
fs.promises.rename('./text2.txt', 'text-new.txt')
.then(()=> console.log('Done!'))
.catch(console.error)