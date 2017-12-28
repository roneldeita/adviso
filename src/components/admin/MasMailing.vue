<template>
  <div>
    <div class="row no-gutters">
      <div class="col-md-12 appointment-container">
        <h1>Mas Mailing</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mas-mailing',
  data () {
    return {
      activeTab: 'queries'
    }
  }

}
</script>

<style scoped>
  .appointment-container{
    padding: 0 20px !important;
    margin-top: 0px;
  }
  .calendar-container{
    padding-right: 20px !important
  }
  .calendar-container .el-date-editor{
    width: 100%
  }
  .el-menu-appointment{
    margin-top: 20px;
  }
  .tables-header{
    font-size: 2px;
  }
</style>
