<template>
  <div id="product-list-one">
    <h2>Porduct List One</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{ product.name }}</span
        ><span class="price">${{ product.price }}</span>
      </li>
    </ul>
    <button class="" @click="minusFunction">Minus</button>
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
  },
  methods:{
    minusFunction(){
  // return this.$store.dispatch('minusFunction')
    }
  }
};
</script>
<style>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  padding: 20px 0;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
</style>
