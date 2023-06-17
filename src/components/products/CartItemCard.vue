<template>
    <div class="cart-item-card">
        <div class="header">
            <img :src="require('@/assets/img/' + product.image)" alt=""/>
            <h3>{{ product.name }}</h3>
            <h4>{{ product.description }}</h4>
            <h3>Цена: {{ product.price }}</h3>
            <h4>Количество: {{ product.qantity }}</h4>
            <h4>Общая стоимость: {{ item__cost.toFixed(2) }}</h4>
        </div>

    </div>
</template>

<script>
export default{
    props:['product'],
    computed:{
        item__cost(){
            return this.product.price * this.product.quantity
        }
    }
}

</script>

<style>
    .cart-item-card{
        width: 300px;
        margin: 25px;
        background-color:aquamarine;
        border-radius: 5px;
        text-align: left;
    }

    .header img{
        width: 300px;
        
    }
</style>