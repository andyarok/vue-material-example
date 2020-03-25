<template>
  <div class="login valign-wrapper">
    <div class="row">
      <div class="col s12 m6 l4 offset-m3 offset-l4">
        <div class="card">
          <div class="card-image">
            <img src="../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg">
            <span class="card-title">{{applicationName}} Login</span>
          </div>
          <div class="card-content center-align">
              <div class="row">
                  <div class="input-field col s12">
                    <input id="username" type="text" class="validate" v-model="user">
                    <label for="username">Username</label>
                  </div>
                  <div class="input-field col s12">
                    <input @keyup.enter="validateLogin" id="password" type="password" class="validate" v-model="password">
                    <label for="password">Password</label>
                  </div>
                  <div class="input-field col s12">
                    <button v-on:click="validateLogin" class="col s12 m12 l12 btn waves-effect waves-light">Login</button>
                  </div>
                  <label v-if="status" :class="status">{{message}}</label>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center-align">
      <div class="attribution">
        Photo by Kalen Emsley on Unsplash
      </div>
    </div>
  </div>

</template>

<script>
  export default{
    props:['applicationName'],
    data: function(){
      return {
        status: '',
        user: '',
        password: '',
        message: ''
      }
    },
    methods: {
      validateLogin(){
        console.log('validating login');
        if(this.user==='admin' && this.password==='admin'){
          this.status = 'success';
          this.message = 'Login successfull';
          //using timeout to just add a small delay artificially
          var self = this;
          setTimeout(function(){
            self.$emit('loggedInUser', self.user);
            self.$emit('loginSuccessfull','true');

          }, 2000);

        }else{
          this.status = 'error';
          this.message = 'Login credentials provided were invalid';
        }
      },
    }
  }

</script>

<!-- use <style media="screen" scoped> if styles have to be locally scoped -->
<style media="screen">
  .login{
    height:100vh;
  }

  .error{
    color:red;
  }

  .success{
    color: teal;
  }

  .attribution{
    display: inline-block;
    color:grey;
    position: absolute;
    bottom:10px;
    text-align: center;
  }
</style>
