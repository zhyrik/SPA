import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Book from '@/components/Ads/Book'
import AddList from '@/components/Ads/AdList'
import NewAdd from '@/components/Ads/NewAdd'
import Orders from '@/components/User/Orders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/book/:id',
      name: 'book',
      props: true,
      component: Book
    },
    {
      path: '/list',
      name: 'list',
      component: AddList
    },
    {
      path: '/new',
      name: 'new',
      component: NewAdd
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }
  ],
  mode: 'history'
})
