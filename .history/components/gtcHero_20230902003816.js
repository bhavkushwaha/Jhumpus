function gtcHero() {
    const gtcHero = document.getElementById("gtcHero");
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
                    <h1>Global Trade Compliance</h1>
                    <div class="page-nav">
                        <p>Home &nbsp; | &nbsp; GPDM</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `;
        gtcHero.appendChild(Container);
      }
      gtcHero();
      