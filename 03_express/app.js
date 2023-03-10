// @ts-check
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

const mainRouter = require('./routes/index');
const userRouter = require('./routes/users');
const postRouter = require('./routes/post');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// localhost:4000
app.use('/', mainRouter);
// localhost:4000/users
app.use('/users', userRouter);
app.use('/post', postRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express world!');
});

// use-> get post 등 다 받을 수 있음
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message);
  res.send(err.message + `<br/><sa href="/'>홈으로</a>`);
});

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버 실행`);
});
