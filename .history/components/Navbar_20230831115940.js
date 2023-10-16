function Navbar() {
  const navbar = document.getElementById("Navbar");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="nav-left d-flex" id="navbarNav">
  <a class="navbar-brand me-5" href="#">
    <img
      class="BrandLogo"
      src="./Images/logo.png"
      alt=""
      srcset=""
    />
  </a>
  <ul class="navbar-nav d-none d-lg-flex">
    <li class="nav-item">
      <a class="nav-link" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="service1.html">About Us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Pricing">Services</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#FAQ">Contact Us</a>
    </li>
  </ul>
</div>
<div class="nav-right d-flex align-items-center">
  <div class="badges-items me- d-none d-sm-block">
  <button type="button" class="btn btn-outline-secondary">Login</button>
  </div>
  <button
    class="btn collapsed d-lg-none"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
</div>
<div
  class="offcanvas offcanvas-end"
  tabindex="-1"
  id="offcanvasRight"
  aria-labelledby="offcanvasRightLabel"
>
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">
      Offcanvas right
    </h5>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>
  <div class="offcanvas-body">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#Features">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Pricing">About Us</a>
      </li>
      <li class="nav-item  dropdown">
        <a class="nav-link" href="#Careers">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#FAQ">Contact Us</a>
      </li>
    </ul>
    <div class="badges-items h-100 mt-3 d-flex flex-column">
      <a class="badge-item text-decoration-none" href="#1">
      <button type="button" class="btn btn-outline-secondary">Login</button>
      </a>
    </div>
  </div>
</div>
    `;
  navbar.appendChild(Container);
}
Navbar();
