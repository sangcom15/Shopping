import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/pages/Home.vue'
// import List from '../components/pages/List.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/Home', 
        name: 'home',
        component: '<a>Home</a>'        
    },
    {
        path: '/List',
        name: 'list',
        component:  '<a>List</a>'    
    }
]
// const router = new VueRouter({
//     routes // short for `routes: routes`
// })

export default new VueRouter({
    routes
  })