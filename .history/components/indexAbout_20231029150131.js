function indexAbout() {
    const indexAbout = document.getElementById("About");
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `
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
       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim, Donec pede justo.</p>
       
       <div style="text-align: center;"><a href="about.html">Read More</a></div>

     </div>
    </div>
   </div>
  </div>
 </div>
    `;
  indexAbout.appendChild(Container);
}
indexAbout();