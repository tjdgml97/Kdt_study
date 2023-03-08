const promise = new Promise(function (resolve, reject) {
  const tetz = 'older';
  if (tetz === 'old') {
    setTimeout(() => {
      resolve('tetz is old');
    }, 3000);
  } else {
    reject('tetz is getting old');
  }
});

//1 resolve, 2reject
promise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (data) {
    console.log(data);
  });
//  data 값이 넘어가는건가?
