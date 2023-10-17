function Navbar2() {
  const Navbar2 = document.getElementById("Navbar");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div id="menuF" class="head-mid-strip default clearfix">
  <div class="container-fluid">
   <div class="head-mid-innr">
     <div class="row">
      <div class="col-md-3 col-sm-3 lonav-xs-3">
        <div class="pl-logo">
          <a href="index.html"><img src="Images/logo.png"></a>
        </div>
      </div>
      <div class="col-md-9 col-sm-9 lonav-xs-9">
       <div class="hd-nav-quote-mndiv clearfix">
        <div class="hdnav-lft-bx clearfix">
          <div id="cssmenu"><div id="menu-button"></div>
            <ul class="pull-right">
              <li class="active"><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="hdqut-rgt-bx">
          <div class="hdqut-btn"><a href="get-quote.php">Get Free Quote</a></div>
        </div>
       </div>
      </div>
     </div>
   </div>
  </div>
  
 </div>
    `;
  Navbar2.appendChild(Container);
}
Navbar2();