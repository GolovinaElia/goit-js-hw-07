// Напиши скрипт, который бы при потере фокуса на инпуте,
//     проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
//     если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
// const dataRef = document.querySelector('input[data-length="6"]');
inputRef.addEventListener('blur', event => {
    // const { value } = event.target.value;
console.log(inputRef.value);
    // if (event.target.value) {
    //     inputRef.classList.add('#validation-input.valid');      
    // }
    // inputRef.classList.add('#validation-input.invalid');
}); 