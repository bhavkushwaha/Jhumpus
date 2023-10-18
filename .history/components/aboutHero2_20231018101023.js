function aboutHero2() {
    const aboutHero2 = document.getElementById("aboutHero");
    const Container = document.createElement("div");
    const BG = document.createElement("div");
    BG.classList.add("hero-bg");
    Container.innerHTML = `
    <div class="innrpg-tophead-bnnr">
  <div class="inner-page-hd-bnnrs clearfix">
    <img src="Images/inner-about.webp">
      <div class="inner-page-head-maindiv">
         <div class="container">
          <div class="row">
           <div class="col-md-12 col-sm-12">
             <div class="inner-pghead clearfix">
             
             </div>
           </div>
          </div>
         </div>
      </div>
  </div>
</div>
    `;
    aboutHero.appendChild(Container);
  }
  aboutHero2();
  