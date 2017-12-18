<template>
  <div class="register container-fluid index-container">
    <div class="container">
      <img class="logo" src="../assets/images/Adviso_500x500.png" alt="adviso logo">
      <div class="row justify-content-md-center">
        <div class="col-md-12" style="padding: 0 0 100px 0">
          <div class="form-container">
            <router-link :to="{ name: 'index'}" class="text-left" style="display:block;padding-left:15px"><span class="fa fa-angle-left"></span> Back to main site</router-link>
            <div class="row justify-content-md-center">
              <div class="col-md-5">
                <p class="title txt-light-blue">Get Started Today</p>
                <p>Register now to gain access to our free tax app. One of our representative will contact you to set you up!</p>
                <register-form></register-form>
                <!-- <form v-on:submit="handleAppointment">

                </form> -->
                <br>
                <p>Already a member? <router-link :to="{ name: 'login'}">Login your account</router-link></p>
                <br>
                <p>Terms & Condition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from './RegisterForm.vue'
export default {
  name: 'login',
  components: { RegisterForm }
}
</script>
<style scoped>

  .logo{
    height: 100px;
    margin: 60px 0;
  }
  .form-container{
    background: rgb(255, 255, 255); /* Fall-back for browsers that don't support rgba */
    background: rgba(255,255,255, 0.7);
    height: 820px;
    padding:25px 10px;
    -moz-box-shadow:    1px 5px 10px 0px #ccc;
    -webkit-box-shadow: 1px 5px 10px 0px #ccc;
    box-shadow:         1px 5px 10px 0px #ccc;
  }
  .fa{
    font-size: 20px;
    margin-right: 15px;
    margin-top: -7px;
  }
  .title{
    font-size: 32px;
    font-weight: 400
  }
</style>
