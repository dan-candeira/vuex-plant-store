<template>
  <div v-for="product in products" :key="product.id">
    <img :src="product.imageUrl" alt="" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { GET_PRODUCTS } from './store/mutation-types';

export default {
  async created() {
    await this.loadProducts();
  },
  methods: {
    ...mapActions([GET_PRODUCTS]),
    async loadProducts() {
      await this.getProducts();
    },
  },
  computed: {
    ...mapState(['products']),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  max-width: 100%;
}
</style>
