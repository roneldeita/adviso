<template>
  <div class="container-fluid index-container" style="padding-top:50px; padding-bottom:100px">
    <div class="row justify-content-md-center">
      <div class="col-sm-24 col-md-auto" span="6">
        <div style="width:100%">
          <img class="logo" src="../assets/images/Adviso_500x500.png" alt="">
        </div>
        <br>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-sm-24 col-md-auto col-lg-3" span="6">
        <img class="phone" src="../assets/images/adviso_home.png" alt=""><br>
        <button type="submit" class="btn btn-dark btn-app" style="padding-left:20px:"><span class="fa fa-apple"></span> <span class="fa fa-android"></span> Mobile App Available Soon</button>
      </div>
      <div class="col-sm-24 col-md-auto col-lg-4 text-left" span="6">
        <p class="title">We are currently updating this site for 2018</p>
        <br>
        <p class="title">Long Beach Office <br><small>235 E. Broadway Ste 800, Long Beach, CA 90802</small></p>
        <p class="title">Office Hours <br><small>Monday - Friday | 10AM - 4PM</small><br><small>Phone# 562.731.2312</small></p>
        <p class="title"><small>Email: info@advisoonline.com </small></p>
        <form @submit="subscribe">
          <div class="form-row">
            <div class="col-md-12">
              <input type="email" class="form-control input-email" placeholder="Type your email" required>
              <button type="submit" class="btn btn-dark btn-subscribe">Subscribe</button>
            </div>
            <div class="col-md-12">

            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    subscribe: function (e) {
      e.preventDefault()
    }
  }
}
</script>

<style scoped>
  .index-container{
      /* The image used */
      background-image: url("./../assets/images/Adviso_website_Home1_BG-01.jpg");

      /* Full height */
      min-height: 100vh;
      width: 100%;

      /* Center and scale the image nicely */
      background-repeat: no-repeat;
      background-size: cover;
  }
  .phone{
    max-height: 350px;
  }
  .logo{
    width: 500px;
    margin-bottom: 25px
  }
  .title{
    font-weight: bold;
    font-size: 20px;
    color: #313C44
  }
  .form-row div{
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .input-email{
    display: inline-block;
    border: 2px solid #899ca9;
    max-width: 250px;
  }
  .btn-subscribe{
    display: inline-block;
    padding-left: 25px;
    padding-right: 25px;
    background-color: #313C44 !important;
    color: #c4ced4 !important
  }
  .btn-app{
    font-size: 12px;
    background-color: #000000 !important;
    color: #D3D3D3 !important;
    font-weight: bold;
    border-radius: 10px;
  }

  .fa-apple,
  .fa-android{
    color: #ffffff;
    font-size: 12px;
    padding-right: 10px;
  }

</style>
