const animals = ['puppy', 'cat'];

exports.animals = animals;

exports.showAnimals = function showAnimals() {
  animals.map((el) => console.log(el));
};

// module.exports = {
//   animals,
//   showAnimals,
// };

// > 객체에 한번에 빼는 방법 or 각자에 추가해줌
