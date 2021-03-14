import { mount as mountProducts } from 'products/ProductsIndex'
import { mount as mountCart } from 'cart/ShowCart'

mountProducts(document.querySelector('.products'))
mountCart(document.querySelector('.cart'))
