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

        <div class="container">
        <div class="servdtl-overview clearfix">
    <div
    class="text-body text-center d-flex flex-column align-items-center"
  >
    </div>
                  <h5><i class="fa fa-th-large"></i>Regular Compliance Evaluation </h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                   labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                   non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <h5><i class="fa fa-th-large"></i>Guidance on Customs Procedure</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <h5><i class="fa fa-th-large"></i>Improved Data Analysis</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
</div>


        `;
        ioHero.appendChild(Container);
      }
      ioHero();
      