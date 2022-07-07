// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("focus", () => {
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
})

inputEl.addEventListener("blur", () => {
    let lengthEl = inputEl.value.length;
    if (lengthEl > inputEl.dataset.length) {
        inputEl.classList.add("invalid");
    }
    else if (lengthEl >= 1) {
        inputEl.classList.add("valid");
    }
})