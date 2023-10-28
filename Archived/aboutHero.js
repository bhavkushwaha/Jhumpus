function aboutHero() {
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
aboutHero();
{/* <div>
  <img src="./Images/imgbg.jpg" class="img-fluid" alt="..." width = "100%">
  </div>      */}

  // <div class="pages-title">
  //                   <h1>About Us</h1>
  //                   <div class="page-nav">
  //                       <p>Home &nbsp; | &nbsp; About Us</p>
  //                   </div>
  //               </div>