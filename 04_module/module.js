const animalModule = require('./animals');

console.log(animalModule);
console.log(animalModule.animals);
animalModule.showAnimals();

const { animals, showAnimals } = require('./animals');
// 객체안에 키를 미리 선언해서 받음

console.log(animals);
showAnimals();
