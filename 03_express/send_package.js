// @ts-check
const express = require('express');
const fs = require('fs').promises;

const server = express();

const PORT = 5555;

// `/: 요청주소 , 요청, 응답, 다음 미들웨어를 호출해주는역할
// http://localhost:4000/api
server.use('/', async (req, res, next) => {
  console.log('미들웨어 1번');
  req.reqTime = new Date();
  req.fileContent = await fs.readFile('../package.json', 'utf-8');
  next();
});

server.use((req, res, next) => {
  console.log('미들웨어 2번');
  console.log(`데이터 요청 시간은 ${req.reqTime}입니다`);
  console.log(`package.json 파일의 내용은 \n ${req.fileContent}`);
  res.send(req.fileContent);
});

server.use((req, res, next) => {
  console.log('미들웨어 3');
});

server.listen(PORT, () => {
  console.log(`익스프레스 서버는 ${PORT}번 포트에서 작동중 !`);
});
