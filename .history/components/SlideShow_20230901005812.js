function SlideShow() {
    const SlideShow = document.getElementById("SlideShow");
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/imgbg.jpg" class="d-block w-100" alt="..." style="width:100%; height: 650px;">
    </div>
    <div class="carousel-item">
      <img src="./images/logo.png" class="d-block w-100" alt="..." style="width:100%; height: 650px;">
    </div>
    <div class="carousel-item">
      <img src="./images/imgbg.jpg" class="d-block w-100" alt="..." style="width:100%; height: 650px;">
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