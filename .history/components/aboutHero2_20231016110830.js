function aboutHero2() {
    const aboutHero2 = document.getElementById("aboutHero");
    const Container = document.createElement("div");
    const BG = document.createElement("div");
    BG.classList.add("hero-bg");
    Container.innerHTML = `
    <div class="innrpg-tophead-bnnr">
  <div class="inner-page-hd-bnnrs clearfix">
    <img src="images/inner-about.jpg">
      <div class="inner-page-head-maindiv">
         <div class="container">
          <div class="row">
           <div class="col-md-12 col-sm-12">
             <div class="inner-pghead clearfix">
             <h2>About Us</h2>
              <ul>
               <li><a href="index.php">Home</a></li>
               <li class="active">About Us</li>
              </ul>
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
  