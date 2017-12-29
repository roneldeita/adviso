<template>
  <div class="container">
    <div class="row no-gutters">
      <div class="col-md-12 profile-container">
        <br>
        <el-card class="box-card text-left">
          <div slot="header" class="txt-light-blue">
            <span></h5> Account Access</span>
          </div>
          <p>Identification number: <b>{{profile.no}}</b></p>
          <p>Email : <b>{{profile.email}}</b></p>
        </el-card>
        <br>
        <el-card class="box-card text-left">
          <div slot="header" class="txt-light-blue">
            <span>Account Profile</span>
          </div>
          <p>First Name:</p>
          <p>Middle Name:</p>
          <p>Last Name:</p>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
import { getProfile } from '../../assets/utils/auth.js'
export default {
  name: 'profile',
  data () {
    return {
      profile: ''
    }
  },
  mounted () {
    this.profile = JSON.parse(getProfile())
  }
}
</script>
<style scoped>
.profile-container{
  padding: 0 5px !important;
  margin-top: 0px;
}
.box-card{
  margin: 0;
  box-shadow: none
}
</style>
