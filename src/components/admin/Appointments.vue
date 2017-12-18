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
              width="110">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary">Queue</el-button>
              </template>
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
            placeholder="Pick a day">
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
      appointments: [{
        first_name: 'Ronel',
        middle_name: 'Aparri',
        last_name: 'Deita',
        number: '0987654321',
        requested_date: '2016-05-03',
        requested_time: '9 : 00 AM',
        agent: 'Chris Villanueva'
      }, {
        first_name: 'Albert',
        middle_name: 'Joy',
        last_name: 'Nakpil',
        number: '0987654321',
        requested_date: '2016-05-03',
        requested_time: '9 : 00 AM',
        agent: 'Chris Villanueva'
      }, {
        first_name: 'Miguel',
        middle_name: 'Migul',
        last_name: 'Napiza',
        number: '0987654321',
        requested_date: '2016-05-03',
        requested_time: '9 : 00 AM',
        agent: 'Chris Villanueva'
      }, {
        first_name: 'Khalid',
        middle_name: 'Omar',
        last_name: 'Abdul',
        number: '0987654321',
        requested_date: '2016-05-03',
        requested_time: '9 : 00 AM',
        agent: 'Chris Villanueva'
      }, {
        first_name: 'Jose',
        middle_name: 'P',
        last_name: 'Rizal',
        number: '0987654321',
        requested_date: '2016-05-03',
        requested_time: '9 : 00 AM',
        agent: 'Chris Villanueva'
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
  .tables-header{
    font-size: 2px;
  }
</style>
