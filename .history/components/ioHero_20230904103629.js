function ioHero() {
    const ioHero = document.getElementById("ioHero");
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
                    <h1>Import Operations</h1>
                    <div class="page-nav">
                        <p>Home &nbsp; | &nbsp; io</p>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <section class="grid-container lii-block-text clear-bottom inc-block-iconTop">
        <div class="grid-x grid-margin-x">
        <div class="small-12 cell">
        <p class="align-center">
        International trade is both enticing and challenging. Enticing when the right global sourcing opportunities, emerging markets, 
        and supply chain partnerships align profitably. Challenging, because of the time and resources 
        needed to get there. Day-to-day operations and budgets often suffer. We help you end the struggle 
        and give you time to focus on opportunities.
        </p>
        </div>
        </div>
        </section>
        `;
        ioHero.appendChild(Container);
      }
      ioHero();
      