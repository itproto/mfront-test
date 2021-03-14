
import faker from 'faker';

const products = Array.from(Array(10).keys()).map(() => {
    const name = faker.commerce.productName();
    return `<div>${name}</div>`
});

const mount = (el) => {
    el.innerHTML = products.join(`\n`);
};

const mountStandalone = (selector) => {
    if (process.env.NODE_ENV === 'development') {
        const localEl = document.querySelector(selector);
        if (localEl) {
            mount(localEl);
        }
    }
}

mountStandalone('#dev-products');

export { mount };