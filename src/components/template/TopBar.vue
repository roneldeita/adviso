<template>
  <div class="topbar-container text-right">
    <!-- <el-badge is-dot class="item"> -->
      <i class="fa fa-bell-o" aria-hidden="true"></i>
    <!-- </el-badge> -->
    <el-dropdown>
      <i class="fa fa-user-circle" aria-hidden="true"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>Settings</el-dropdown-item>
        <el-dropdown-item>Logout</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'topbar'
}
</script>

<style scoped>
.fa{
  color: #c0ccda;
  margin: 0px 5px;
}
.fa-bell-o{
  font-size: 22px;
}
.fa-user-circle{
  font-size: 28px;
}
.topbar-container{
  padding:25px 10px;
}
</style>
