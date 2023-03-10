const express = require('express');
const { route } = require('./users');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
