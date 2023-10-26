function indexHero2() {
    const indexHero2 = document.getElementById("indexHero");
    const Container = document.createElement("div");
    const BG = document.createElement("div");
    // Container.classList.add("container-fluid");
    // BG.classList.add("hero-bg");
    Container.innerHTML = `
    <div class="slider-mndiv clearfix">
    <div id="slider-animation" class="carousel slide carousel-fade" data-ride="carousel" data-pause="hover" data-interval="5000">
       <!-- Indicators -->
       <!-- <ul class="carousel-indicators">
         <li data-target="#slider-animation" data-slide-to="0" class="active"></li>
         <li data-target="#slider-animation" data-slide-to="1"></li>
         <li data-target="#slider-animation" data-slide-to="2"></li>
       </ul> -->

       <!-- The slideshow -->
       <div class="carousel-inner">
         <div class="carousel-item active">
           <img src="images/slider-1.jpg" alt="Logistics and Supply Chain Management" title="Logistics and Supply Chain Management">
             <div class="text-box">
                 <h2 class="wow zoomInRight animated" data-wow-duration="2s" style="visibility: visible;-webkit-animation-duration: 2s; -moz-animation-duration: 2s; animation-duration: 2s;">Independent <span>4PL Consultancy</span> Firm</h2>
                 <p class="wow fadeInLeft animated" data-wow-duration="2s" style="visibility: visible;-webkit-animation-duration: 2s; -moz-animation-duration: 2s; animation-duration: 2s;">We are a leading 4PL provider specializing in helping companies penetrate emerging markets worldwide, optimize their supply chain delivery models, and find gaps &amp; efficiencies in supply chain costs.</p>
             </div>
         </div>
         <div class="carousel-item">
           <img src="images/slider-2.jpg" alt="Logistics and Supply Chain" title="Logistics and Supply Chain">
              <div class="text-box">
                 <h2 class="wow zoomInRight animated" data-wow-duration="2s" style="visibility: visible;-webkit-animation-duration: 2s; -moz-animation-duration: 2s; animation-duration: 2s;">Professional International Trade Compliance Services in the UK from <span>4PL Consultancy Ltd.</span></h2>
                 <p class="wow fadeInLeft animated" data-wow-duration="2s" style="visibility: visible;-webkit-animation-duration: 2s; -moz-animation-duration: 2s; animation-duration: 2s;">We are an independent 4PL Consultancy company who specializes in simplifying your worldwide supply chain issues.</p>
             </div>
         </div>
         <div class="carousel-item">
           <img src="images/slider-3.jpg" alt="4PL Consultancy" title="4PL Consultancy">
              <div class="text-box">
                 <h2 class="wow zoomInRight animated" data-wow-duration="2s" style="visibility: visible;-webkit-animation-duration: 2s; -moz-animation-duration: 2s; animation-duration: 2s;">Solutions for All <span>Logistics &amp; Trade Compliance</span> Services.</h2>
                 <p class="wow fadeInLeft animated" data-wow-duration="2s" style="visibility: visible;-webkit-animation-duration: 2s; -moz-animation-duration: 2s; animation-duration: 2s;">We have an experienced team of trade compliance professionals to take care of emerging markets and worldwide trade compliance services.</p>
             </div>
         </div>
       </div>

       <!-- Left and right controls -->
       <a class="carousel-control-prev" href="#slider-animation" data-slide="prev">
         <span class="carousel-control-prev-icon"></span>
       </a>
       <a class="carousel-control-next" href="#slider-animation" data-slide="next">
         <span class="carousel-control-next-icon"></span>
       </a>
    </div>
    <div class="slider-btm-swirl clearfix">
      <img src="images/slider-bottom6.png">
    </div>
 </div>
    `;

    indexHero2.appendChild(Container);
    // Herosection.appendChild(BG);
  }
  indexHero2();
  
 