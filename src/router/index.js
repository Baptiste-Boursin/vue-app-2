import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../views/MovieDetail.vue'
import ShowDetail from '../views/ShowDetail.vue'

Vue.use(VueRouter)
Vue.use(VueAxios)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/movie/:id',
    name :"MovieDetail",
    component : MovieDetail
  },
  {
    path:'/serie/:id',
    name:"ShowDetail",
    component: ShowDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
