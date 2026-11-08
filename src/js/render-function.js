import { categoriesList } from './refs';

export const renderCategories = categories => {
  const arrCategories = ['all', ...categories];
  const markup = categories
    .map(category => {
      return `<li class="categories__item"><button class="categories__btn" type="button">${category}</button></li>`;
    })
    .join('');
  categoriesList.insertAdjacentHTML('beforeend', markup);
};
