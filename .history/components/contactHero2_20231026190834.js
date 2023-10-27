function contactHero() {
    const contactHero = document.getElementById("contactHero");
    const Container = document.createElement("div");
    const BG = document.createElement("div");
    BG.classList.add("hero-bg-c");
    Container.innerHTML = `
    <div class="slider-mndiv clearfix">
    <div id="slider-animation" class="carousel slide carousel-fade" data-ride="carousel" data-pause="hover" data-interval="5000">
       <!-- Indicators -->
       <!-- <ul class="carousel-indicators">
         <li data-target="#slider-animation" data-slide-to="0" class="active"></li>
       </ul> -->

       <!-- The slideshow -->
       <div class="carousel-inner">
         <div class="carousel-item active">
           <img src="Images/slider-1.jpg" alt="Logistics and Supply Chain Management" title="Logistics and Supply Chain Management">
             <div class="text-box">
                 <h2 class="wow zoomInRight animated" data-wow-duration="2s" style="visibility: visible;-webkit-animation-duration: 2s; -moz-animation-duration: 2s; animation-duration: 2s;">
                 Independent 
                 <span>4PL Consultancy</span> 
                 Firm</h2>
                 <p class="wow fadeInLeft animated" data-wow-duration="2s" style="visibility: visible;-webkit-animation-duration: 2s; -moz-animation-duration: 2s; animation-duration: 2s;">We are a leading 4PL provider specializing in helping companies penetrate emerging markets worldwide, optimize their supply chain delivery models, and find gaps &amp; efficiencies in supply chain costs.</p>
             </div>
         </div>
              
       </div>
 
    </div>
    <div class="slider-btm-swirl clearfix">
      <img src="Images/slider-bottom6.png">
    </div>
 </div>
`;
contactHero.appendChild(Container);
}
contactHero();
