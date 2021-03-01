<template>
  <div id="app">
    <img src="./assets/bitcoin.jpg"><br>
    <button class="btn btn-primary"><router-link :to="{ name: 'Hello' }">Home</router-link></button>
    <button class="btn btn-primary"><router-link to="/about">About</router-link></button><br><br>
    <button class="btn btn-primary"><router-link to="/ethereum">Ethereum</router-link></button>
   <button class="btn btn-primary"><router-link to="/bitcoin">Bitcoin</router-link></button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
