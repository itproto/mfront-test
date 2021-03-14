/*
import faker from 'faker';

const products = Array.from(Array(10).keys()).map(() => {
    const name = faker.commerce.productName();
    return `<div>${name}</div>`
});

function mount(el) {
    el.innerHTML = 'HELLO'; // products.join(`\n`);
};

if (process.env.NODE_ENV === 'development') {
    const localEl = document.querySelector('#dev-products');
    if (localEl) {
        mount(localEl);
    }
}*/

const mount = () => {
    console.log(`Foo`)
};

console.log(`WOW`)
export { mount };