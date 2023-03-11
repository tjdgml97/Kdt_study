const express = require('express');

const router = express.Router();

const POSTS = [
  {
    title: 'lorem1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat excepturi nulla vel, at fugiat cumque perferendis inventore, ea, odio minus! Maxime odit vero, repellat a sed distinctio sapiente et.',
  },
  {
    title: 'lorem2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat excepturi nulla vel, at fugiat cumque perferendis inventore, ea, odio minus! Maxime odit vero, repellat a sed distinctio sapiente et.',
  },
];

router.get('/', (req, res) => {
  res.render('posts', { POSTS, postCounts: POSTS.length });
});

// localhost:4000/posts
router.post('/add', (req, res) => {
  if (Object.keys(req.body).length >= 1) {
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };

      POSTS.push(newPost);
      res.redirect('/posts');
    } else {
      const err = new Error('폼 데이터 입력을 확인 하세요');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('데이터가 입력 되지 않았습니다!');
    err.statusCode = 400;
    throw err;
  }
});

module.exports = router;
// const express = require('express');
// // 모듈로 빼줌
// const router = express.Router();

// const POST = [
//   {
//     title: '먹고싶은것',
//     content: '삼겹살',
//   },
// ];

// router.get('/', (req, res) => {
//   res.render('post', { POST, userCounts: POST.length });
// });

// // router.get('/id/:id', (req, res) => {
// //   const postData = POST.find((post) => post.id === req.params.id);
// //   if (postData) {
// //     res.send(postData);
// //   } else {
// //     const err = new Error('해당 ID를 가진 회원이 없습니다!');
// //     err.statusCode = 404;
// //     throw err;
// //     // res.send('ID를 못찾겠어요');
// //   }
// // });

// router.post('/add', (req, res) => {
//   if (Object.keys(req.query).length >= 1) {
//     if (req.query.title && req.query.content) {
//       const newPost = {
//         // id: req.query.id,
//         name: req.query.name,
//         email: req.query.email,
//       };
//       POST.push(newPost);

//       res.send('포스트 입력');
//     } else {
//       const err = new Error('쿼리 입력이 잘못되었습니다');
//       err.statusCode = 404;
//       throw err;
//     }
//   } else if (req.body) {
//     if (req.body.name && req.body.email) {
//       const newPost = {
//         title: req.body.name,
//         content: req.body.email,
//       };
//       USER.push(newUser);

//       res.redirect('/users');
//     } else {
//       const err = new Error('폼 태그 입력을 확인하세요');
//       err.statusCode = 404;
//       throw err;
//     }
//   } else {
//     const err = new Error('데이터가 입려되지 않았습니다');
//     err.statusCode = 404;
//     throw err;
//   }
// });

// // router.put('/modify/:id', (req, res) => {
// //   if (req.query.name && req.query.email) {
// //     const userIndex = USER.findIndex((user) => user.id === req.params.id);
// //     if (userIndex !== -1) {
// //       USER[userIndex] = {
// //         id: req.params.id,
// //         name: req.query.name,
// //         email: req.query.email,
// //       };
// //       res.send('회원 정보 수정 완료');
// //     } else {
// //       const err = new Error('해당 ID를 가진 회원이 없습니다!');
// //       err.statusCode = 404;
// //       throw err;
// //     }
// //   } else {
// //     const err = new Error('쿼리 잘못 되었습니다!');
// //     err.statusCode = 400;
// //     throw err;
// //     // res.send('쿼리입력이 잘못되었습니다!');
// //   }
// // });

// // router.delete('/delete/:id', (req, res) => {
// //   const userIndex = USER.findIndex((user) => user.id === req.params.id);
// //   if (userIndex !== -1) {
// //     // 시작지점을 첫번쨰 인자로
// //     USER.splice(userIndex, 1);
// //     res.send('회원삭제 완료');
// //   } else {
// //     const err = new Error('해당 ID를 가진 회원이 존재하지 않습니다!');
// //     err.statusCode = 404;
// //     throw err;
// //   }
// // });

// router.get('/show', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
//   res.write('<h1>Hello, Dynamic Web Page</h1>');

//   for (let i = 0; i < USER.length; i++) {
//     res.write(`<h2>  title is ${POST[i].title}</h2>`);
//     res.write(`<h2> contents is ${POST[i].content}</h2>`);
//   }

//   res.end();
// });

// module.exports = router;

// // router.get('/ejs', (req, res) => {
// //   const userCounts = USER_ARR.length;
// //   res.render('index', { USER_ARR, userCounts });
// // });
