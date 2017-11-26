<template>
  <div class="container-fluid">
    <div class="row justify-content-md-center" style="padding-top:50px">
      <div class="col-sm-24 col-md-auto" span="6">
        <div style="width:100%">
          <img class="logo" src="../assets/images/AdvisoLogo.png" alt="">
        </div>
        <br>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-sm-24 col-md-auto col-lg-4 clearfixt" span="6">
        <img class="phone float-right" src="../assets/images/adviso_home.png" alt="">
      </div>
      <div class="col-sm-24 col-md-auto col-lg-4 text-left" span="6">

        <p class="title">Adviso Tax & Business Services is crrently updating this site for 2018</p>
        <br>
        <p class="title">Long Beach Office Information <br><small>235 E. Broadway Ste 800, Long Beach, CA 90802</small></p>
        <p class="title">Office Hours <br><small>Monday - Friday | 10AM - 4PM</small><br><small>Phone# 562.731.2312</small></p>
        <p class="title"><small>Email </small> info@advisoonline.com </p>
        <form @submit="subscribe">
          <div class="form-row">
            <div class="col-md-7">
              <label class="sr-only" for="inlineFormInputName">Name</label>
              <input type="text" class="form-control input-email" placeholder="Type your email">
            </div>
            <div class="col-md-4">
              <button type="submit" class="btn btn-dark btn-subscribe" style="padding-left:20px:">Subscribe</button>
            </div>
            <div class="col-md-24">
              <button type="submit" class="btn btn-dark btn-app" style="padding-left:20px:"><span class="fa fa-apple"></span> <span class="fa fa-android"></span> Mobile App Available Soon</button>
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
      console.log(e)
    }
  }
}
</script>

<style scoped>
  .phone{
    max-height: 450px;
    margin-right: 50px;
  }
  .logo{
    width: 250px;
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
    border: 2px solid #899ca9
  }
  .btn-subscribe{
    padding-left: 25px;
    padding-right: 25px;
    background-color: #313C44 !important;
    color: #97a9b4 !important;
  }
  .btn-subscribe:active{
    color: #c4ced4 !important;
  }
  .btn-app{
    margin-top: 10px;
    font-size: 14px;
    padding: 8px 20px;
    background-color: #000000 !important;
    color: #D3D3D3 !important;
    font-weight: bold;
    border-radius: 10px
  }

  .fa-apple,
  .fa-android{
    color: #ffffff;
    font-size: 18px;
    padding-right: 10px;
  }

</style>
