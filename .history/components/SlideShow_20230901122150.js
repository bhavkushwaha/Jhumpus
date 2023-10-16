function SlideShow() {
    const SlideShow = document.getElementById("SlideShow");
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `
    <div
    class="text-body text-center d-flex flex-column align-items-center"
  >
    <h2 class="title fw-bold">Meet Our Team</h2>
    <p class="">
      Lorem ipsum is common placeholder text used to demonstrate the
      graphic elements of a document or visual presentation.
    </p>
  </div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/team1.jpg" class="d-block w-50" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./images/team2.jpg" class="d-block w-50" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./images/team3.webp" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    `;
  SlideShow.appendChild(Container);
}
SlideShow();