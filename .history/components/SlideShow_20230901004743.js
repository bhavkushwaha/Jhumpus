function SlideShow() {
    const SlideShow = document.getElementById("SlideShow");
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `
    
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-mdb-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="d-block w-100" alt="Wild Landscape"/>
      </div>
      <div class="carousel-item">
        <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="d-block w-100" alt="Camera"/>
      </div>
      <div class="carousel-item">
        <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="d-block w-100" alt="Exotic Fruits"/>
      </div>
    </div>

    `;
  SlideShow.appendChild(Container);
}
SlideShow();