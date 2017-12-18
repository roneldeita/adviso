<template>
  <div class="login container-fluid index-container">
    <div class="container">
      <img class="logo" src="../assets/images/Adviso_500x500.png" alt="adviso logo">
      <div class="row justify-content-md-center">
        <div class="col-md-12" style="padding: 0 0 100px 0">
          <div class="form-container">
            <router-link :to="{ name: 'index'}" class="pull-left" style="display:inline-block;padding-left:15px"><span class="fa fa-angle-left"></span> Back to main site</router-link>
            <a href="https://app.canopytax.com/#/login" class="pull-right" style="display:inline-block;padding-right:15px">Adviso Client Login <span class="fa fa-angle-right"></span></a>
            <br>
            <div class="row justify-content-md-center">
              <div class="col-md-5">
                <p class="title txt-light-blue">Adviso Premier Login</p>
                <p>Login for Tax Clients Only</p>
                <br>
                <br>
                <div v-loading="submitLoading" element-loading-text="Signing in..." style="padding:5px">
                  <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
                    <div class="form-group">
                      <el-form-item label="" prop="email">
                         <el-input placeholder="Email" v-model="loginForm.email"></el-input>
                      </el-form-item>
                      <!-- <input type="text" class="form-control" placeholder="Email"> -->
                    </div>
                    <div class="form-group">
                      <el-form-item label="" prop="password">
                        <el-input type="password" placeholder="Password" v-model="loginForm.password"></el-input>
                      </el-form-item>
                      <!-- <input type="password" class="form-control" placeholder="Password"> -->
                    </div>
                    <br>
                    <br>
                    <button type="button" class="btn btn-dark btn-block" @click="handleLogin('loginForm')">Login</button>
                  </el-form>
                </div>
                <br>
                <p>Not a member yet? <br><router-link :to="{ name: 'register'}">Request an appointment</router-link></p>
                <br>
                <br>
                <a href="/register" class="btn btn-text">Forgot password?</a>
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
import { isLoggedIn } from '../assets/utils/auth.js'

export default {
  name: 'login',
  data () {
    return {
      submitLoading: false,
      loginForm: {
        email: '',
        password: ''
      },
      loginRules: {
        email: [
          { required: true, message: 'Email is required', trigger: 'blur' },
          { type: 'email', message: 'Must be of type email', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Password is required', trigger: 'blur' },
          { min: 0, max: 100, message: 'Length should not exceed to 50 characters', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleLogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitLoading = true
          this.axios.post(process.env.API_URL + '/login', this.loginForm)
          .then(response => {
            // set to local storage
            localStorage.setItem('access_token', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user))
            if (isLoggedIn()) {
              window.location = '/admin/appointments'
            }
            this.submitLoading = false
          })
          .catch(error => {
            this.$alert(error.response.data.message, 'Oops!', { confirmButtonText: 'OK', type: 'error' })
            this.submitLoading = false
          })
        } else {
          this.submitLoading = false
          return false
        }
      })
    }
  }
}
</script>

<style>
.login .form-group .el-input__inner{
  background: transparent !important;
  outline: none;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
  border-radius: 0px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  padding-left: 0px;
  border-bottom: 1px solid grey;
}
.login .el-form-item.is-success .el-input__inner {
  border-color: #67c23a;
}
.login .el-form-item.is-error .el-input__inner {
  border-color: #fa5555;
}
</style>

<style scoped>
  .logo{
    height: 100px;
    margin: 60px 0;
  }
  .form-container{
    background: rgb(255, 255, 255); /* Fall-back for browsers that don't support rgba */
    background: rgba(255,255,255, 0.7);
    height: 680px;
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
