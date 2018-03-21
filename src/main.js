// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueFire from 'vuefire'
import routes from './routes'

// import HomePage from './views/Home'

/*
 * Because we installed VueFire via npm and imported it as a module, we have
 * to add this little snippet of code to 'install' it. If you include the lib
 * via typical <script> tags in your HTML document, this isn't required.
 */

const NotFound = { template: '<p>Page not found</p>' }
  // const Home = { template: '<App/>', components: {  } }
// const Login = { template: '<p>Login</p>' }

Vue.use(VueFire)

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./views/' + matchingView + '.vue')
        : require(NotFound)
    }
  },
  render (h) { return h(this.ViewComponent) }

})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
