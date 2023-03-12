const students = ['재호', '재석 '];

function showStudents() {
  students.map((el) => console.log(el));
}

// 이것도 가능
// export { animals, showAnimals };
export { showStudents as show };
