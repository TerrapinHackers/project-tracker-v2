<!-- App.vue
  This component is the root component for our Vue application. It is rendered
  in the project root's index.html file with the <div id="app"> tag. The Firebase
  instance exists only within this component.
-->
<template>
  <div id="newproject">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="http://terrapinhackers.com/"><img src="../assets/th-logo.svg"/></a>
        <a class="navbar-brand" href="#">Projects</a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#/dashboard">Dashboard</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#/newProject">Reporting</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-click="logOut()" href='#/login'>Logout</a>
                </li>
            </ul>
        </div>
    </nav>

    <form v-on:submit.prevent="addGreeting" id = "form">

        <div class = "form-group">
            <label class="bmd-label-floating">Full Name</label>
            <input  id="name" v-model="newProject.projectLeader" class="form-control" type = "text" size = "35"> 
        </div>

        <div class = "form-group">
            <label class="bmd-label-floating">Project Name</label>
            <input id="pname" v-model="newProject.projectName" class="form-control" type = "text" size = "35">
        </div>

        <div class = "form-group">
                <label class="bmd-label-floating">Contact Email</label>
                <input id="email" v-model="newProject.projectContact" class="form-control" type = "email" size = "35">
        </div>

        <div class = "form-group">
                <label class="bmd-label-floating">Link</label>
                <input id="zelda" class="form-control" v-model="newProject.projectLink" type = "url">
        </div>
        
        <div class = "form-group">
            <label class="bmd-label-floating">Description</label>
            <textarea id="desc" class = "form-control" v-model="newProject.projectDetails" cols = "50" rows = "10" wrap = "hard"></textarea>   
        </div>

        <button id = "submit" style = "background-color:red; color:black" type="submit" class="btn btn-primary button">Submit</button>

    </form>
    <!-- Adding a new greeting; pretty much straight from the documentation! -->
    <!-- <form id="form" v-on:submit.prevent="addGreeting">
      <input type="text" v-model="newProject.projectContact" placeholder="Add your contact information">
      <input type="text" v-model="newProject.projectDetails" placeholder="Add details about the project">
      <input type="text" v-model="newProject.projectLeader" placeholder="Add your name">
      <input type="text" v-model="newProject.projectLink" placeholder="Add a link to the project">
      <input type="text" v-model="newProject.projectName" placeholder="Add the project name">
      <input type="submit" value="Add Greeting">
    </form> -->
    <!--
      Here we are iterating through a very simply array of greetings in
      different languages. To do this, we use the "v-for" directive. This
      is linked to our demo Firebase instance, which is described below.
    -->
    <h1 v-for="project in projects">{{ project.text }}</h1>
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
  let auth = Firebase.auth()
  // Accessing the greetings reference; .ref() takes a URL as its parameter.
  let projectsRef = db.ref('project')

  export default {
    name: 'NewProject',

    /*
     * This section is added to the original CLI-generated App component. This
     * is where VueFire comes into play, allowing us to link our Vue app to
     * Firebase data relatively simply. More information is on the GitHub page:
     *
     * https://github.com/vuejs/vuefire/
     */

    firebase: {
      projects: projectsRef.limitToLast(5)
    },

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
      },
      processUser: function (authed) {
        console.log(authed)
        if (authed === null) {
          this.user = null
          this.router.go('login')
          return
        }
        this.user = {
          title: authed.email || ''
        }
      },
      logOut: function () {
        auth.signOut()
      }
    },

    beforeMount () {
      auth.onAuthStateChanged(this.processUser)
    },

    components: {
      Hello
    }
  }
</script>

<style>
    #newproject {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #form {
        border-color:#D92B30;
        border-style:solid;
        padding: 10px;
    }
    #desc {
        border-color: black;
        border-style: solid;

    }
</style>
