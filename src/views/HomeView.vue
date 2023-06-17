<template>
  <div class="home">
    <ProductDescription
    v-bind:product="product"
    v-bind:active="active.product_drawer"
    v-on:close_product_drawer="closeProductDrawer()"
    />

    <CategoriesProduct/>

    <h1>Тапки</h1>
    <div class="product-cards-container">
      <ProductCard 
      v-for="product in items"
      :key="product.id"
      v-bind:product="product"
      v-on:view-product="viewProduct($event)"
      />
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import items from '@/data/item';
import ProductCard from '../components/products/ProductCard.vue'
import ProductDescription from '@/components/products/ProductDescription.vue';
import CategoriesProduct from '@/components/products/CategoriesProduct.vue'


export default {
  name: 'HomeView',
  components: {
    ProductCard,
    ProductDescription,
    CategoriesProduct
  },
  data(){
    return{
      items:items,
      product:0,
      active:{
        product_drawer:false
      }
    }
  },
  methods:{
      viewProduct(product){
        this.product=product
        this.active.product_drawer=true
      },
      closeProductDrawer(){
        this.active.product_drawer=false
      }
    }
}
</script>

<style lang="less">
.product-cards-container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  &__card{
    border: none;
    margin-right: 50px;
    border-radius: 5px;
    background-color: blanchedalmond;
    box-shadow: 0 0 5px rgba(26, 165, 98, 0.737);
  }
}


</style>
