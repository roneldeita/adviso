<template>
  <div class="bottom-bar container-fluid bg-dark-blue">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-4">
              <img class="logo" src="../../assets/images/Adviso_Business_Logo-02.png" alt="logo">
              <p class="address">Long Beach Office, 235 E. Broadway Ste 800, Long Beach, CA 90802</p>
              <p class="contact txt-light-blue">562.731.2312</p>
            </div>
            <div class = "col-md-4">
            </div>
            <div class="col-md-4">
              <div style="margin-left:60px;">
                <p class="quick-links text-left"><span style="text-decoration">QUIC</span>K LINKS</p>
                <p style="border-top:1px solid white; width:35px; margin-top:-15px"></p>
                <ul class="link-list text-left">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
          <hr style="border-top:1px solid grey">
          <p style="font-size:11px; font-weight:200">&copy; Adviso Tax & Business Service. All Rights Sererved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scope>
.bottom-bar{
  padding-top: 50px;
  color: #d9d9d9
}
.bottom-bar .logo{
  margin-top: -20px !important;
  width:100%;
  margin: 0px;
  margin-bottom:10px;
}
.bottom-bar .mobile{
  margin-top: 0px !important;
  height: 170px;
}
.bottom-bar .address{
  text-align: left;
  font-size: 12px;
  line-height: 16px;
}

.bottom-bar .contact{
  font-weight: 500;
   .bottom-bar font-size: 22px;
  text-align: left;
}

.bottom-bar .text-mobile{
  margin-top: 10px;
  font-size: 13px;
  text-align: left;
  font-weight: bold;
}
.quick-links{
  font-weight: 500;
  margin-top: 13px;
}
.link-list{
  list-style:none;
  margin-left: -40px;
  font-size: 10px;
  line-height: 24px;
  font-weight:300
}

.bottom-bar .btn-dark{
  background-color: black;
  border-radius: 12px;
  font-size: 12px;
  margin-bottom: 5px;
}
</style>
