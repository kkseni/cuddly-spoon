
import { productsList } from './refs.js';
import { categoriesList } from './refs';

export const renderCategories = categories => {
  const arrCategories = ['all', ...categories];
  const markup = arrCategories
    .map(category => {
      return `<li class="categories__item"><button class="categories__btn" type="button">${category}</button></li>`;
    })
    .join('');
  categoriesList.insertAdjacentHTML('beforeend', markup);
};

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