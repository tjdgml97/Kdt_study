// @ts-check

const express = require('express');

const app = express();

const PORT = 12345;
// 선언한 메소드 요청만 받음
// 주소가 동일하더라도 다른방법 x
app.get('/', (req, res) => {
  res.send('GET메소드');
});

app.post('/', (req, res) => {
  res.send('post메소드');
});

app.put('/', (req, res) => {
  res.send('PUT메소드');
});

app.delete('/', (req, res) => {
  res.send('delete메소드');
});

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번에서 실행 중입니다!`);
});
