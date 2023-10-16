function gpdmFeatures() {
    const gpdmFeatures = document.getElementById("gpdmFeatures");
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `
    <div
    class="text-body text-center d-flex flex-column align-items-center"
  >
    <h2 class="title fw-bold">Why Choose Us?</h2>
    <p class="">
      Lorem ipsum is common placeholder text used to demonstrate the
      graphic elements of a document or visual presentation.
    </p>
  </div>
  <div
    class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4"
  >
    <div class="col d-flex flex-column justify-content-center pt-5">
      <div class="icon d-flex justify-content-center">
        <img src="./Images/Base-feature-icon-1.svg" alt="" srcset="" />
      </div>
      <div class="text">
        <div class="title fw-bold text-center">Regular Compliance Evaluation</div>
        <div class="description text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          erat nibh tristique ipsum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          erat nibh tristique ipsum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          erat nibh tristique ipsum.
        </div>
      </div>
    </div>
    <div class="col d-flex flex-column justify-content-center pt-5">
      <div class="icon d-flex justify-content-center">
        <img src="./Images/Base-feature-icon-3.svg" alt="" srcset="" />
      </div>
      <div class="text">
        <div class="title fw-bold text-center">Guidance on Customs Procedure</div>
        <div class="description text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          erat nibh tristique ipsum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          erat nibh tristique ipsum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          erat nibh tristique ipsum.
        </div>
      </div>
    </div>
    <div class="col d-flex flex-column justify-content-center pt-5">
      <div class="icon d-flex justify-content-center">
        <img src="./Images/Base-feature-icon-5.svg" alt="" srcset="" />
      </div>
      <div class="text">
        <div class="title fw-bold text-center">Improved Data Analysis</div>
        <div class="description text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          erat nibh tristique ipsum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          erat nibh tristique ipsum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          erat nibh tristique ipsum.
        </div>
      </div>
    </div>
    
    </div>
  </div>

  <div class="mid-subscribe-main-strip">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <div class="midlft-subhead">
         <h1>Join Our Community</h1>
         <p>Feel free to reach out to us via our social profiles</p>
          <div class="mid-social-btn">
            <div id="services">
              <ul>
                  <li><a href="https://www.facebook.com/4PLConsultancy/" target="_blank"><div class="fa fa-facebook"></div></a></li>
                  <li><a href="https://twitter.com/Consultancy4pl" target="_blank"><div class="fa fa fa-twitter"></div></a></li>
                  <li><a href="https://www.linkedin.com/company/4plconsultancy" target="_blank"><div class="fa fa-linkedin"></div></a></li>
                  <li><a href="https://www.instagram.com/4pl_consultancy/" target="_blank"><div class="fa fa-instagram"></div></a></li>
              </ul>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      `;
    gpdmFeatures.appendChild(Container);
  }
  gpdmFeatures();
  