<!-- App.vue
  This component is the root component for our Vue application. It is rendered
  in the project root's index.html file with the <div id="app"> tag. The Firebase
  instance exists only within this component.
-->
<template>
  <div id="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="http://terrapinhackers.com/"><img src="../assets/th-logo.svg"/></a>
        <a class="navbar-brand" href="#">Projects</a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#/dashboard">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#/newProject">New Project</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#/login">Login</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class = "container">    
      <div class = "row">
        <div class = "col-md-12 text-center">
          <h1 class = "maintitle">Terrapin Hackers Project Tracker</h1>
        </div>
      </div>
      <div class = "row">
        <div class = "col-md-12 text-center">
          <p> Click login to begin using the app! </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Hello from '../components/Hello'

  // This line is new!
  import Firebase from 'firebase'

  /*
   * The config was copied and pasted straight from the Firebase Dashboard.
   * Simply click "Add Firebase to Your Web App" to access yours.
   */

  let config = {
    apiKey: 'AIzaSyBliLgMQpiahmZl0OWdCZhT1mHOaJ0FBCE',
    authDomain: 'project-tracker-th.firebaseapp.com',
    databaseURL: 'https://project-tracker-th.firebaseio.com',
    projectId: 'project-tracker-th',
    storageBucket: 'project-tracker-th.appspot.com',
    messagingSenderId: '997645017628'
  }

  // Here we are initializing the Firebase connection.
  if (!Firebase.apps.length) {
    Firebase.initializeApp(config)
  }
  let db = Firebase.database()
  // Accessing the greetings reference; .ref() takes a URL as its parameter.
  let projectsRef = db.ref('project')

  export default {
    name: 'Home',

    /*
     * This section is added to the original CLI-generated App component. This
     * is where VueFire comes into play, allowing us to link our Vue app to
     * Firebase data relatively simply. More information is on the GitHub page:
     *
     * https://github.com/vuejs/vuefire/
     */

    data () {
      return {
        newProject: {
          projectContact: '',
          projectDetails: '',
          projectLeader: '',
          projectLink: '',
          projectName: ''
        }
      }
    },

    // We have added a simple method to add new greetings to our Firebase.
    methods: {
      addGreeting: function () {
        projectsRef.push(this.newProject)
        this.newProject.projectContact = ''
        this.newProject.projectDetails = ''
        this.newProject.projectLeader = ''
        this.newProject.projectLink = ''
        this.newProject.projectName = ''
      }
    },

    components: {
      Hello
    }
  }
</script>

<style>
  #home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
