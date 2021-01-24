// Напиши скрипт для создания галлереи изображений по массиву данных.

// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css - классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesRef = document.querySelector('ul');
imagesRef.classList.add('list', 'wrapper');

const elementLi1 = document.createElement('li');
const elementImg1 = document.createElement('img');
elementImg1.setAttribute('url', 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
elementImg1.setAttribute('alt', 'White and Black Long Fur Cat');
elementLi1.append(elementImg1);


const elementLi2 = document.createElement('li');
const elementImg2 = document.createElement('img');
elementImg2.setAttribute('url', 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
elementImg2.setAttribute('alt', 'Orange and White Koi Fish Near Yellow Koi Fish');
elementLi2.insertAdjacentHTML('afterbegin', elementImg2);


const elementLi3 = document.createElement('li');
const elementImg3 = document.createElement('img');
elementImg3.setAttribute('url', 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
elementImg3.setAttribute('alt', 'Group of Horses Running');
elementLi3.insertAdjacentHTML('afterbegin', elementImg3);

imagesRef.append(elementLi1, elementLi2, elementLi3);
console.log(imagesRef);