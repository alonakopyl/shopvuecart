<template>
    <div>
        <div class="product-cards-container__card">
            <img :src="require('@/assets/img/' + product.image)" alt=""/>
            <h3>{{product.name}}</h3>
            <h5>{{product.price}} руб.</h5>
            <p>{{product.description}}</p>
            <button class="view-product-button" @click="$emit('view-product', product)">Просмотр</button>
        </div>
    </div>
</template>

<script>
export default{
    props:['product']
}
</script>

<style>
    .view-product-button{
        padding: 10px;
        background-color: aqua;
        border: none;
        border-radius: 5px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
    }

    .product-cards-container__card img{
        width: 250px;
    }
</style>