<template>
  <div id="app">
    <h1>Magic</h1>
    <img src="./assets/logo.png"><br><br>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/info">info</router-link>
    <router-link to="/form">form</router-link>
    <router-view/>
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
  margin-top: 20px;
  

}
img{
  width: 20%;
  height: 20%;
}
h1{
  color: red;
}
</style>
