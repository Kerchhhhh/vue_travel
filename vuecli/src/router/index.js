import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
// const HomeNews = () => import('../components/HomeNews')
// const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 默认途径
      path: '',
      // redirect重定向
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:id',
      component: User
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '档案'
      },
    },
  ],
  mode: 'history',
  linkActiveClass: 'active'
})
