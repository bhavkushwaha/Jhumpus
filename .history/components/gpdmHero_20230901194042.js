function gpdmHero() {
    const contactHero = document.getElementById("gpdmHero");
    const Container = document.createElement("div");
    const BG = document.createElement("div");
    Container.classList.add("container-fluid");
    BG.classList.add("hero-bg-c");
    Container.innerHTML = `
<div class="pages-hero-gpdm">
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
        contactHero.appendChild(Container);
      }
      contactHero();
      