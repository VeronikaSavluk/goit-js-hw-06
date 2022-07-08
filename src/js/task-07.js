// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і
// змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
const inputEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

inputEl.addEventListener("input", (event) => {
    let fontSizeValue = event.currentTarget.value
    textEl.style.fontSize = `${fontSizeValue}px`;
})