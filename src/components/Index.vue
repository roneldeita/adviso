<template>
  <div>
    <div id="home">
      <el-carousel :interval="5000" arrow="never" height="100vh">
        <el-carousel-item v-for="banner in banners" :key="banner.id" >
          <div class="background-img" :style="{ 'background-image': 'url(' + banner.img + ')' }">
            <div class="container-fluid">
              <div v-if="banner.id === 1">
                <div class="row">
                  <div class="col-md-6 text-left banner1-content text-center">
                    <div class="opacity-bg">
                      <p class="title">SECURE.</p>
                      <p class="title">ACCURATE.</p>
                      <p class="title">TRUSTWORTHY.</p>
                      <p class="subtitle1">Your taxes are personal. Shouldn't</p>
                      <p class="subtitle1">your experience be as well?</p>
                      <a href="#appointment" class="btn btn-primary">Setup a Free Consultation</a>
                      <p class="subtitle2">Find out the many benefits with being</p>
                      <p class="subtitle2">part of the ADVISO family. Schedule a</p>
                      <p class="subtitle2"><i>FREE CONSULTATION TODAY!</i></p>
                    </div>
                  </div>
                  <div class="col-md-6" style="display: flex; align-items: center; justify-content:center;">
                    <div class="bg-dark-blue" style="margin-top:60vh; padding:10px 25px; border-radius:10px">
                      <p style="margin:0; font-family: Times;"><i>"Proud to be part of the Adviso Family"</i></p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="banner.id === 2">
                <div class="row">
                  <div class="col-md-6" style="display: flex; align-items: center; justify-content:center;">
                    <div class="bg-dark-blue" style="margin-top:60vh; padding:5px 25px; border-radius:10px">
                      <p style="margin:0; font-family: Times;"><i>Laura Guerrero</i></p>
                      <p style="margin:0; font-family: Times;"><i>Enrolled Agent - Partner</i></p>
                    </div>
                  </div>
                  <div class="col-md-6 text-left banner2-content text-center">
                    <div class="opacity-bg">
                      <p class="title">EVERY RETURN</p>
                      <p class="title">IS REVIEWED BY AN</p>
                      <p class="title">ENROLLED AGENT (EA)</p>
                      <img src="../assets/images/EA_logo.jpg" class="img-fluid" style="max-width:350px; max-height:80px; margin-bottom:5px;" />
                      <p class="subtitle">*Enrolled Agents are authorized to represent a</p>
                      <p class="subtitle">taxpayer before the IRS, and holds the highest</p>
                      <p class="subtitle">credentials awarded by the IRS.</p>
                      <a href="#appointment" class="btn btn-primary">Setup a Free Consultation</a>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="banner.id === 3">
                <div class="row">
                  <div class="col-md-6 text-left banner3-content text-center">
                    <div class="opacity-bg">
                      <p class="title">OPEN ALL YEAR!</p>
                      <p class="subtitle1">Life's situations never stops, so why</p>
                      <p class="subtitle1">should we? As many tax offices close for</p>
                      <p class="subtitle1">the season, we stay open all year long to</p>
                      <p class="subtitle1">take your calls and meet with you if</p>
                      <p class="subtitle1">needed. It's what family is all about!</p>
                      <a href="#appointment" class="btn btn-primary">Setup a Free Consultation</a>
                    </div>
                  </div>
                  <div class="col-md-6" style="display: flex; align-items: center; justify-content:center;">
                    <div class="bg-dark-blue" style="margin-top:60vh; padding:5px 25px; border-radius:10px">
                      <p style="margin:0; font-family: Times;"><i>Christopher Villanueva</i></p>
                      <p style="margin:0; font-family: Times;"><i>Business Consultant - Partner</i></p>
                    </div>
                  </div>
                </div>
              </div>
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
                <p style="font-weight:400">Here at Adviso, you’re seen as family. Taxes and various business hurdles can often take you away from what “you” love.  We believe in providing our clients a peace of mind by offering a service that is catered to your unique situation and is built around your specific needs.  Reach out to us today for a free consultation to find out how Adviso can get you back to doing what you love, and leave the stresses of taxes and accounting to us.</p>
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
                <img src="../assets/images/Start_Up_Icon.png" alt="" style="width:50%; margin-top:30px;">
              </div>
              <div class="col-md-6 text-left">
                <div style="flex-direction:row; display:flex; margin-top:25px">
                  <i class="icon pe-7s-headphones" style="margin-right : 10px"></i>
                  <h4 style="justify-self : center;">Start-Up Business Consulting</h4>
                </div>
                <p style="font-weight:500">Don’t know where to begin? No problem! We’ll help you every step of the way from idea to execution. </p>
                <ul style="margin-left:-20px">
                  <li>Business Plans</li>
                  <li>Business Consulting</li>
                  <li>DBA Setup</li>
                  <li>EIN Setup</li>
                  <li>Business Account Setup</li>
                  <li>Business Formations</li>
                  <li>Business License Setup</li>
                </ul>
              </div>
            </div>
            <div class="row" style="margin-bottom : 100px">
              <div class="col-md-6" style="text-align : left">
                <div style="flex-direction :row; display : flex;">
                  <i class="icon pe-7s-calculator" style="margin-right : 2px"></i>
                  <h4 style="margin-top:10px">Tax Preparation</h4>
                </div>
                <p style="font-weight:500">We offer preparation services for both individual and business tax  returns. All services are backed with free Audit representation* </p>
                <ul style="margin-left:-20px">
                  <li>Free Tax Consultations</li>
                  <li>Individual Tax Returns</li>
                  <li>Business Tax Returns</li>
                  <li>Prepaid Card Option</li>
                  <li>No Upfront Fee Option</li>
                  <li>Refund Advance Option</li>
                </ul>
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
                <p style="font-weight:500">Received a notice from the IRS? One of our Enrolled Agents will be able to assist you every step of the way. </p>
                <ul style="margin-left:-20px">
                  <li>Free Consultation</li>
                  <li>Penalty Abatement</li>
                  <li>Audit Representation</li>
                  <li>Innocent Spouse Relief</li>
                  <li>Installmemt Plans</li>
                  <li>State Tax Issues</li>
                  <li>Federal Tax Issues</li>
                  <li>Offer in Compromise</li>
                  <li>Currently not collectible</li>
                </ul>
              </div>
            </div>
            <div class="row" style="margin-bottom : 100px">
              <div class="col-md-6" style="text-align : left">
                <div style="flex-direction :row; display : flex;">
                  <i class="icon pe-7s-bookmarks" style="margin-right : 10px"></i>
                  <h4 style="margin-top:10px">Bookkeeping</h4>
                </div>
                <p style="font-weight:500">Maintaining proper books is critical to any business, big or small. Whether you just need someone to clean up your books, or need someone regularly maintaining them, we have you covered. </p>
                <ul style="margin-left:-20px">
                  <li>Payroll Setup</li>
                  <li>Financial Statements</li>
                  <li>Sales Tax</li>
                  <li>Reconcile Bank Accounts</li>
                  <li>Cleaning up of Books</li>
                </ul>
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
                <div style="font-size:24px">
                  <a href="https://www.yelp.com/biz/adviso-tax-and-business-services-long-beach" target="_blank" class="txt-dark-blue"><i class="fa fa-yelp" aria-hidden="true" style="padding:0 10px;"></i></a>
                  <a href="https://www.facebook.com/advisotaxandbusinessservices/" target="_blank" class="txt-dark-blue"><i class="fa fa-facebook-square" aria-hidden="true" style="padding:0 10px;"></i></a>
                  <a href="https://www.instagram.com/advisotax/" target="_blank" class="txt-dark-blue"><i class="fa fa-instagram" aria-hidden="true" style="padding:0 10px;"></i></a>
                </div>

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
import bannerImg1 from '../assets/images/homepage/Web_Banner1.jpg'
import bannerImg2 from '../assets/images/homepage/Web_Banner2.jpg'
import bannerImg3 from '../assets/images/homepage/Web_Banner3.jpg'

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
        { id: 2, img: bannerImg2 },
        { id: 3, img: bannerImg3 }
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
    color: #ffffff;
  }
  .el-carousel .subtitle1{
    font-size: 20px;
    font-weight: 400;
    margin: 0px;
  }
  .el-carousel .subtitle2{
    font-size: 14px;
    font-weight: 200;
    margin: 0px;
  }
  .banner1-content,
  .banner3-content{
    height:110vh;
    padding:0;
    display:flex;
    align-items:center;
  }
  .banner2-content{
    height:110vh;
    padding:0;
    display:flex;
    align-items:center;
    justify-content: flex-end
  }
  .banner2-content .subtitle{
    font-size: 14px;
    font-weight: 300;
    margin: 0px;
  }
  .banner1-content .title,
  .banner3-content .title{
    font-size: 38px;
    line-height: 30px;
    font-weight: 700;
  }
  .banner2-content .title{
    font-size: 28px;
    line-height: 24px;
    font-weight: 700;
  }
  .banner1-content .opacity-bg{
    background-color: rgba(49, 60, 68, 0.7);
    padding:55px 70px 45px 220px;
  }
  .banner2-content .opacity-bg{
    background-color: rgba(49, 60, 68, 0.7);
    padding:50px 220px 40px 70px;
  }
  .banner3-content .opacity-bg{
    background-color: rgba(49, 60, 68, 0.7);
    padding:90px 80px 80px 220px;
  }
  .banner1-content .btn-primary,
  .banner2-content .btn-primary,
  .banner3-content .btn-primary{
    margin:12px 0;
    padding-left:40px;
    padding-right:40px
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
