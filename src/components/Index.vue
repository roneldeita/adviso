<template>
  <div>
    <div id="home">
      <el-carousel :interval="5000" arrow="never" height="100vh">
        <el-carousel-item v-for="banner in banners" :key="banner.id" >
          <div class="background-img" :style="{ 'background-image': 'url(' + banner.img + ')' }">
            <div class="container-fluid">
              <div v-if="banner.id === 1">
                <div class="row">
                  <div class="col-md-6 text-left border" style="padding-top:50vh;">
                    <p class="title">Your taxes done right.</p>
                    <p class="subtitle">Find out what it means to be part of the Adviso Family. </p>
                    <p class="subtitle">Schedule a FREE Tax, Accounting or Business Consultation today.</p>
                    <br>
                    <a href="#appointment" class="btn btn-dark">Setup Free Consultation</a>
                  </div>
                </div>
              </div>
              <div v-if="banner.id === 2"> 2</div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="about" class="intro">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-12">
                <img class="img-fluid mx-auto" src="../assets/images/certificate.jpg" alt="certificate" style="display:block; width:500px" />
                <br>
                <br>
              </div>
              <div class="col-md-5">
                <img src="../assets/images/focus.png" alt="" style="width:80%">
              </div>
              <div class="col-md-7">
                <p class="title">YOU ARE OUR FOCUS</p>
                <p>Here at Adviso, you’re seen as family. Taxes and various business hurdles can often take you away from what “you” love.  We believe in providing our clients a peace of mind by offering a service that is catered to your unique situation and is built around your specific needs.  Reach out to us today for a free consultation to find out how Adviso can get you back to doing what you love, and leave the stresses of taxes and accounting to us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="profile" class="profile bg-dark-blue">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-8">
            <div class="row justify-content-md-center">
              <div class="col-md-4">
                <p class="count">10</p>
                <p>Years of Experience</p>
              </div>
              <div class="col-md-4">
                <p class="count">150</p>
                <p>Satisfied Clients</p>
              </div>
              <div class="col-md-4">
                <p class="count">15</p>
                <p>Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div id="services" class="services">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-8">
            <p class="title text-center">OUR SERVICES</p>
            <br>
            <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p> -->
          </div>
        </div>
        <div class="row justify-content-md-center" style="margin-top:50px">
          <div class="col-md-8">
            <div class="row" style="margin-bottom : 100px">
              <div class="col-md-6">
                <img src="../assets/images/Start_Up_Icon.png" alt="" style="width:50%">
              </div>
              <div class="col-md-6 text-left">
                <div style="flex-direction:row; display:flex; margin-top:25px">
                  <i class="icon pe-7s-headphones" style="margin-right : 10px"></i>
                  <h4 style="justify-self : center;">Start-Up Business Consulting</h4>
                </div>
                <p>Don’t know where to begin? No problem! We’ll help you every step of the way from idea to execution. </p>
              </div>
            </div>
            <div class="row" style="margin-bottom : 100px">
              <div class="col-md-6" style="text-align : left">
                <div style="flex-direction :row; display : flex;">
                  <i class="icon pe-7s-calculator" style="margin-right : 2px"></i>
                  <h4 style="margin-top:10px">Tax Preparation</h4>
                </div>
                <p>We offer preparation services for both individual and business tax  returns. All services are backed with free Audit representation* </p>
              </div>
              <div class="col-md-6">
                <img src="../assets/images/TaxPreparation_Icon.png" alt="" style="width:50%">
              </div>
            </div>
            <div class="row" style="margin-bottom : 100px">
              <div class="col-md-6">
                <img src="../assets/images/TaxResolution_Icon.png" alt="" style="width:50%">
              </div>
              <div class="col-md-6" style="text-align : left">
                <div style="flex-direction :row; display : flex;">
                  <i class="icon pe-7s-key" style="margin-right : 10px"></i>
                  <h4 style="justify-self : center; margin-top:15px">Tax Resolution</h4>
                </div>
                <p>Received a notice from the IRS? One of our Enrolled Agents will be able to assist you every step of the way. </p>
              </div>
            </div>
            <div class="row" style="margin-bottom : 100px">
              <div class="col-md-6" style="text-align : left">
                <div style="flex-direction :row; display : flex;">
                  <i class="icon pe-7s-bookmarks" style="margin-right : 10px"></i>
                  <h4 style="margin-top:10px">Bookkeeping</h4>
                </div>
                <p>Maintaining proper books is critical to any business, big or small. Whether you just need someone to clean up your books, or need someone regularly maintaining them, we have you covered. </p>
              </div>
              <div class="col-md-6">
                <img src="../assets/images/Bookkeeping_Icon.png" alt="" style="width:50%">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="appointment" class="appointment">
      <br>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-8">
            <div class="row justify-content-md-center">
              <div class="col-md-12">
                <p class="title txt-light-blue">GET STARTED TODAY</p>
                <p>Select a date and time for one of our representatives to call back</p>
                <br>
              </div>
              <div class="col-md-6" style="justify-content:center;">
                <img src="../assets/images/CallCenter.png" alt="" style="width:80%;height:75%;margin-top : 60px">
              </div>
              <div class="col-md-6 text-left">
                <register-form></register-form>
                <!-- <form>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="First Name">
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Last Name">
                  </div>
                  <div class="form-group">
                    <select class="form-control">
                      <option>Country</option>
                      <option>United States</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Contact Number">
                  </div>
                  <br>
                  <button type="submit" class="btn btn-dark btn-block">Request Appointment</button>
                </form> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="team" class="team">
      <div class="row justify-content-md-center" style="margin:0px">
        <div class="col-md-7">
          <p class="title text-center"><span class="txt-light-blue">OUR</span> TEAM</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <div class="row" style="margin-top:80px">
            <div class="col-md-3">
              <img class="avatar" src="/static/avatar.png" alt="avatar">
              <p class="name">JOHN DOE</p>
              <p class="position">Chief Executive Officer</p>
            </div>
            <div class="col-md-3">
              <img class="avatar" src="/static/avatar.png" alt="avatar">
              <p class="name">JOHN DOE</p>
              <p class="position">Chief Executive Officer</p>
            </div>
            <div class="col-md-3">
              <img class="avatar" src="/static/avatar.png" alt="avatar">
              <p class="name">JOHN DOE</p>
              <p class="position">Chief Executive Officer</p>
            </div>
            <div class="col-md-3">
              <img class="avatar" src="/static/avatar.png" alt="avatar">
              <p class="name">JOHN DOE</p>
              <p class="position">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="testimonial">
      <div class="row justify-content-md-center" style="margin:0px">
        <div class="col-md-7">
          <p class="title text-center">WHAT OUR CLIENTS SAY</p>
        </div>
      </div>
    </div> -->
    <div id="contact" class="contact">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-8">
            <p class="title text-center">CONTACT US</p>
            <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p> -->
            <div class="row" style="margin-top:80px">
              <div class="col-md-8">
                <h5 class="text-left" style="margin-bottom:20px">SEND US A MESSAGE</h5>
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="form-group col-md-6">
                      <input type="email" class="form-control" placeholder="Email">
                    </div>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Subject">
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" placeholder="Message" rows="7"></textarea>
                  </div>
                  <button type="submit" class="btn btn-dark pull-left" style="padding-left:60px;padding-right:60px; margin-top:8px">SUBMIT</button>
                </form>
              </div>
              <div class="col-md-4 text-left" style="margin-top:40px;">
                  <ul class="contact-list">
                    <li>
                      <p class="icon pe-7s-map-marker"></p>
                      Long Beach Office, 235 E. Broadway Ste 800, Long Beach, CA 90802
                    </li>
                    <li>
                      <p class="icon pe-7s-mail"></p>
                      info@advisoonline.com
                    </li>
                    <li>
                      <p class="icon pe-7s-call"></p>
                      562.731.2312
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="map">
      <gmap-map style="width: 100%; height: 400px;z-index:1" :zoom="zoom" :options="{styles:style}" :center="marker">
        <gmap-marker
          :draggable="false"
          :clickable="false"
          :position="marker"
          ></gmap-marker>
      </gmap-map>
    </div>
    <div class="newsletter">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-6">
                <h5>SIGN UP FOR NEWSLETTER</h5>
                <p>We will send you updates, just leave us your email.</p>
              </div>
              <div class="col-md-6">
                <div class="input-group" style="margin-top:13px">
                  <input type="text" class="form-control" placeholder="Your Email Address">
                  <span class="input-group-btn">
                    <button class="btn btn-dark" type="button">Subscribe</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from './RegisterForm.vue'
import mapStyle from '../../static/json/map.json'
import bannerImg1 from '../assets/images/homepage/web_banner1.jpg'
import bannerImg2 from '../assets/images/homepage/web_banner2.jpg'

export default {
  name: 'index',
  data () {
    return {
      scrollPos: 0,
      zoom: 11,
      marker: {lat: 33.770098, lng: -118.189764},
      style: mapStyle,
      banners: [
        { id: 1, img: bannerImg1 },
        { id: 2, img: bannerImg2 }
      ]
    }
  },
  methods: {
    subscribe: function (e) {
      e.preventDefault()
    }
  },
  components: { RegisterForm }
}
</script>

<style scoped>
  .el-carousel .background-img{
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .el-carousel .title{
    font-size: 40px;
    line-height: 38px;
    font-weight: 800;
  }
  .el-carousel .subtitle{
    margin: 0px;
  }
  .el-carousel .btn-dark{
    padding-left: 50px;
    padding-right: 50px;
  }
  .intro{
    background-color: #ffffff;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .intro .title{
    text-align: left;
  }
  .intro p{
    text-align: justify;
  }
  .intro p.title,
  .services p.title,
  .appointment .title,
  .team .title,
  .testimonial .title,
  .contact .title{
    font-size: 28px;
    line-height: 28px;
    font-weight: 700;
  }
  .services{
    background-color: #ffffff;
    padding-top: 100px;
  }
  .services .icon{
    font-size: 50px;
  }
  .profile{
    padding-top: 80px;
    padding-bottom: 80px;
    color: #ffffff;
  }
  .profile .count{
    font-size: 38px;
    font-weight: 600;
    line-height: 34px;
  }
  .appointment{
    background-color: #ffffff;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .appointment img{
    height: 410px
  }
  .appointment .form-control{
    outline: none;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
    border-radius: 0px;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    padding-left: 0px;
    border-bottom: 1px solid grey
  }
  .team{
    background-color: #ffffff;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .team .avatar{
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .team .name{
    padding-top: 20px;
    font-size: 14px;
    line-height: 14px;
    font-weight: bold;
  }
  .team .position{
    font-size: 12px;
    line-height: 12px
  }
  .testimonial{
    background-image: url('/static/Client_Image-01.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px
  }
  .testimonial .title{
    color: #ffffff;
    margin-top: 50px;
  }
  .contact,
  .map{
    background-color: #ffffff;
    padding-top: 100px;
  }
  .contact .form-control,
  .newsletter .form-control{
    outline: none;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
    border-radius: 0px;
  }
  .contact .contact-list {
    list-style:none; margin-left:-5px; font-size:14px;
  }
  .contact .contact-list li{
    margin-bottom:25px
  }
  .contact .contact-list .icon{
    float:left;
    margin-left:-35px;
    margin-right: 5px;
    font-size:22px;
  }
  .contact .contact-list .pe-7s-map-marker{
    margin-top: 5px;
  }
  .contact .contact-list .pe-7s-mail{
    margin-top: 0px;
  }
  .contact .contact-list .pe-7s-call{
    margin-top: -1px;
  }
  .newsletter{
    text-align: left;
    background-color: #ffffff;
    padding-top: 50px;
    padding-bottom: 30px;
  }
</style>
