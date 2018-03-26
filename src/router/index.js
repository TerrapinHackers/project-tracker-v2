import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import NewProject from '../views/NewProject'
import SignUp from '../views/SignUp'
import Dashboard from '../views/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      component: NewProject
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})

// export default {
//   '/': 'Home',
//   '/login': 'Login',
//   '/dashboard': 'Dashboard',
//   '/newproject': 'NewProject',
//   '/signup': 'SignUp'
// }
