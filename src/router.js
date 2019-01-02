import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: () => import('./views/Home')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('./views/Shop')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('./views/Registration')
    },
    {
      path: '/newPage',
      name: 'newPage',
      component: () => import('./views/newPage.vue')
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: () => import('./views/Cart')
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/product-page/:id',
      name: 'ProductPage',
      component: () => import('./views/ProductPage.vue'),
      props: true
    }
  ],
  mode: 'history'
})
