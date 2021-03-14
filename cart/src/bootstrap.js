import faker from 'faker';


const mount = (el) => {
    el.innerHTML = `You selected ${faker.random.number(50)} items`
};

const mountStandalone = (selector) => {
    if (process.env.NODE_ENV === 'development') {
        const localEl = document.querySelector(selector);
        if (localEl) {
            mount(localEl);
        }
    }
}

mountStandalone('#dev-cart');

export { mount };