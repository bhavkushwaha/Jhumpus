function Navbar() {
  const navbar = document.getElementById("Navbar");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="nav-left d-flex" id="navbarNav">
  <a class="navbar-brand me-5" href="./">
    <img
      class="BrandLogo"
      src="./Images/logo.png"
      alt=""
      srcset=""
    />
  </a>
  <ul class="navbar-nav d-none d-lg-flex">
    <li class="nav-item">
      <a class="nav-link" href="./">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="about.html">About Us</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Services
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a class="dropdown-item" href="gpdm.html">Global Product Data Management</a></li>
      <li><a class="dropdown-item" href="gtc.html">Global Trade Compliance</a></li>
      <li><a class="dropdown-item" href="lm.html">Logistic Management</a></li>
      <li><a class="dropdown-item" href="io.html">Import Operations</a></li>
      <li><a class="dropdown-item" href="eo.html">Export Operations</a></li>
    </ul>
  </li>
    <li class="nav-item">
      <a class="nav-link" href="contact.html">Contact Us</a>
    </li>
  </ul>
</div>
<div class="nav-right d-flex align-items-center">
  <div class="badges-items me- d-none d-sm-block">
  <button type="button" class="btn btn-outline-secondary">Client Login</button>
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
        <a class="nav-link" href="./">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about.html">About Us</a>
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Services
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a class="dropdown-item" href="gpdm.html">Global Product Data Management</a></li>
      <li><a class="dropdown-item" href="gtc.html">Global Trade Compliance</a></li>
      <li><a class="dropdown-item" href="lm.html">Logistic Management</a></li>
      <li><a class="dropdown-item" href="io.html">Import Operations</a></li>
      <li><a class="dropdown-item" href="eo.html">Export Operations</a></li>
    </ul>
  </li>
      <li class="nav-item">
        <a class="nav-link" href="contact.html">Contact Us</a>
      </li>
    </ul>
    <div class="badges-items h-100 mt-3 d-flex flex-column">
      <a class="badge-item text-decoration-none" href="#1">
      <button type="button" class="btn btn-outline-secondary">Client Login</button>
      </a>
    </div>
  </div>
</div>
    `;
  navbar.appendChild(Container);
}
Navbar();
