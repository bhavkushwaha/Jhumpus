function eoHero() {
    const eoHero = document.getElementById("eoHero");
    const Container = document.createElement("div");
    const BG = document.createElement("div");
    // Container.classList.add("container-fluid");
    BG.classList.add("hero-bg-c");
    Container.innerHTML = `
    <div class="container-fluid" style=
    "
    padding-left: 0px;
    padding-right: 0px;
    ">
<div class="pages-hero-gpdm">
            <div class="container">
                <div class="pages-title">
                    <h1>Export Operations</h1>
                    <div class="page-nav">
                        <p>Home &nbsp; | &nbsp; EO</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `;
        eoHero.appendChild(Container);
      }
      eoHero();
      