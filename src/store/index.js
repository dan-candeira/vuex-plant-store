import { createStore } from 'vuex';
import { dataService } from '../shared';
import { GET_PRODUCTS } from './mutation-types';
import { PRODUCTS } from './state-types';

export default createStore({
  state: {
    [PRODUCTS]: [],
  },
  mutations: {
    [GET_PRODUCTS](state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProducts({ commit }) {
      const products = await dataService.getProducts();
      commit(GET_PRODUCTS, products);
    },
  },
  modules: {},
});
