// @ts-check

const fs = require('fs');
// (파일위치)
fs.readFile('test.txt', 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

const str = '파일쓰기테스트';
// 파일 , 매개변수 전달, 포맷 ,
fs.writeFile('test1.txt', str, 'utf-8', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('파일쓰기 완료');
  }
});
