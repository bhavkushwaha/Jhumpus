function aboutHero() {
    const aboutHero = document.getElementById("aboutHero");
    const Container = document.createElement("div");
    const BG = document.createElement("div");
    BG.classList.add("hero-bg-c");
    Container.innerHTML = `
    <div class="innrpg-tophead-bnnr">
  <div class="inner-page-hd-bnnrs clearfix">
    <img src="Images/inner-about.jpg">
      <div class="inner-page-head-maindiv">
      <div class="container">
      <div class="row">
       <div class="col-md-12 col-sm-12">
         <div class="inner-pghead clearfix">
         <h2>About Us</h2>
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
aboutHero();
