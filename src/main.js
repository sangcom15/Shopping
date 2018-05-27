// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/pages/Home.vue'
import List from './components/pages/List.vue'

require('./assets/css/assets/normalize.css')
//require('./assets/css/font-awesome.min.css')
require('./assets/css/gallery/foundation.min.css')
require('./assets/css/gallery/set1.css')
require('./assets/css/main.css')
require('./assets/css/responsive.css')


// require('https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js')
// require('https://oss.maxcdn.com/respond/1.4.2/respond.min.js')
// require('./assets/js/assets/modernizr-2.8.3.min.js')
require('./assets/js/assets/plugins.js')
// require('https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false')
require('./assets/js/maps.js')
require('./assets/js/custom.js')
require('./assets/js/jquery.contact.js')
require('./assets/js/main.js')
// require('./assets/js/gallery/masonry.pkgd.min.js')
// require('./assets/js/gallery/imagesloaded.pkgd.min.js')
require('./assets/js/gallery/jquery.infinitescroll.min.js')
require('./assets/js/gallery/main.js')
require('./assets/js/jquery.nicescroll.min.js')




Vue.config.productionTip = false


Vue.use(VueRouter)

//const Home = { template: '<div>foo</div>' }
//const List = { template: '<div>bar</div>' }
const routes = [
  { path: '/Home', component: Home },
  { path: '/List', component: List }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})



/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
