<template>
  <header>
    <navbar />
  </header>
  <router-view />
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import { GET_PRODUCTS } from './store/mutation-types';
  import { PRODUCTS } from './store/state-types';
  import Navbar from './components/Navbar.vue';

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
      ...mapState([PRODUCTS]),
    },
    components: { Navbar },
  };
</script>
