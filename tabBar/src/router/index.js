import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>import('../view/home/Home.vue')
const Category = () =>import('../view/category/Category.vue')
const Cart = () =>import('../view/cart/Cart.vue')
const Profile = () =>import('../view/profile/Profile.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
})
