export const animals = ['puppy', 'cat'];

export function showAnimals() {
  animals.map((el) => console.log(el));
}

// 이것도 가능
// export { animals, showAnimals };
export { animals as ani, showAnimals as show };
