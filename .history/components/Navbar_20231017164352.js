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
        <a class="nav-link-active" href="./">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about.html">About Us</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="services.html">Services</a>
    </li>
      <li class="nav-item">
        <a class="nav-link" href="contact.html">Contact Us</a>
      </li>
    </ul>
  </div>
  <div class="nav-right d-flex align-items-center">
    
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
        <li class="nav-item">
          <a class="nav-link" href="services.html">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact Us</a>
        </li>
      </ul>
      
    </div>
  </div>
      `;
    navbar.appendChild(Container);
  }
  Navbar();
  