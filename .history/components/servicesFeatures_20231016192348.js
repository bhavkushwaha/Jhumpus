function servicesFeatures() {
    const servicesFeatures = document.getElementById("Features");
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `
    <div
    class="text-body text-center d-flex flex-column align-items-center"
  >
    <h2 class="title fw-bold">Services and solutions <br>
    built around you.</h2>
    <p class="">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
    mollit anim id est laborum.
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
        <div class="title fw-bold text-center">Lower your costs</div>
        <div class="description text-center">
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
        <div class="title fw-bold text-center">Get to market faster.</div>
        <div class="description text-center">
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
        <div class="title fw-bold text-center">Free up resources</div>
        <div class="description text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          erat nibh tristique ipsum.
        </div>
      </div>
    </div>
    
    </div>
  </div>
      `;
    servicesFeatures.appendChild(Container);
  }
  servicesFeatures();
  