function Footer() {
  const Footer = document.getElementById("Footer");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row gx-4 gy-5">
          <div class="col-12 col-md-10 left-section ">
            <div class="brand-logo">
              <a class="navbar-brand" href="#">
                <img class="BrandLogo" src="./Images/logo.png" alt="" srcset="" />
              </a>
            </div>
            <div class="nav-links d-flex flex-column mt-4">
              
              <ul class="nav justify-content-left row-2">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#Features">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Pricing">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact Us</a>
                </li>
              </ul>
              <div class="copyrights mt-4">
              © 2023 Jhumpus CO LTD. All rights reserved
            </div>
          <div class="col-12 col-md-2 badges">
            <p>About Jhumpus</p>
            <div class="badges-items me-3 d-block">
              <p style="
              font-size: small;
              line-height: inherit;">
              We provide clarity in a world of trade complexity so that businesses can grow further, faster, smarter. Over 30,000 clients trust us with their customs brokerage, trade consulting, global trade management and freight needs.</p>
            </div>
          </div>
        </div>
          </div>
          </div>
        </div>
  `;
  Footer.appendChild(Container);
}
Footer();
