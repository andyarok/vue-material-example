<template>
  <div >
      <nav>
        <div class="nav-wrapper nav-bar">
          <a href="#">{{applicationName}}</a>
          <a href="#" class="right hide-on-med-and-down">{{user}}</a>
        </div>
      </nav>
    <main>

    </main>
    <footer>

    </footer>
  </div>


</template>

<script>
  export default{
    props:{
      applicationName: String,
      user: String
    },
    data: function(){
      return {

      }
    },
    methods:{

    }
  }

</script>

<style>
  .nav-bar{
    margin-right: 10px;
    margin-left: 10px;
  }

</style>
