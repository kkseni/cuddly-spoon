import { fetchCategories, fetchProductsALL } from './js/products-api.js';
import { renderProducts } from './js/render-function.js';

async function initHomePage() {
  try {

    const [categories, data] = await Promise.all([
      fetchCategories(),
      fetchProductsALL(),
    ]);

    // renderCategories(categories);
    renderProducts(data.products);

  } catch (error) {
    console.error('', error);
  }
}

initHomePage();