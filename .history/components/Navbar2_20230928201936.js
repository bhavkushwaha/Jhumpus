function Navbar2() {
  const navbar2 = document.getElementById("Navbar");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <nav class="navbar">
    <div class="content">
      <div class="logo">
        <a href="#">CodingNepal</a>
      </div>
      <ul class="menu-list">
        <div class="icon cancel-btn">
          <i class="fas fa-times"></i>
        </div>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div class="icon menu-btn">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </nav>
    `;
  navbar2.appendChild(Container);
}
Navbar2();

{/* <h5 class="offcanvas-title" id="offcanvasRightLabel">
      Offcanvas right
    </h5> */}

{/* <div class="badges-items me- d-none d-sm-block">
  <button type="button" class="btn btn-outline-secondary">Client Login</button>
  </div> */}