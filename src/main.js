// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'// ElementUi
import locale from 'element-ui/lib/locale/lang/en'
import * as VueGoogleMaps from 'vue2-google-maps'
import moment from 'moment'
import VueMoment from 'vue-moment'
import VueAxios from 'vue-axios'
import VueLodash from 'vue-lodash'
import axios from 'axios'
import lodash from 'lodash'

Vue.use(ElementUI, { locale })
Vue.use(VueMoment, moment)
Vue.use(VueAxios, axios)
Vue.use(VueLodash, lodash)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyATSZ8ZMz0L0e3dNxz3hzNJw7FHyFcZFcs',
    v: '3.29',
    libraries: 'places' // If you need to use place input
  }}
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
