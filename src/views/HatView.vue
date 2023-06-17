<template>
    <div>
        <h1>Шапки</h1>
        <div class="product-cards-container">
            <ProductCardHat 
            v-for="hat in hat"
            :key="hat.id"
            v-bind:hat="hat"
            />
        </div>
    </div>
</template>

<script>
import ProductCardHat from '@/components/products/ProductCardHat.vue';
import hat from '@/data/hat';

export default{
    name: 'HatView',
    components:{
        ProductCardHat
    },
    data(){
        return{
            hat:hat
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
    border: 2px solid brown;
    margin-right: 50px;
  }
}


</style>