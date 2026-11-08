import { productsList } from './refs.js';

function productTemplate({}) {
  return `
    <li class="">
      <p>dddd</p>
    </li>
  `;
}

function productsTemplate(items) {
  return items.map(productTemplate).join('');
}

export function renderProducts(items) {
  productsList.innerHTML = productsTemplate(items);
}