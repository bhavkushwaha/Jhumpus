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
         
      </div>
  </div>
  <div class="inner-page-hd-bnnrs clearfix">
    <img src="Images/inner-bnnr-4.png"  alt="Contact Us Banner">
  </div>
</div>
`;
contactHero.appendChild(Container);
}
contactHero();
