<template>

    <div>

        <button class="categories-item-button">{{categories_data.title}}</button>
    </div>

</template>


<script>
export default{
    props:{
        categories_data:{
            type:Object,
            default(){
                return{}
            }
        }
    }
}
</script>

<style>
    .categories-item-button{
        width: 100px;
        margin-right: 20px;
    }
</style>