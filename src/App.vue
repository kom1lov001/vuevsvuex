<template>
  <div id="app">
    <product-list-one></product-list-one>
    <hr />
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";
export default {
  data() {
    return {};
  },
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo
  }
};
</script>

<style scoped></style>
