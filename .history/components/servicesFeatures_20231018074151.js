function servicesFeatures() {
    const servicesFeatures = document.getElementById("Features");
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `
    <div
    class="text-body text-center d-flex flex-column align-items-center"
  >
    <h2 class="title fw-bold">Services and solutions <br>
    <span style="color:#ED5910; font-weight:bold;">built around you.</span></h2>
    <br>
    <p class="align-center" style="max-width: 1000px;">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
    venenatis vitae, justo. Nullam dictum felis eu.</p>
  </div>
  <div
    class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4"
  >
    <div class="col d-flex flex-column justify-content-center pt-5">
      <div class="icon d-flex justify-content-center">
        <img src="./Images/global-trade-management.svg" alt="" srcset="" />
      </div>
      <div class="text">
        <div class="title fw-bold text-center" style="font-size: larger;">
        Global Trade Compliance</div>
        <div class="description text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          erat nibh tristique ipsum.
        </div>
      </div>
    </div>
    <div class="col d-flex flex-column justify-content-center pt-5">
      <div class="icon d-flex justify-content-center">
        <img src="./Images/vehicle-transportation.svg" alt="" srcset="" />
      </div>
      <div class="text">
      <div class="title fw-bold text-center" style="font-size: larger;">
      Logistics Management</div>
        <div class="description text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          erat nibh tristique ipsum.
        </div>
      </div>
    </div>
    <div class="col d-flex flex-column justify-content-center pt-5">
      <div class="icon d-flex justify-content-center">
        <img src="./Images/business-process-services.svg" alt="" srcset="" />
      </div>
      <div class="text">
      <div class="title fw-bold text-center" style="font-size: larger;">
      Global Product Data Management</div>
        <div class="description text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          erat nibh tristique ipsum.
        </div>
      </div>
    </div>

    <div class="col d-flex flex-column justify-content-center pt-5">
      <div class="icon d-flex justify-content-center">
        <img src="./Images/shipping.svg" alt="" srcset="" />
      </div>
      <div class="text">
        <div class="title fw-bold text-center" style="font-size: larger;">
        Import Operations</div>
        <div class="description text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          erat nibh tristique ipsum.
        </div>
      </div>
    </div>

    <div class="col d-flex flex-column justify-content-center pt-5">
      <div class="icon d-flex justify-content-center">
        
      </div>
      <div class="text">
        <div class="title fw-bold text-center" style="font-size: larger;">
        </div>
        <div class="description text-center">
          
        </div>
      </div>
    </div>

    <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/shipping.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center" style="font-size: larger;">
      Export Operations</div>
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
  