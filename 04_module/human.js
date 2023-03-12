const name = ['철수', '영희'];

function showName() {
  name.map((el) => console.log(el));
}

// 이것도 가능
// export { animals, showAnimals };
// export { animals as ani, showAnimals as show };

module.exports = {
  showName,
};
