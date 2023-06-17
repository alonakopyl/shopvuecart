<template>
  <nav>
    <router-link class="router-link" :class="{active:$route.name==='home'}" to="/">Тапки</router-link> 
    <router-link class="router-link" :class="{active:$route.name==='HatView'}" to="/hat">Шапки</router-link>
    <router-link class="router-link" :class="{active:$route.name==='CartView'}" to="/cart">Корзина</router-link>
  </nav>
  <router-view/>
</template>

<script>

export default{
  mounted(){
    this.$store.commit('updateFromLocalStorage')
  }
}

</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.active {
      color: #42b983;
    }
  }
}

.router-link{
  margin-right: 20px;
}

html, body{
  margin: 0;
  padding: 0;
}
</style>
