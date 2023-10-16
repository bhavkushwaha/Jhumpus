function aboutHero() {
    const aboutHero = document.getElementById("aboutHero");
    const Container = document.createElement("div");
    const BG = document.createElement("div");
    Container.classList.add("container-fluid");
    BG.classList.add("hero-bg");
    Container.innerHTML = `
<div class="pages-hero">
            <div class="container">
                <div class="pages-title">
                    <h1>Contact Us</h1>
                    <div class="page-nav">
                        <p>Home &nbsp; | &nbsp; Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        aboutHero.appendChild(Container);
      }
      aboutHero();
      