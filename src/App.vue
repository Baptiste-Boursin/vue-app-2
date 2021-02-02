<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/show">Show</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

li{
    display: grid;
    grid-column: 2;
    grid-row: 2;
    /* background-color: black;
    color: azure; */
}
li img{
    width:30%;
    height:auto;
    display: block;
    margin-top: 3%;
    margin-left: auto;
    margin-right: auto;
    grid-column: 1;
    grid-row: 1/5;
}
li p{
    grid-column: 2; 
}
</style>
