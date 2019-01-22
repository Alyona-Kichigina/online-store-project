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
      path: '/newPage',
      name: 'newPage',
      component: () => import('./views/newPage.vue')
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: () => import('./views/Cart/index.vue')
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/product-page/:id',
      name: 'ProductPage',
      component: () => import('./views/ProductPage/index.vue'),
      props: true
    },
    {
      path: '/personal-area',
      name: 'PersonalArea',
      component: () => import('./views/PersonalArea.vue')
    }
  ],
  mode: 'history'
})
