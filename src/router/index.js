import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Home from '../views/Home'
import Login from '../views/Login'
import NewProject from '../views/NewProject'
import SignUp from '../views/SignUp'
import Dashboard from '../views/Dashboard'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/newproject',
      name: 'NewProject',
      component: NewProject,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  else next()
})
export default router

// export default {
//   '/': 'Home',
//   '/login': 'Login',
//   '/dashboard': 'Dashboard',
//   '/newproject': 'NewProject',
//   '/signup': 'SignUp'
// }
