// Напиши скрипт, который для каждого элемента массива ingredients создаст
// отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('ul');
ingredientsRef.classList.add('list');
let element = document.createElement('li');
ingredients.forEach((elem) => {
ingredientsRef.insertAdjacentHTML('beforeend', `<li>${elem}</li>`);
});
console.log(ingredientsRef);
