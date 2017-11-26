<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
export default {
  name: 'app'
}
</script>

<style>
@import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');
@import url('../node_modules/font-awesome/css/font-awesome.min.css');
body, html {
    height: 100%;
    margin: 0;
}
#app{
    /* The image used */
    background-image: url("./assets/images/Adviso_website_Home1_BG-01.jpg");

    /* Full height */
    min-height: 100%;

    /* Center and scale the image nicely */
    background-repeat: no-repeat;
    background-size: cover;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bordered{
  border: 1px solid #000000;
}
</style>
