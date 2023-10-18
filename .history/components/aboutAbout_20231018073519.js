function aboutAbout() {
  const aboutAbout = document.getElementById("About");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="inner-content-main-block clearfix">
  <div class="container">
  <div class="row">
  <div class="col-md-12 col-sm-12">
  <div class="abtpg-top-hd clearfix">
          <h2><strong>Jhumpus : </strong> Giving customers a unique experience of partnership.</h2>
          <h3>We are a young and creative company and we offer you fresh Logistics &amp; Trade Compliance ideas.</h3>
          <p style="text-align: justify;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.</p>
        </div>
  <div class="abt-hm-mndiv clearfix">
<div class="container">
 <div class="row">
  <div class="col-md-5 col-sm-12">
  <img
  class="img-fluid"
  src="./Images/img3.png"
  alt=""
  />    
  </div>
  <div class="col-md-7 col-sm-12">
   <div class="abt-hm-rgtbx wow fadeInRight clearfix animated" data-wow-duration="2s" style="visibility: visible;-webkit-animation-duration: 2s; -moz-animation-duration: 2s; animation-duration: 2s;">
     <h2>
     About Our Company
     </h2>
     <h3>Safe, Reliable and Express <span>Logistics &amp; Trade Compliance</span> Solutions that saves your
       Cost &amp; Time!</h3>
     <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
     <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim, donec pede justo.</p>
     
   </div>
  </div>
 </div>
</div>
</div>

<div class="abtpg-prt2-mndiv clearfix">
          <div class="row">
            <div class="col-md-7 col-sm-12">
              <div class="abtpg-prt2-lftbx clearfix">
                <h5>Advantages of Choosing <span>Jhumpus</span></h5>
                <p>Many businesses consider getting a 3PL provider for their global logistics and supply chain management. However, they only cater to the logistical processes of a company. By choosing 4PL Consultancy, you will receive: </p>
                <ul class="clearfix">
                  <li><i class="fa-solid fa-square-check" style="color: #f9611f;"></i>&nbsp Complete Transparency</li>
                  <li><i class="fa-solid fa-square-check" style="color: #f9611f;"></i>&nbsp Optimized Functioning</li>
                  <li><i class="fa-solid fa-square-check" style="color: #f9611f;"></i>&nbsp Data Analytics &amp; Insights</li>
                  <li><i class="fa-solid fa-square-check" style="color: #f9611f;"></i>&nbsp Software for Logistics</li>
                  <li><i class="fa-solid fa-square-check" style="color: #f9611f;"></i>&nbsp Comprehensive Resolution</li>
                  <li><i class="fa-solid fa-square-check" style="color: #f9611f;"></i>&nbsp Improved Supply Chain</li>
                  <li><i class="fa-solid fa-square-check" style="color: #f9611f;"></i>&nbsp Freight Cost Savings &amp; Import Duty savings</li>
                </ul>
                <p>These are just a few advantages of getting our expert support to manage your supply chain efficiently. Our teams work hard to deliver top-quality solutions that provide complete resolution of the issues at hand.</p>
              </div>
            </div>
            <div class="col-md-5 col-sm-12">
              <div class="abtpg-prt2-rgtbx clearfix">
                <img src="Images/whychoose23.png" title="Advantages of Choosing 4PL Consultancy" alt="Advantages of Choosing 4PL Consultancy">
              </div>
            </div>
          </div>
        </div>

</div>
</div>
</div>
</div>
  `;
aboutAbout.appendChild(Container);
}
aboutAbout();