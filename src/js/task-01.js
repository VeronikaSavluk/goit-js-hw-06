const listCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listCategories.length}`);

// for (let i = 0; i < listCategories.length; i += 1) {
//     // console.log(listCategories[i]);
//     const categoryName = listCategories[i].querySelector(`h2`);
//     console.log(`Category: ${categoryName.textContent}`);
//     const elements = listCategories[i].querySelectorAll(`li`);
//     console.log(`Elements: ${elements.length}`);
// }
listCategories.forEach((item) => {
    const categoryName = item.firstElementChild;
    console.log(`Category: ${categoryName.textContent}`);

    const elements = item.lastElementChild;
    console.log(`Elements: ${elements.children.length}`);
})


