<template>
    <div class="sidebar-container">
      <div class="logo-container">
        <img class="logo" src="../../../assets/images/AdvisoLogo_100x100_White.png" alt="">
      </div>
      <el-menu
        default-active="2"
        class="el-menu-vertical text-left"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <!-- <el-menu-item index="1" >
          <i class="fa fa-stack-overflow" aria-hidden="true"></i>
          <span>Tax Queries</span>
        </el-menu-item> -->
        <el-menu-item index="2">
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <span>Appointments</span>
        </el-menu-item>
        <el-menu-item index="1" >
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
          <span>Subscription</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
          <span>Mass Mailing</span>
        </el-menu-item>
        <!-- <el-menu-item index="4">
          <i class="fa fa-users" aria-hidden="true"></i>
          <span>Directory</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="fa fa-archive" aria-hidden="true"></i>
          <span>Resources</span>
        </el-menu-item> -->
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
    }
  },
  methods: {
    handleOpen () {

    },
    handleClose () {

    }
  }
}
</script>

<style>
  .sidebar-container .el-menu .el-menu-item{
    color: #c0ccda !important;
    background-color: #313c44 !important;
  }
  .sidebar-container .el-menu .el-menu-item:hover{
    background-color: rgb(84, 92, 100) !important;
  }
  .sidebar-container .el-menu .is-active{
    color: #ffffff !important
  }
</style>

<style scoped>
.sidebar-container{
  background-color: #313c44;
  height: 100vh;
  min-height: 100%;
}
.menubar .el-menu-item {
  color: #c0ccda !important
}
.el-menu-vertical{
  border-right: 0px !important
}

.logo-container{
  padding: 25px 0 60px 0;

}
.logo{
  width: 50%
}
.fa {
  margin-right: 5px
}
</style>
