<template>
  <div>
    <div class="row no-gutters">
      <div class="col-md-12 appointment-container">
        <el-input placeholder="" prefix-icon="el-icon-search" id="search"></el-input>
        <el-menu :default-active="activeTab" class="el-menu-appointment" mode="horizontal" @select="handleSelect">
          <el-menu-item index="queries">QUERIES</el-menu-item>
          <el-menu-item index="schedules">SCHEDULE</el-menu-item>
        </el-menu>
        <div v-if="activeTab === 'queries'">
          <el-table
            align="left"
            :data="appointments"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <p>First Name: <b>{{props.row.first_name}}</b></p>
                <p>Middle Name: <b>{{props.row.middle_name}}</b></p>
                <p>Last Name: <b>{{props.row.last_name}}</b></p>
                <p>Contact: <b>{{ props.row.number }}</b></p>
                <p>Email: </p>
              </template>
            </el-table-column>
            <el-table-column
              label="DATE"
              prop="requested_date"
              width="100">
            </el-table-column>
            <el-table-column
              label="TIME"
              prop="requested_time"
              width="90">
            </el-table-column>
            <el-table-column
              label="FULL NAME"
              prop="first_name">
               <template slot-scope="scope">
                 <span>{{scope.row.first_name}} </span>
                 <span>{{scope.row.middle_name}} </span>
                 <span>{{scope.row.last_name}} </span>
               </template>
            </el-table-column>
            <el-table-column
              label="CONTACT"
              prop="number"
              width="150">
            </el-table-column>
            <el-table-column
              label="AGENT"
              prop="agent">
            </el-table-column>
            <el-table-column
              label="OPERATIONS"
              width="150">
              <template slot-scope="scope">
                <el-button v-if="scope.row.status === 'queue'"
                  size="mini"
                  type="primary">Start <i class="el-icon-check el-icon-right"></i>
                </el-button>
                <el-dropdown v-if="scope.row.status === 'in-progress'" split-button type="primary" size="mini" @click="">
                  In Progress
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Queue</el-dropdown-item>
                    <el-dropdown-item>Verified</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div v-if="activeTab === 'schedules'">
        </div>
      </div>
      <!-- <div class="col-md-3 calendar-container">
        <div class="block">
          <el-date-picker
            v-model="picker"
            placeholder="Pick a day">
          </el-date-picker>
        </div>
        <div style="background-color:#ffffff; height: 400px;margin-top:10px">
          {{ picker }}
        </div>
      </div> -->
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
      appointments: [{
        status: 'queue',
        first_name: 'Ronel',
        middle_name: 'Aparri',
        last_name: 'Deita',
        number: '0987654321',
        requested_date: '2016-05-03',
        requested_time: '9 : 00 AM',
        agent: ''
      }, {
        status: 'in-progress',
        first_name: 'Albert',
        middle_name: 'Joy',
        last_name: 'Nakpil',
        number: '0987654321',
        requested_date: '2016-05-03',
        requested_time: '9 : 00 AM',
        agent: ''
      }, {
        status: 'queue',
        first_name: 'Miguel',
        middle_name: 'Migul',
        last_name: 'Napiza',
        number: '0987654321',
        requested_date: '2016-05-03',
        requested_time: '9 : 00 AM',
        agent: ''
      }, {
        status: 'queue',
        first_name: 'Khalid',
        middle_name: 'Omar',
        last_name: 'Abdul',
        number: '0987654321',
        requested_date: '2016-05-03',
        requested_time: '9 : 00 AM',
        agent: ''
      }, {
        status: 'queue',
        first_name: 'Jose',
        middle_name: 'P',
        last_name: 'Rizal',
        number: '0987654321',
        requested_date: '2016-05-03',
        requested_time: '9 : 00 AM',
        agent: ''
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
