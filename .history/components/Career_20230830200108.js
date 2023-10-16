function About() {
  const About = document.getElementById("About");
  const Container = document.createElement("div");
  Container.classList.add("container", "py-5");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 gy-5 align-items-center">
    <div class="col text-body">
      <h2 class="title fw-bold">About Us</h2>
      <p class="mt-2">
      We have a team of experienced professionals, who are trained to align our services with the client’s 
      supply chain seamlessly. 4PL Consultancy is also a Logistics Software company, which is known for rendering
       world-class and comprehensive services to all its clients. We employ the latest 
      IT solutions and tools to create a sustainable infrastructure for the clients to build and grow on.
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
