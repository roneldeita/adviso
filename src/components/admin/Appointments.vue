<template>
  <div>
    <div class="row no-gutters">
      <div class="col-md-9 appointment-container">
        <el-input placeholder="" prefix-icon="el-icon-search" id="search"></el-input>
        <el-menu :default-active="activeTab" class="el-menu-appointment" mode="horizontal" @select="handleSelect">
          <el-menu-item index="queries">QUERIES</el-menu-item>
          <el-menu-item index="schedules">SCHEDULE</el-menu-item>
        </el-menu>
        <div v-if="activeTab === 'queries'">
          <el-table
            :data="tableData3"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <p>State: {{ props.row.state }}</p>
                <p>City: {{ props.row.city }}</p>
                <p>Address: {{ props.row.address }}</p>
                <p>Zip: {{ props.row.zip }}</p>
              </template>
            </el-table-column>
            <el-table-column
              label="Date"
              prop="date">
            </el-table-column>
            <el-table-column
              label="Name"
              prop="name">
            </el-table-column>
          </el-table>
        </div>
        <div v-if="activeTab === 'schedules'">
        </div>
      </div>
      <div class="col-md-3 calendar-container">
        <!-- <v-date-picker color="blue-grey darken-2" v-model="picker" style="width:100%"></v-date-picker> -->
        <div class="block">
          <el-date-picker
            v-model="picker"
            type="date"
            placeholder="Pick a day"
            format="yyyy/MM/dd">
          </el-date-picker>
        </div>
        <div style="background-color:#ffffff; height: 400px;margin-top:10px">
          {{ picker }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appointments',
  data () {
    return {
      activeTab: 'queries',
      picker: new Date(),
      dialog: false,
      tableData3: [{
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }]
    }
  },
  methods: {
    handleSelect (selectedTab) {
      this.activeTab = selectedTab
    }
  },
  created () {
  }

}
</script>

<style scoped>
  .appointment-container{
    padding: 0 20px !important;
    margin-top: -60px;
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
</style>
