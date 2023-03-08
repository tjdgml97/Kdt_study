// function func1(callback) {
//   console.log('1번함수');
//   callback(func3);
// }

// function func2(callback) {
//   console.log('2번함수');
//   callback();
// }

// function func3() {
//   console.log('3번함수');
// }

// func1(() => {
//   console.log('..');
// });

function multiplication(number, callback) {
  let answer = 0;
  console.log('계산중');

  setTimeout(function () {
    answer = number * number;
    callback(answer);
  }, 2000);
}

function say(result) {
  console.log(result);
}

multiplication(3, say);
