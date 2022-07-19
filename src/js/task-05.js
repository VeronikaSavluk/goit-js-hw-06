// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
const inputEl = document.querySelector("input#name-input");
const textEl = document.querySelector("span#name-output");
console.log(textEl);
inputEl.addEventListener("input", (event) => {
    textEl.textContent = event.currentTarget.value || `Anonymous`;
})