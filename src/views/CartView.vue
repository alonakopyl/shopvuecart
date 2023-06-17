<template>
  <h1>Корзина</h1>
    <div class="cart-item-card__container"> 
      <CartItemCard 
      v-for="product in items" 
      :key="product.id"
      :product="product"/>
    </div>
  </template>
  
  <script>
  import CartItemCard from '@/components/products/CartItemCard.vue';
  
  export default {
    name: 'CartView',
    components: {CartItemCard},
    computed:{
      items(){
        return this.$store.getters.cartItems
      }
    }
  }
  </script>

  <style>
.cart-item-card__container{
  display: flex;
  justify-content: center;
}
</style>