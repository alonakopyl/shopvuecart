<template>
    <div class="drawer-background" :class="{show: active}">
        <div class="drawer">
            <div class="drawer-close" @click="$emit('close_product_drawer')"
            :class="{show: active}"
            >X</div>
            <div class="product">
                <h3>{{product.name}}</h3>
                <p>{{product.description}}</p>
                <h3>{{product.price}}</h3>
                <h4>{{ product_total }}</h4>
            </div>
            <div class="button-container">
                <button class="add" @click="addToCart()">Add</button>
                <button class="remove" @click="removeFromCart()">Remove</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['product', 'active'],

        computed:{
            product_total(){
                return this.$store.getters.productQuantity(this.product)
            }
        },

        methods:{
            addToCart(){
                this.$store.commit('addToCart', this.product)
            },

            removeFromCart(){
                this.$store.commit('removeFromCart', this.product)
            }
        }
    }
</script>

<style>
    .drawer-background{
        height: 1000px;
        width: 300px;
        background-color: rgba(250, 235, 215, 0.656);
        z-index: 100;
        position: fixed;
        left: 0;
        top: 0;
        display: none;
        transition: display 2s;
    }

    .drawer-background.show{
        display: block;
    }

    .drawer{
        width: 300px;
        height: 1000px;
        z-index: 101;
        position: fixed;
        cursor: pointer;
        transition: 2s;
    }

    .drawer-close{
        color: black;
        width: 15px;
        padding: 5px;
        float: right;        
    }

    .button-container button{
        width: 150px;
        border: none;
        padding: 10px;
        cursor: pointer;
        margin: 5px;
    }

</style>