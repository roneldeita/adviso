<template>
  <div class="container-fluid navbar-container" style="padding:0px">
    <div class="row no-gutters justify-content-md-center">
      <div class="col-md-7">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              <img src="../../assets/images/Adviso_500x500.png" width="160" height="45" class="d-inline-block align-top" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">ABOUT US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">SERVICES</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">OUR TEAM</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">CONTACT US</a>
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
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar-container,
.bg-light{
  background-color: #ffffff !important;
  padding-left: 0px !important;
  padding-right: 0px !important
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
.navbar-nav .active .nav-link{
  background-color: #313c44;
  color: #ffffff;
  border-radius: 3px;
}
</style>
