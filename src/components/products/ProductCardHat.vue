<template>
     <div>
        <div class="product-cards-container__card">
            <h3>{{hat.name}}</h3>
            <h5>{{hat.price}} руб.</h5>
            <p>{{hat.description}}</p>
        </div>
    </div>
</template>

<script>

    export default{
        props:['hat']
    }
</script>