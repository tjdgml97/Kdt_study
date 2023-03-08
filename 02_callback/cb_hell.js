function funcHell(callback) {
  callback();
}

funcHell(function () {
  console.log('d');
  funcHell(function () {
    console.log('');
  });
});
