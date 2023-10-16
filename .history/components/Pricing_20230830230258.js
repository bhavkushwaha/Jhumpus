function Pricing() {
  const Pricing = document.getElementById("Pricing");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body d-flex flex-column align-items-center">
          <h2 class="text-center fw-bold">Pricing Packages</h2>
          <p class="text-center">
            Connect Landify with your favourite tools that you use daily and
            keep things on track.
          </p>
        </div>
        <div class="row mt-5">
          <!-- Pricing Table -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">Basic</div>
              <div class="price">
                $199 <span class="duration">/ monthly</span>
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>1 job posting</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>0 featured job</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Job displayed for 20
                      days</span
                    >
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Premium Support 24/7
                    </span>
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table -->
          <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          <!-- Pricing Table -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">Extended</div>
              <div class="price">
                $799 <span class="duration">/ monthly</span>
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>1 job posting</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>0 featured job</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Job displayed for 20
                      days</span
                    >
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Premium Support 24/7
                    </span>
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
        </div>
  `;
  Pricing.appendChild(Container);
}
Pricing();