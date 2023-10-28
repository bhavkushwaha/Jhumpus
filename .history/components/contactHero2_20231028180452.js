function contactHero() {
    const contactHero = document.getElementById("contactHero");
    const Container = document.createElement("div");
    const BG = document.createElement("div");
    BG.classList.add("hero-bg-c");
    Container.innerHTML = `
    <div class="innrpg-tophead-bnnr">
  <div class="inner-page-hd-bnnrs clearfix">
    <img src="Images/inner-contact.jpg">
      <div class="inner-page-head-maindiv">
      <div class="container">
          <div class="row">
           <div class="col-md-12 col-sm-12">
             <div class="inner-pghead clearfix">
             <h2>Contact Us</h2>
             </div>
           </div>
          </div>
         </div>
      </div>
  </div>
  
</div>
`;
contactHero.appendChild(Container);
}
contactHero();
