<template>
    <div class="categories-product-wrapper">
        <CategoriesItem
    v-for="button in categories"
    :key="button.id"
    v-bind:categories_data="button"
    
    />
    </div>
</template>

<script>
import CategoriesItem from '@/components/products/CategoriesItem.vue'

export default{
    components:{CategoriesItem},
    data() {
        return{
            categories:[
                {
                    id:10,
                    title:'Тапки'
                },
                {
                    id:20,
                    title:'Шапки'
                },
                {
                    id:30,
                    title:'Все'
                }
            ]
        }
    }
}
</script>

<style>
.categories-product-wrapper{
    display: flex;
    justify-content: center;
}
</style>