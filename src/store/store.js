import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export let store = new Vuex.Store({
  state: {
    products: [
      { name: "Banana Skin", price: 40 },
      { name: "Shiny Star", price: 140 },
      { name: "Green Shells", price: 360 },
      { name: "Red Shells", price: 230 },
    ]
  },
getters:{
  saleProducts(state){
    let sale = state.products.map(product => {
      return {
        name: product.name,
        price: product.price
      }
    })
    return sale
  }
},
mutations:{
minusFunction(state,val){
  return state.products.forEach(product => {
    return product.price += val;
  })
}
},
// actions:{
//   minusFunction(context){
// setTimeout(() => {
//   context.commit('minusFunction')
// }, 3000);
//   }
// }

});
