<template>
  <div class="container-fluid fixed-top navbar-container">
    <a href="https://app.canopytax.com/#/login" class="pull-right btn-login d-none d-lg-block">Adviso Client Login</a>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-8">
          <nav id="adviso-topbar" class="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
              <a class="navbar-brand" href="#">
                <img src="../../assets/images/Adviso_500x500.png" width="160" height="45" class="d-inline-block align-top" alt="">
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#home">HOME</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#about">ABOUT US</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#services">SERVICES</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#contact">CONTACT US</a>
                  </li>
                  <li class="nav-item d-block d-lg-none">
                    <router-link :to="{ name: 'login'}" class="nav-link">Login/Register</router-link >
                  </li>
                </ul>
                <!-- <ul class="navbar-nav border">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Login / Register</a>
                  </li>
                </ul> -->
              </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar-container,
.bg-light{
  background-color: #ffffff !important;
  padding-left: 5px !important;
  padding-right: 5px !important
}
.navbar-container{
  border-bottom:2px solid #cccccc
}
.navbar-nav .nav-item .nav-link{
  margin: 0 1px;
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 12px;
  font-weight: bold;
}
.navbar-nav .nav-item .active{
  background-color: #313c44;
  color: #ffffff;
  border-radius: 3px;
}
.btn-login{
  position: absolute;
  right: 0;
  font-size: 12px;
  font-weight: bold;
  margin-top: 26px;
  text-decoration: none;
  color:rgba(0,0,0,.5) !important;
  margin-right: 25px;
}

.btn-login:hover{
  color:#313c44 !important
}

</style>
