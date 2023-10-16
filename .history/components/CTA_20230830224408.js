function CTA() {
  const CTA = document.getElementById("CTA");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="container d-flex mt-4 p-4">
        <div class="card mb-3" style="max-width:540px;">
            <div class="row g-0">
                <div class="col-md-6">
                    <img src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" 
                        class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h5 class="card-title">
                            Data Structures
                        </h5>
                        <p class="card-text">
                            A data structure is a storage that is 
                            used to store and organize data. 
                        </p>
                        <p class="card-text">
                            <small class="text-muted">
                                Last updated now
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="max-width:540px;">
            <div class="row g-0">
                <div class="col-md-6">
                    <img src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png" 
                        class="img-fluid rounded-start" 
                        alt="...">
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h5 class="card-title">Algorithms</h5>
                        <p class="card-text">
                            Algorithm refers to a sequence of 
                            finite steps to solve a particular problem. 
                        </p>
                        <p class="card-text">
                            <small class="text-muted">
                                Last updated now
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;
  CTA.appendChild(Container);
}
CTA();
