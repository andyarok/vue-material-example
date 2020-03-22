<template>
  <div >
    <div class="row">
      <div class="col s12 m6 l4 offset-m3 offset-l4">
        <div class="card">
          <div class="card-image">
            <img src="../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg">
            <span class="card-title">TourAbout Login</span>
          </div>
          <div class="card-content">
            <div class="row">
                <div class="input-field col s12">
                  <input id="username" type="text" class="validate">
                  <label for="username">Username</label>
                </div>
                <div class="input-field col s12">
                  <input id="password" type="password" class="validate">
                  <label for="password">Password</label>
                </div>
                <div class="input-field col s12">
                  <button class="col s12 m12 l12 btn waves-effect waves-light" type="submit" name="action">Login</button>
                </div>

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

</script>

<style media="screen">
  .attribution{
    display: inline-block;
    color:grey;
    position: absolute;
    bottom:10px;
    text-align: center;
  }
</style>
