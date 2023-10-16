function Navbar2() {
  const navbar2 = document.getElementById("Navbar");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <nav>
  <div class="navbar">
    <div class="logo"><a href="#">CodingLab</a></div>
    <ul class="menu">
      <li><a href="#Home">Home</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#Category">Category</a></li>
      <li><a href="#Contact">Contact</a></li>
      <li><a href="#Feedback">Feedback</a></li>
    </ul>
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