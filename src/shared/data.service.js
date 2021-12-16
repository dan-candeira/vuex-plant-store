import * as axios from 'axios';

async function getProducts() {
  try {
    const response = await axios.get(`/api/products.json`);
    const products = parseList(response);

    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function parseList(response) {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== 'object') {
    list = [];
  }
  return list;
}

export const dataService = {
  getProducts,
};
