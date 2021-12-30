<template>
  <nav class="nav">
    <ul role="list">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/cart">Cart</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
</script>

<style lang="sass"></style>
