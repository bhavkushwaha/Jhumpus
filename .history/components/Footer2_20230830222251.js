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
                <a href="#!" class="text-dark">Home</a>
              </p>
              <p>
                <a href="#!" class="text-dark">About Us</a>
              </p>
              <p>
                <a href="#!" class="text-dark">Services</a>
              </p>
              <p>
                <a href="#!" class="text-dark">Contact Us</a>
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
                <a href="#!" class="text-dark">Global Product Data Management</a>
              </p>
              <p>
                <a href="#!" class="text-dark">Global Trade Compliance</a>
              </p>
              <p>
                <a href="#!" class="text-dark">Logistic Management</a>
              </p>
              <p>
                <a href="#!" class="text-dark">Import Operations</a>
              </p>
              <p>
                <a href="#!" class="text-dark">Export Operations</a>
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
              <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
              <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
              <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
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
           style="background-color: rgba(0, 0, 0, 0.2)"
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
