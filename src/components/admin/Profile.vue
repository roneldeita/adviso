<template>
  <div class="container">
    <div class="row no-gutters">
      <div class="col-md-12 appointment-container">
        <h1>Profile</h1>
        <p>{{ profile }}</p>
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
    this.profile = getProfile()
  }
}
</script>
<style scoped>
.appointment-container{
  padding: 0 20px !important;
  margin-top: 0px;
}
</style>
