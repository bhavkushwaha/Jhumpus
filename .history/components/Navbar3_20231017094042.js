function Navbar3() {
    const Navbar3 = document.getElementById("Navbar");
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `
    
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item">
            <a class="nav-link mx-2 active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Blog</a></li>
              <li><a class="dropdown-item" href="#">About Us</a></li>
              <li><a class="dropdown-item" href="#">Contact us</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    `;
  Navbar3.appendChild(Container);
}
Navbar3();