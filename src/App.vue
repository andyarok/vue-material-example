<template>
  <div id="app" class="valign-wrapper">
    <login />
  </div>

</template>

<script>
import Login from './pages/Login.vue'

export default {
  name: 'app',
  components: {
    'login': Login
  }

}
</script>

<style>
#app{
  height:100vh;
}

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
