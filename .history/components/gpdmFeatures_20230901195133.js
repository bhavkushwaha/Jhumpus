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
      `;
    gpdmFeatures.appendChild(Container);
  }
  gpdmFeatures();
  