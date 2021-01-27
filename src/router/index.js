import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/dashboard.vue'
import maps from '../components/profile/maps.vue'
import login from '../views/auth/login.vue'
import register from '../views/auth/register.vue'
import profile from '../components/profile/profile.vue'
import contact from '../components/profile/contact.vue'
import store from '../store/index'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },

  {
    path: '/register',
    name: 'register',
    component: register
  },

  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/maps',
    name: 'maps',
    component: maps
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/login/',
    name: 'login',
    component: login,
    meta: { requiresVisitor: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/dashboard'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
