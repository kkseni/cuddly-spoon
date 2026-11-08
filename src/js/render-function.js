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

function productTemplate({ id, images, brand, title, category, price }) {
  return `
    <li class="products__item" data-id=${id}>
    <img class="products__image" src=${images[0]} alt=${brand}/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}$</p>
 </li>
  `;
}

function productsTemplate(items) {
  return items.map(productTemplate).join('');
}

export function renderProducts(items) {
  productsList.innerHTML = productsTemplate(items);
}

export function renderClear() {
  productsList.innerHTML = ``;
}