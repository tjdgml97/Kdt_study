// @ts-check
const express = require('express');

const server = express();

const PORT = 4000;

// `/: 요청주소 , 요청, 응답, 다음 미들웨어를 호출해주는역할
// http://localhost:4000/api
server.use('/', (req, res, next) => {
  console.log('미들웨어 1');
  req.reqTime = new Date();
  next();
});

server.use((req, res, next) => {
  console.log('미들웨어 2');
  res.send(`요청시간은 ${req.reqTime}입니다!`);
  res.send('응답!');
  next();
  console.log('next 아래에 있는 콘솔 로그');
});

server.use((req, res, next) => {
  console.log('미들웨어 3');
});

server.listen(PORT, () => {
  console.log(`익스프레스 서버는 ${PORT}번 포트에서 작동중 !`);
});
