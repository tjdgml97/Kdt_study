// @ts-check
const express = require('express');
// node js 내장된 기본모듈 or 설치된 패키지(모듈) 가져옴 ( 파일명이 아닐경우 )
const cors = require('cors');

const PORT = 4000;

const app = express();

app.use(cors());
app.use('/', (req, res) => {
  const str = 'hello , 안녕하세요 여기는 백엔드 입니다..';
  // json 형식으로 바꿈
  const json = JSON.stringify(str);
  res.send(str);
});
// 이 주소로 오면 , 다음을 실행하겠다

app.listen(PORT, () => {
  console.log(`데이터 통신 서버가 ${PORT}번에서 실행중`);
});
