function aboutHero2() {
    const aboutHero = document.getElementById("aboutHero");
    const Container = document.createElement("div");
    const BG = document.createElement("div");
    BG.classList.add("hero-bg");
    Container.innerHTML = `
    <div class="container-fluid" style=
      "
      padding-left: 0px;
      padding-right: 0px;
      ">
    <div class="pages-hero-about">
              <div class="container">
                  
              </div>
          </div> 
          </div>
    `;
    aboutHero.appendChild(Container);
  }
  aboutHero2();
  