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

const elementLi1 = document.createElement('li');
elementLi1.textContent = 'Картошка';

const elementLi2 = document.createElement('li');
elementLi2.textContent = 'Грибы';

const elementLi3 = document.createElement('li');
elementLi3.textContent = 'Чеснок';

const elementLi4 = document.createElement('li');
elementLi4.textContent = 'Помидоры';

const elementLi5 = document.createElement('li');
elementLi5.textContent = 'Зелень';

const elementLi6 = document.createElement('li');
elementLi6.textContent = 'Приправы';

ingredientsRef.append(elementLi1, elementLi2, elementLi3, elementLi4, elementLi5, elementLi6);
console.log(ingredientsRef);
