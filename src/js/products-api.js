import axios from 'axios';

import { BASE_URL, ENDPOINTS, PER_PAGE } from './constants.js';

export async function fetchCategories() {
  const { data } = await axios.get(`${BASE_URL}${ENDPOINTS.PRODUCTS}/category-list`);
  return data;
}

export async function fetchProducts(query) {
  const { data } = await axios.get(`${BASE_URL}${ENDPOINTS.PRODUCTS}`, {
    params:{q: query},
  });
  return data;
}

export async function fetchProductsALL(page = 1, limit = PER_PAGE) {
  const skip = (page - 1) * PER_PAGE;
  const { data } = await axios.get(`${BASE_URL}${ENDPOINTS.PRODUCTS}`, {
    params:{limit, skip},
  });
  return data;

}export async function fetchProductsByCategory(categoryName) {
  const { data } = await axios.get(`${BASE_URL}${ENDPOINTS.PRODUCTS}/category/${categoryName}`, );
  return data;
}

export async function fetchProductByID(id) {
  const { data } = await axios.get(`${BASE_URL}${ENDPOINTS.PRODUCTS}/${id}`);
  return data;
}