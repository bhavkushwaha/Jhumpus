function aboutFeatures() {
    const aboutFeatures = document.getElementById("aboutFeatures");
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `
    <div
    class="text-body text-center d-flex flex-column align-items-center"
  >
    <h2 class="title fw-bold">About Us</h2>
    <br>
    <h4>We are a young and creative company offering you fresh Logistics & Trade Compliance ideas.</h4>
    <br>
    <h6>
      Lorem ipsum is common placeholder text used to demonstrate the
      graphic elements of a document or visual presentation.
      Lorem ipsum is common placeholder text used to demonstrate the
      graphic elements of a document or visual presentation.
      Lorem ipsum is common placeholder text used to demonstrate the
      graphic elements of a document or visual presentation.
    </h6>
  </div>
      `;
    aboutFeatures.appendChild(Container);
  }
  aboutFeatures();
  