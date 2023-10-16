function ioCTA() {
    const ioCTA = document.getElementById("ioCTA");
    const Container = document.createElement("div");
    const BG = document.createElement("div");
    Container.classList.add("container-fluid");
    // BG.classList.add("hero-bg");
    Container.innerHTML = `
<div class="py-14" style="
padding-bottom: 20px;
">
<div class="container">
<div class="row">
<div class="offset-lg-2 col-lg-8 col-md-12 col-12 text-center">

<!-- heading  -->
<h2 class="display-3 mt-4 mb-12  fw-bold">How can we help you?</h2>
 <!-- para  -->
<p class="lead  px-lg-8 mb-6">I want to consult with a trade expert about importing goods for my business.</p>
<a href="#" class="btn btn-primary">Get a Free Quote</a>
</div>
</div>
</div>
</div>
`;
ioCTA.appendChild(Container);
}
ioCTA();