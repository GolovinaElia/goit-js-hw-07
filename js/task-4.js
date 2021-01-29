// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let valRef = document.querySelector('#value');
const divRef = document.querySelector('#counter');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;


    incrementBtnRef.addEventListener('click', (e) => {
        counterValue++;
        valRef.textContent = counterValue;
        });
    decrementBtnRef.addEventListener('click', (e) => {
        counterValue--;
        valRef.textContent = counterValue;
        });
