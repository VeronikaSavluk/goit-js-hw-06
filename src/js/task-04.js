// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const addValueBtn = document.querySelector("[data-action=increment]");
const removeValueBtn = document.querySelector("[data-action=decrement]");
const counterValueEl = document.querySelector("span#value");

// addValueBtn.addEventListener("click", () => {
//     counterValue += Number(addValueBtn.textContent);
//     counterValueEl.textContent = counterValue;
// });

// removeValueBtn.addEventListener("click", () => {
//     counterValue += Number(removeValueBtn.textContent);
//     counterValueEl.textContent = counterValue;
// });

const handleClick = (event) => {
    counterValue += Number(event.target.textContent);
    counterValueEl.textContent = counterValue;
};

addValueBtn.addEventListener("click", handleClick);
removeValueBtn.addEventListener("click", handleClick);
