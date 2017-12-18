<template>
  <div id="app">
    <div id="admin" class="container-fluid" v-if="adminPages.includes($route.name)">
      <div class="row no-gutters">
        <div class="col-md-2">
          <admin-sidebar></admin-sidebar>
        </div>
        <div class="col-md-10">
          <admin-topbar></admin-topbar>
          <router-view/>
        </div>
      </div>
    </div>
    <div id="client" v-if="clientPages.includes($route.name)">

      <client-topbar></client-topbar>
      <router-view/>
      <client-bottombar></client-bottombar>
    </div>
    <div id="client" v-if="!clientPages.includes($route.name) && !adminPages.includes($route.name)">
      <router-view/>
    </div>
  </div>
</template>

<script>
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import ClientTopbar from './components/template/Topbar.vue'
import ClientBottombar from './components/template/Bottombar.vue'
import AdminSidebar from './components/admin/template/Sidebar.vue'
import AdminTopbar from './components/admin/template/Topbar.vue'

export default {
  name: 'app',
  data () {
    return {
      adminPages: [
        'appointments'
      ],
      clientPages: [
        'index',
        'about',
        'services',
        'team',
        'contact'
      ]
    }
  },
  components: {
    ClientTopbar, ClientBottombar, AdminSidebar, AdminTopbar
  }
}
</script>

<style>
@import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');
@import url('../node_modules/font-awesome/css/font-awesome.min.css');
@import url('../node_modules/element-ui/lib/theme-chalk/index.css');

@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');
@import url('../node_modules/pe7-icon/dist/dist/pe-icon-7-stroke.min.css');
body, html {
    height: 100%;
    position: relative;
    margin: 0;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eef8fd;
  font-weight: 300
}
.index-container{
  /* The image used */
  background-image: url("./assets/images/Adviso_website_Home1_BG-01.jpg");
  /* Full height */
  min-height: 100vh;
  width: 100%;

  /* Center and scale the image nicely */
  background-repeat: no-repeat;
  background-size: cover;
}
.container-fluid{
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.bordered{
  border: 1px solid #000000;
}
.txt-light-blue{
  color:#00aff0
}
.bg-dark-blue{
  background-color: #313c44
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

<style scoped>
#admin{
  padding: 0px !important
}
</style>
