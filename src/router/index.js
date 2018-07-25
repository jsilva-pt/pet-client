import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "view - Home" */ '@/views/Home.vue')
    },
    {
      path: '/list',
      name: 'pets-list',
      component: () => import(/* webpackChunkName: "view - List" */ '@/views/PetsList.vue')
    },
    {
      path: '/add',
      name: 'pets-add',
      component: () => import(/* webpackChunkName: "view - Add" */ '@/views/PetsAdd.vue')
    },
    {
      path: '/pet/:id',
      name: 'pet-details',
      component: () => import(/* webpackChunkName: "view - Pet Details" */ '@/views/PetDetails.vue')
    },
    {
      path: '/pet/:id/edit',
      name: 'pet-edit',
      component: () => import(/* webpackChunkName: "view - Pet Edit" */ '@/views/PetsEdit.vue')
    }
  ]
})
