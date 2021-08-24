const path = require('path')

console.log(__dirname);
console.log(__filename);

console.log(path.sep);         // 경로 구분자
console.log(path.delimiter);   // 환경변수 구분자

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

//dirname  디렉토리 이름만 가져오기
console.log(path.dirname(__filename));

//extension 확장자만 가져오기
console.log(path.extname(__filename));

//parse 하나하나 분리하기  오브젝트 형태로 나온다
const parsed = path.parse(__filename)
console.log(parsed);

const str = path.format(parsed)
console.log(str);

//isAbsolute 
console.log('isAbsolute?', path.isAbsolute(__dirname));  //절대경로
console.log('isAbsolute?', path.isAbsolute('../'));      //상대경로


//nomalize
console.log(path.normalize('./folder//////sub'));   //이상한게 있으면 알아서 수정해주는 것


//join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));

