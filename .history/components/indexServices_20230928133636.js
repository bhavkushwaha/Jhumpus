function indexServices() {
    const indexServices = document.getElementById("Pricing");
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `
    <div class="srv-hm-mndiv clearfix">
  <div class="container">
   <div class="hm-allsec-cmn-hd clearfix">
    <h5>Our Services</h5>
    <h4>Get Absolute Professional Services of Logistics &amp; Trade Compliance</h4>
   </div>
   <div class="srvhm-mnbx clearfix">

     <div class="srv-mnbx-1 wow fadeInLeft clearfix animated" data-wow-duration="1000ms" data-wow-delay="100ms" style="visibility: visible;-webkit-animation-duration: 1000ms; -moz-animation-duration: 1000ms; animation-duration: 1000ms;-webkit-animation-delay: 100ms; -moz-animation-delay: 100ms; animation-delay: 100ms;">
      <div class="srvbx1-lft">
      <img src="Images/services1.jpg" alt="Logistics Management" title="Logistics Management">
      </div>
      <div class="srvbx1-rgt">
       <h2>Logistics Management</h2>
       <p>We meet customer demands through the planning, control, and implementation of the effective movement and storage of related supplied information of goods and services from origin to destination.</p>
       <div class="srv-a">
       <a href="about.html">Read More</a>
       </div>
      </div>
     </div>

     <div class="srv-mnbx-1 dflx wow fadeInRight clearfix animated" data-wow-duration="1000ms" data-wow-delay="100ms" style="visibility: visible;-webkit-animation-duration: 1000ms; -moz-animation-duration: 1000ms; animation-duration: 1000ms;-webkit-animation-delay: 100ms; -moz-animation-delay: 100ms; animation-delay: 100ms;">
      <div class="srvbx1-rgt order-2">
       <h2>Global Trade Compliance</h2>
       <p>Our team of Global Trade compliance professionals will analyse the complete process by which goods enter/import into a country in conformance with all import laws and regulations of emerging markets and countries worldwide.</p>
       <a href="about.html">Read More</a>
      </div>
      <div class="srvbx1-lft order-0"><img src="images/services2.jpg" alt="Global Trade Compliance" title="Global Trade Compliance"></div>
     </div>

     <div class="srv-mnbx-1 wow fadeInLeft clearfix animated" data-wow-duration="1000ms" data-wow-delay="100ms" style="visibility: visible;-webkit-animation-duration: 1000ms; -moz-animation-duration: 1000ms; animation-duration: 1000ms;-webkit-animation-delay: 100ms; -moz-animation-delay: 100ms; animation-delay: 100ms;">
      <div class="srvbx1-lft"><img src="images/services3.jpg" alt="Customs Declaration" title="Customs Declaration"></div>
      <div class="srvbx1-rgt">
       <h2>Customs Declaration</h2>
       <p>Customs declarations are a vital component to have Trade across international borders. This is a time-critical process in the supply chain, also complicated, ever evolving and not so easy protocols, hence requires time and expertise.</p>
       <a href="about.html">Read More</a>
      </div>
     </div>

   </div>
  </div>
 </div>
`;
indexServices.appendChild(Container);
}
indexServices();