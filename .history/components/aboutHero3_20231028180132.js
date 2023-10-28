function aboutHero3() {
    const aboutHero3 = document.getElementById("aboutHero");
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
  
</div>
`;
aboutHero3.appendChild(Container);
}
aboutHero3();
