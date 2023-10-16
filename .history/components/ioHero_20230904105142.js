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

        <div class="grid-container padding-max-bottom icon-grid">
        <div class="grid-x grid-margin-x lii-block-icons">
        <div class="small-12 medium-6 cell no-border">
        <h3 class="h4">Duty Management</h3>
        <p class="">
        Duty management can uncover significant savings. We help you take full advantage of preferential trade
         programs and duty rates and other regimes such as Inward Processing Relief/Outward Processing Relief 
         or IMMEX. Your imports cost less. Post-entry work costs less.
         </p>
         </div>
         <div class="small-12 medium-6 cell no-border">
         <h3 class="h4">Broker and Vendor Performance Management</h3>
         <p class="">
         Your goal: reduce the number of exceptions at time of import. We help you with strategic broker selection,
        from planning and execution to establishing, monitoring, and updating the performance metrics of your 
        service providers. The focus is on cost-saving, quality, and cycle-time.
        </p>
        </div>
        <div class="small-12 medium-6 cell no-border">
        <h3 class="h4">Regulatory Agency Compliance</h3>
        <p class="">
        Every product has the potential to require its own set of documentation. We help you develop and maintain 
        product “passport” information for smooth clearance and compliance with regulatory agencies, if applicable.
        </p>
        </div>
        </div>
        </div>
        `;
        ioHero.appendChild(Container);
      }
      ioHero();
      