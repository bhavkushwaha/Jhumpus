function ioCTA() {
    const ioCTA = document.getElementById("ioCTA");
    const Container = document.createElement("div");
    const BG = document.createElement("div");
    Container.classList.add("container-fluid");
    // BG.classList.add("hero-bg");
    Container.innerHTML = `
<div class="py-14 ">
<div class="container">
<div class="row">
<div class="offset-lg-2 col-lg-8 col-md-12 col-12 text-center">
<span class="fs-4 text-warning ls-md text-uppercase
 fw-semibold">get things done

</span>
<!-- heading  -->
<h2 class="display-3 mt-4 mb-3  fw-bold">Just try it out! You'll
 fall in love</h2>
 <!-- para  -->
<p class="lead  px-lg-8 mb-6">Designed for modern
 companies looking to launch
 a simple, premium and modern website and apps.</p>
<a href="#" class="btn btn-primary">Try For Free</a>
</div>
</div>
</div>
</div>
`;
ioCTA.appendChild(Container);
}
ioCTA();