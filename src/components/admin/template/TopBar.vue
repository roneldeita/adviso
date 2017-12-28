<template>
  <div class="topbar-container text-right">
    <!-- <el-badge is-dot class="item"> -->
      <i class="fa fa-bell-o" aria-hidden="true"></i>
    <!-- </el-badge> -->
    <el-dropdown @command="handleLogout">
      <i class="fa fa-user-circle" aria-hidden="true"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="settings">Settings</el-dropdown-item>
        <el-dropdown-item command="logout">Logout</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { logout } from '../../../assets/utils/auth.js'
export default {
  name: 'topbar',
  methods: {
    handleLogout (command) {
      if (command === 'logout') {
        logout()
      }
    }
  }
}
</script>

<style scoped>
.fa{
  color: #313c44;
  margin: 0px 5px;
}
.fa-bell-o{
  font-size: 22px;
}
.fa-user-circle{
  font-size: 28px;
}
.topbar-container{
  padding:25px 20px;
}
</style>
