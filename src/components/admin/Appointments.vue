<template>
  <div class="appointment">
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
        <br>
        <!-- <el-tabs v-model="activeTab" @tab-click="handleSelect" style="background-color:white">
          <el-tab-pane label="QUERIES" name="queries"></el-tab-pane>
          <el-tab-pane label="SCHEDULE" name="schedules"></el-tab-pane>
        </el-tabs> -->
        <!-- <el-menu :default-active="activeTab" class="el-menu-appointment" mode="horizontal" @select="handleSelect">
          <el-menu-item index="queries">QUERIES</el-menu-item>
          <el-menu-item index="schedules">SCHEDULE</el-menu-item>
        </el-menu> -->
        <div v-if="activeTab === 'queries'">
          <el-table
            v-loading="loading"
            align="left"
            :data="appointments"
            style="width: 100%; min-height:500px">
            <el-table-column type="expand">
              <template slot-scope="props">
                <p>First Name: <b>{{props.row.first_name}}</b></p>
                <p>Middle Name: <b>{{props.row.middle_name}}</b></p>
                <p>Last Name: <b>{{props.row.last_name}}handleSelect</b></p>
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
              <template slot-scope="scope">
                <span>{{scope.row.readable_time}} </span>
              </template>
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
                  type="primary"
                  @click="changeStatus(scope.row.id, 1)">Start <i class="el-icon-check el-icon-right"></i>
                </el-button>
                <el-dropdown v-if="scope.row.status === 1" split-button type="primary" size="mini" @command="handleCommand">
                  In Progress
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="[scope.row.id, 0]">Queue</el-dropdown-item>
                    <el-dropdown-item :command="[scope.row.id, 3]">Verified</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-button v-if="scope.row.status === 3"
                  size="mini"
                  type="success"
                  >Verified <i class="el-icon-check el-icon-right"></i>
                </el-button>
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
      loading: true,
      activeTab: 'queries',
      picker: new Date(),
      dialog: false,
      appointments: []
    }
  },
  methods: {
    handleSelect (selectedTab) {
      this.activeTab = selectedTab.name
    },
    convertDate (date) {
      return this.$moment(date).format('YYYY-MM-DD')
    },
    getAppointments (date) {
      this.axios.get(process.env.API_URL + '/appointment/schedule/' + date)
      .then(response => {
        this.appointments = response.data
        this.loading = false
        console.log(this.appointments)
      })
      .catch(error => {
        console.log(error.response.data)
        this.loading = false
      })
    },
    handleCommand (command) {
      this.changeStatus(command[0], command[1])
    },
    changeStatus (apppointmentId, apppointmenStatus) {
      if (apppointmenStatus === 1) {
      }
      this.axios.post(process.env.API_URL + '/appointment/update/', {id: apppointmentId, status: apppointmenStatus})
      .then(response => {
        this.getAppointments(this.convertDate(this.picker))
      })
      .catch(error => {
        console.log(error.response.data)
      })
    },
    changeDate () {
      this.loading = true
      const convertDate = this.convertDate(this.picker)
      this.getAppointments(convertDate)
    }
  },
  mounted () {
    this.getAppointments(this.convertDate(new Date()))
  }

}
</script>

<style>
  .el-dropdown-menu--mini .el-dropdown-menu__item{
    font-size: 14px !important;
    padding: 0 35px !important;
  }
  .appointment .el-dropdown .el-button--primary{
    background-color: #e6a23c !important;
    border-color: #cf9236 !important;
  }
  .appointment .el-dropdown .el-button--primary.is-active,
  .appointment .el-dropdown .el-button--primary:active,
  .appointment .el-dropdown .el-button--primary:focus,
  .appointment .el-dropdown .el-button--primary:hover{
    background-color: #ebb563 !important;
    border-color: #ebb563 !important;
  }
</style>

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
