const fs = require('fs').promises;

async function main() {
  let data = await fs.readFile('test1.txt', 'utf-8');
  console.log('1', data.toString());
  data = await fs.readFile('test2.txt', 'utf-8');
  console.log('2', data.toString());
  data = await fs.readFile('test3.txt', 'utf-8');
  console.log('3', data.toString());
  data = await fs.readFile('test4.txt', 'utf-8');
  console.log('4', data.toString());
}
main();
