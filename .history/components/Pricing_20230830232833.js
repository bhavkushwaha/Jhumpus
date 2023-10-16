function Pricing() {
  const Pricing = document.getElementById("Pricing");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row">
  <div class="col-12">
      <h1 class="mt-5">DANCING</h1>
      <p class="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Provident repellendus fuga molestiae vitae ex dolore deleniti
          assumenda fugiat ducimus incidunt!
      </p>
  </div>
</div>

<div class="row justify-content-evenly mt-5">
  <div class="col-md-3 mb-5">
      <div class="card" style="width: 18rem">
          <img src="./images/logo.png" class="card-img-top" alt="..." />
          <div class="card-body bg-dark">
              <h5 class="card-title">AMERICA</h5>
              <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
              </p>
          </div>
      </div>
  </div>
  <div class="col-md-3 mb-5">
      <div class="card" style="width: 18rem">
          <img src="images/3.png" class="card-img-top" alt="..." />
          <div class="card-body bg-dark">
              <h5 class="card-title">ASIA</h5>
              <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
              </p>
          </div>
      </div>
  </div>
  <div class="col-md-3 mb-5">
      <div class="card" style="width: 18rem">
          <img src="images/4.png" class="card-img-top" alt="..." />
          <div class="card-body bg-dark">
              <h5 class="card-title">AUSTRALIA</h5>
              <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
              </p>
          </div>
      </div>
  </div>
</div>
</div>
  `;
  Pricing.appendChild(Container);
}
Pricing();