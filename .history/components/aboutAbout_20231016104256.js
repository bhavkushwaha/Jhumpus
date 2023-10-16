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
          <h2><strong>4PL Consultancy : </strong> Giving customers a unique experience of partnership.</h2>
          <h3>We are a young and creative company and we offer you fresh Logistics &amp; Trade Compliance ideas.</h3>
          <p>4PL Consultancy is a fourth party Logistics and Supply Chain Management solution provider from Crawley, West Sussex. Our sole aim is to bring efficient upgrades to the supply chain by managing the logistics operations for our clients. With a range of services, our teams have helped the clients in understanding the business processes better and scoring higher profits. </p>
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
     <p>We assemble the resources, capabilities, and technology of its own organization and other organizations, including 3PLs, to design, build and run comprehensive supply chain solutions for clients.</p>
     <p>Outsourcing to us will allow your company to focus on its core manufacturing business and higher-value projects. Because you are focused on ironing out weaknesses in the supply chain, we at 4PL  can help minimise costs by finding the best solutions for the lowest price.</p>
     
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
                  <li><i class="fa fa-check-square-o"></i>Optimized Functioning</li>
                  <li><i class="fa fa-check-square-o"></i>Data Analytics &amp; Insights</li>
                  <li><i class="fa fa-check-square-o"></i>Software for Logistics</li>
                  <li><i class="fa fa-check-square-o"></i>Comprehensive Resolution</li>
                  <li><i class="fa fa-check-square-o"></i>Improved Supply Chain</li>
                  <li><i class="fa fa-check-square-o"></i>Freight Cost Savings &amp; Import Duty savings</li>
                </ul>
                <p>These are just a few advantages of getting our expert support to manage your supply chain efficiently. Our teams work hard to deliver top-quality solutions that provide complete resolution of the issues at hand.</p>
              </div>
            </div>
            <div class="col-md-5 col-sm-12">
              <div class="abtpg-prt2-rgtbx clearfix">
                <img src="images/whychoose23.png" title="Advantages of Choosing 4PL Consultancy" alt="Advantages of Choosing 4PL Consultancy">
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