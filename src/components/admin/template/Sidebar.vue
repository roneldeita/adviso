<template>
    <div class="sidebar-container">
      <div class="logo-container">
        <img class="logo" src="../../../assets/images/AdvisoLogo_100x100_White.png" alt="">
      </div>
      <el-menu
        :default-active="activeMenuItem"
        class="el-menu-vertical text-left"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="appointments" @click="switchMenu">
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <span>Appointments</span>
        </el-menu-item>
        <el-menu-item index="subscriptions" @click="switchMenu">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
          <span>Subscriptions</span>
        </el-menu-item>
        <el-menu-item index="masmailing" @click="switchMenu">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
          <span>Mass Mailing</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      activeMenuItem: ''
    }
  },
  methods: {
    switchMenu (command) {
      this.$router.push({name: command.index})
    }
  },
  mounted () {
    this.activeMenuItem = this.$route.name
    console.log(this.activeMenuItem)
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
