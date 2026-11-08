import { fetchProductsALL, fetchProductsByCategory } from './products-api.js';
import { renderClear, renderProducts } from './render-function.js';

export async function categoryHandler (e){
  const targetButton = e.target.closest('.categories__btn');
  if(targetButton){
    // console.log(e.target.textContent);
    const category = e.target.textContent;
    const data = await fetchProductsByCategory(category);
    renderClear();
    renderProducts(data.products);
    if(targetButton.textContent === 'all'){
      const data = await fetchProductsALL();
      renderProducts(data.products);
      // console.log(data.products);
    }
  }
}