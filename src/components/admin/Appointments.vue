<template>
  <div>
    <div class="row no-gutters">
      <div class="col-md-12 appointment-container">
        <!-- <el-input placeholder="" prefix-icon="el-icon-search" id="search"></el-input> -->
        <div class="block text-left">
          <el-date-picker
            v-model="picker"
            placeholder="Pick a day"
            @change="changeDate()">
          </el-date-picker>
        </div>
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
                <p>Contact: <b>{{ props.row.contact }}</b></p>
                <p>Email: <b>{{ props.row.email }}</b></p>
              </template>
            </el-table-column>
            <el-table-column
              label="DATE"
              prop="date"
              width="100">
            </el-table-column>
            <el-table-column
              label="TIME"
              prop="readable_time"
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
              prop="contact"
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
                <el-button v-if="scope.row.status === 0"
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
      appointments: []
    }
  },
  methods: {
    handleSelect (selectedTab) {
      this.activeTab = selectedTab
    },
    getAppointments (date) {
      this.axios.get(process.env.API_URL + '/appointment/schedule/' + date)
      .then(response => {
        this.appointments = response.data
      })
      .catch(error => {
        console.log(error.response.data)
      })
    },
    changeDate () {
      const convertDate = this.$moment(this.picker).format('YYYY-MM-DD')
      this.getAppointments(convertDate)
    }
  },
  mounted () {
    this.getAppointments('2017-12-26')
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
