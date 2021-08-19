const fs = require('fs')

console.log(global); //브라우저에서는 window가 global 객체이지만 노드는 global 이 global 객체이다

global.hello = () => {
    console.log('hello');
    gobal.console.log('hello');  // 이 두개는 같은 것이다 
}

global.hello()
hello()       // 이 두개는 같은 것이다 