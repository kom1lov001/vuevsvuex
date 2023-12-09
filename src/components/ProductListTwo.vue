<template>
  <div id="product-list-two">
    <h2>Porduct List Two</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span>{{ product.name }}</span> <span> ${{ product.price }} </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts(){
      return this.$store.getters.saleProducts
    }
  }
};
</script>
<style>
#product-list-two {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 20px 0;
}
#product-list-two ul {
  padding: 0;
}
#product-list-two li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
</style>
