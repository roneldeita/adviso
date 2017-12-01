<template>
  <div id="app">
    <div id="admin" class="container-fluid" v-if="$route.name != 'index'">
      <div class="row no-gutters">
        <div class="col-md-2">
          <sidebar></sidebar>
        </div>
        <div class="col-md-10">
          <topbar></topbar>
          <router-view/>
        </div>
      </div>
    </div>
    <router-view v-if="$route.name === 'index'"/>
  </div>
</template>

<script>
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import Sidebar from './components/template/Sidebar.vue'
import Topbar from './components/template/Topbar.vue'

export default {
  name: 'app',
  components: {
    Sidebar, Topbar
  }
}
</script>

<style>
@import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');
@import url('../node_modules/font-awesome/css/font-awesome.min.css');
@import url('../node_modules/element-ui/lib/theme-chalk/index.css');
@import url('../node_modules/vuetify/dist/vuetify.min.css');
body, html {
    height: 100%;
    margin: 0;
    overflow-y: auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eef8fd

}
.container-fluid{
  margin-left: 0px !important;
  margin-right: 0px !important;
}

.bordered{
  border: 1px solid #000000;
}
</style>

<style scoped>
#admin{
  padding: 0px !important
}
</style>
