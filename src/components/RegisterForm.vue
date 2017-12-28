<template>
  <div class="register-form"
    v-loading="submitLoading"
    element-loading-text="Submitting..." style="padding:5px">
    <el-form :model="appointmentForm" :rules="appointmentRules" ref="appointmentForm">
      <!-- <div class="form-row">
        <div class="form-group col-md-6">
          <el-form-item label="" prop="date">
            <el-date-picker
              v-model="appointmentForm.date"
              type="date"
              placeholder="Pick a day"
              :picker-options="dateOptions">
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="form-group col-md-6">
          <el-form-item label="" prop="time">
            <el-time-select
              placeholder="Pick your time"
              v-model="appointmentForm.time"
              :picker-options="{
                start: '09:30',
                step: '00:30',
                end: '16:30'
              }">
            </el-time-select>
          </el-form-item>
        </div>
      </div> -->
      <div class="form-group">
        <el-form-item label="" prop="date">
          <el-date-picker
            v-model="appointmentForm.date"
            type="date"
            placeholder="Pick a day"
            :picker-options="dateOptions"
            style="width:100%"
            @blur="getDisabledTime()"
            >
          </el-date-picker>
        </el-form-item>
      </div>
      <div class="form-group">
        <el-form-item label="" prop="time">
          <el-select placeholder="Pick your time" v-model="appointmentForm.time" style="width:100%">
            <el-option v-for="item in allowedTime"  :disabled="disabledTime.includes(item.time)" :value="item.time" :key="item.time">{{item.time}}</el-option>
          </el-select>
          <!-- <el-time-select
            placeholder="Pick your time"
            v-model="appointmentForm.time"
            :picker-options="{
              start: '09:30',
              step: '00:30',
              end: '16:30'
            }"
            style="width:100%">
          </el-time-select> -->
        </el-form-item>
      </div>
      <div class="form-group">
        <el-form-item label="" prop="first_name">
          <el-input placeholder="First Name" v-model="appointmentForm.first_name" required></el-input>
        </el-form-item>
      </div>
      <div class="form-group">
        <el-form-item label="" prop="last_name">
          <el-input placeholder="Last Name" v-model="appointmentForm.last_name"></el-input>
        </el-form-item>
      </div>
      <div class="form-group">
        <el-form-item label="" prop="email">
          <el-input placeholder="Email" v-model="appointmentForm.email"></el-input>
        </el-form-item>
      </div>
      <div class="form-group">
        <el-form-item label="" prop="contact">
          <el-input type="number" :controls="false"  placeholder="Phone Number" v-model.number="appointmentForm.contact"></el-input>
        </el-form-item>
      </div>
      <br>
      <el-button type="submit" v-on:click="handleAppointment('appointmentForm')">Request Call Back</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'register-form',
  data () {
    return {
      appointmentForm: {
        date: '',
        time: '',
        first_name: '',
        last_name: '',
        email: '',
        contact: ''
      },
      allowedTime: [],
      disabledTime: [],
      submitLoading: false,
      appointmentRules: {
        first_name: [
          { required: true, message: 'Your first name is required', trigger: 'blur' },
          { min: 0, max: 100, message: 'Length should not exceed to 50 characters', trigger: 'blur' }
        ],
        last_name: [
          { required: true, message: 'Your last name is required', trigger: 'blur' },
          { min: 0, max: 100, message: 'Length should not exceed to 50 characters', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Your email is required', trigger: 'blur' },
          { type: 'email', message: 'Must be of type email', trigger: 'blur' }
        ],
        contact: [
          { required: true, message: 'Your phone number is required', trigger: 'blur' },
          { type: 'number', message: 'Must be of type number', trigger: 'blur' }
        ],
        date: [
          { required: true, message: 'Your desired date is required', trigger: 'change' }
        ],
        time: [
          { required: true, message: 'Your desired time is required', trigger: 'change' }
        ]
      },
      dateOptions: {
        disabledDate (time) {
          // console.log(['2017/12/10'])
          // return [Date.parse('2017/12/10'), Date.parse('2017/12/12')].includes(time.getTime())
          // console.log(time.getTime()) // the date from date picker
          // console.log() // the date todaty
          // return time.getTime() === Date.parse('2017/12/10')
        }

      }
    }
  },
  methods: {
    getDate (date) {
      return this.$moment(date).format('YYYY-MM-DD')
    },
    getTime (date, time) {
      const convertDate = this.$moment(date).format('YYYY-MM-DD')
      const hour = this.$moment(convertDate + ' ' + time).format('h')
      const min = this.$moment(convertDate + ' ' + time).format('mm')
      const clock = this.$moment(convertDate + ' ' + time).format('a')
      return hour + ' : ' + min + ' ' + clock.toUpperCase()
    },
    resetForm () {
      for (var key in this.appointmentForm) {
        this.appointmentForm[key] = null
      }
    },
    getDisabledTime () {
      const allowedTime = [
        {time: '09 : 00 AM'},
        {time: '09 : 30 AM'},
        {time: '10 : 00 AM'},
        {time: '10 : 30 AM'},
        {time: '11 : 00 AM'},
        {time: '11 : 30 AM'},
        {time: '12 : 00 PM'},
        {time: '12 : 30 PM'},
        {time: '01 : 00 PM'},
        {time: '01 : 30 PM'},
        {time: '02 : 00 PM'},
        {time: '02 : 30 PM'},
        {time: '03 : 00 PM'},
        {time: '03 : 30 PM'},
        {time: '04 : 00 PM'}
      ]
      this.allowedTime = allowedTime
      this.axios.get(process.env.API_URL + '/appointment/' + this.getDate(this.appointmentForm.date))
      .then(response => {
        let disabledTime = []
        response.data.time.forEach(item => {
          disabledTime.push(item.readable_time)
        })
        this.disabledTime = disabledTime
      }).catch(error => {
        console.log(error)
      })
    },
    handleAppointment (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitLoading = true
          var copyData = Object.assign({}, this.appointmentForm)
          copyData.date = this.getDate(copyData.date)
          copyData.contact = copyData.contact.toString()
          this.axios.post(process.env.API_URL + '/appointment', copyData)
          .then(response => {
            if (response.data.message === 'Success') {
              this.$alert('Congrats, Your request was submitted. One of our representative will contact you to set you up!', 'Success!', { confirmButtonText: 'OK', type: 'success' })
              this.resetForm()
              this.submitLoading = false
            }
          }).catch(error => {
            this.$alert(error.response.data.message, 'Oops!', { confirmButtonText: 'OK', type: 'error' })
            this.submitLoading = false
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style>
  .register-form .el-form-item .el-input__inner{
    background: transparent !important;
    outline: none;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
    border-radius: 0px;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    padding-left: 0px;
    border-color: grey;
  }
  .register-form .el-form-item.is-success .el-input__inner {
    border-color: #67c23a;
  }
  .register-form .el-form-item.is-error .el-input__inner {
    border-color: #fa5555;
  }

  .register-form .form-group .el-date-editor .el-input__inner{
    padding-left: 30px;
  }
  .register-form .el-form-item .el-form-item__content{
    margin-left: 0px !important
  }
  .register-form .el-button{
    width:100%;
    background-color: #313c44;
    color: #ffffff;
    font-weight: 300;
  }
</style>

<style scoped>

</style>
