<template>
  <div id="app" >
    <login v-if="!loggedIn" :applicationName="appName" @loginSuccessfull="loggedIn = $event" @loggedInUser="user = $event"/>
    <main-app v-if="loggedIn" :applicationName="appName" :user="user" />
  </div>

</template>

<script>
import 'materialize-css/sass-patch/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import Login from './pages/Login.vue'
import MainApp from './pages/AppMain.vue'

M.AutoInit();

export default {
  name: 'app',
  data: function(){
    return {
      appName: 'TourAbout', //Passing this just to showcase parent => to Child communication.
      loggedIn: false,
      user: ''
    }
  },
  components: {
    'login': Login,
    'main-app': MainApp
  }

}
</script>

<style>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
