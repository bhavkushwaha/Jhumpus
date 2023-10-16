function indexAbout() {
    const indexAbout = document.getElementById("About");
    const Container = document.createElement("div");
    Container.classList.add("container", "py-5");
    Container.innerHTML = `
    <div class="abt-hm-mndiv clearfix">
  <div class="container">
   <div class="row">
    <div class="col-md-5 col-sm-12">
     <div class="abt-hm-lftbx wow fadeInLeft clearfix animated" data-wow-duration="2s" style="visibility: visible;-webkit-animation-duration: 2s; -moz-animation-duration: 2s; animation-duration: 2s;"><img src="images/about1.png" alt="Logistics &amp; Trade Compliance" title="Logistics &amp; Trade Compliance"></div>
    </div>
    <div class="col-md-7 col-sm-12">
     <div class="abt-hm-rgtbx wow fadeInRight clearfix animated" data-wow-duration="2s" style="visibility: visible;-webkit-animation-duration: 2s; -moz-animation-duration: 2s; animation-duration: 2s;">
       <h2>About Our Company</h2>
       <h3>Safe, Reliable and Express <span>Logistics &amp; Trade Compliance</span> Solutions that saves your
         Cost &amp; Time!</h3>
       <p>We assemble the resources, capabilities, and technology of its own organization and other organizations, including 3PLs, to design, build and run comprehensive supply chain solutions for clients.</p>
       <p>Outsourcing to us will allow your company to focus on its core manufacturing business and higher-value projects. Because you are focused on ironing out weaknesses in the supply chain, we at 4PL  can help minimise costs by finding the best solutions for the lowest price.</p>
       <a href="about-us.php">Read More</a>
     </div>
    </div>
   </div>
  </div>
 </div>
    `;
  indexAbout.appendChild(Container);
}
indexAbout();