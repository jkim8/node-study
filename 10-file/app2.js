const fs = require('fs').promises;


//reading a file

fs.readFile('./text.txt', 'utf-8') 
.then(data => console.log(data))
.catch(console.error)


//writing a file 
fs.writeFile('./text.txt', 'Hello junho !!')
.catch(console.error)

fs.appendFile('./text.txt', 'Yo junho !!')
.then(()=> {
    //copy
    fs.copyFile('./file.txt', './file2.txt')
    .catch(console.error)
})
.catch(console.error)


//folder 
fs.mkdir('sub-folder')
.catch(console.error)


fs.readdir('./')
.then(console.log)
.catch(console.error)

