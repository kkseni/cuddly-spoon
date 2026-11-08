import { fetchCategories, fetchProductsALL } from './js/products-api.js';
import { renderCategories, renderProducts } from './js/render-function.js';
import { categoriesList } from './js/refs.js';
import { categoryHandler } from './js/handlers.js';

async function initHomePage() {
  try {
    const [categories, data] = await Promise.all([
      fetchCategories(),
      fetchProductsALL(),
    ]);
    renderCategories(categories);
    renderProducts(data.products);
    // console.log(data.products);
    categoriesList.addEventListener('click', categoryHandler)

  } catch (error) {
    console.error('', error);
  }
}

initHomePage();