function About() {
  const About = document.getElementById("About");
  const Container = document.createElement("div");
  Container.classList.add("container", "py-5");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 gy-5 align-items-center">
    <div class="col text-body">
      <h2 class="title fw-bold">About Us</h2>
      <p class="mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
       deserunt mollit anim id est laborum.
      </p>
      <a class="button btn-theme-default mt-3" href="#"> Explore More </a>
    </div>
    <div class="col container-body">
      <img
        class="img-fluid"
        src="./Images/img3.png"
        alt=""
      />
    </div>
  </div>
    `;
  About.appendChild(Container);
}
About();
