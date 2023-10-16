function Footer() {
    const Footer = document.getElementById("Footer");
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `
    <!-- Footer -->
    <div class="container-fluid">
    <footer
            class="text-center text-lg-start text-dark"
            style="background-color: #ECEFF1"
            >

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold">About Us</h6>
              <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style="width: 60px; background-color: #7c4dff; height: 2px"
                  />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <!-- Grid column -->
  
            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">Navigation</h6>
              <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style="width: 60px; background-color: #7c4dff; height: 2px"
                  />
              <p>
                <a href="./" class="text-dark">Home</a>
              </p>
              <p>
                <a href="about.html" class="text-dark">About Us</a>
              </p>
              <p>
                <a href="index.html/#Pricing" class="text-dark">Services</a>
              </p>
              <p>
                <a href="contact.html" class="text-dark">Contact Us</a>
              </p>
            </div>
            <!-- Grid column -->
  
            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">Our Services</h6>
              <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style="width: 60px; background-color: #7c4dff; height: 2px"
                  />
              <p>
                <a href="gpdm.html" class="text-dark">Global Product Data Management</a>
              </p>
              <p>
                <a href="gtc.html" class="text-dark">Global Trade Compliance</a>
              </p>
              <p>
                <a href="lm.html" class="text-dark">Logistic Management</a>
              </p>
              <p>
                <a href="io.html" class="text-dark">Import Operations</a>
              </p>
              <p>
                <a href="eo.html" class="text-dark">Export Operations</a>
              </p>
            </div>
            <!-- Grid column -->
  
            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">Contact</h6>
              <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style="width: 60px; background-color: #7c4dff; height: 2px"
                  />
              <p>Jhumpus Co Ltd</p>
            <p> 3rd Floor, BOB building,</p>
              <p><i class="fas fa-envelope mr-3"></i>Sir Williams Newton Road,</p>
              <p><i class="fas fa-phone mr-3"></i>Port Louis - 111 3-03</p>
              <p><i class="fas fa-print mr-3"></i>Mauritius</p>
              <p>+230 5856-5112</p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->
  
      <!-- Copyright -->
      <div
           class="text-center p-3"
           style="background-color: #ECEFF1"
           >
        © 2023 Copyright:
        <a class="text-dark" href=#
           >Jhumpus.com</a
          >
      </div>
      <!-- Copyright -->
    </footer>
    </div>
    <!-- Footer -->
  `;
  Footer.appendChild(Container);
}
Footer();
