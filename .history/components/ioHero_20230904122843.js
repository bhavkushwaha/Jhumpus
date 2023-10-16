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
    <h2 class="title fw-bold">Why Choose Us?</h2>
    </div>
                  <p>At 4PL Consultancy, we believe in strengthening the supply chain functioning by reinforcing its compliance to the international directives. By getting our outsourced International Trade Compliance Services, we will help you in enhancing the efforts of your in-house team. With our expansive knowledge, 4PL teams will ensure that all your shipments conform to the rules and international laws. Few advantages of getting our Global Trade Compliance Services are: </p>
                  <h5><i class="fa fa-th-large"></i>Regular Compliance Evaluation </h5>
                  <p>Our services include performing conformity checks at regular intervals. Through this, we will ensure that every order or shipment, processed by your company, abide by the laws of start and destination country.</p>
                  <h5><i class="fa fa-th-large"></i>Guidance on Customs Procedure</h5>
                  <p>The customs regulations are different for every country. Therefore, one has to pay close attention to these, when expanding their business. Our expert teams, with their experience in the field, are here to help you out. They will guide you on the customs procedures topic so that you can stay clear from breaking any laws.</p>
                  <h5><i class="fa fa-th-large"></i>Improved Data Analysis</h5>
                  <p>To render the best of our services to the clients, we use the latest technology and innovations to perform data analytics. This is done to assist the clients in making well-informed decisions for their deals or shipments.</p>
                  <p>4PL Consultancy’s International Trade Compliance Services cater to the ever-changing trends of the industry. Our teams work hard to create a sustainable and compliant environment for the clients. We choose the best tech and workforce available to deliver optimal results. To know more about our Global Trade Services, contact us today! </p>
                </div>
</div>


<div class="lead-gen-module-container lead-gen-main">
				<div class="lead-gen-module align-center">
					<h2 class="align-center" aria-hidden="true">How can we <span>help you?</span></h2>
			<!--		<p><b>Select options from the sentence below to define your trade needs.</b><br>Livingston can help Simplify Trade — starting with a fast-tracked quote.</p>-->
					<p class="align-center" aria-hidden="true"><b>Click and customize the underlined words</b> in the statement below to describe your needs.</p>
					<div id="sentence-container" class="sentence align-center"> <span id="sentence-section0" data-index="0" data-selector="service" tabindex="-1">I want <a tabindex="0">to consult</a> with a trade expert</span>  <span id="sentence-section1" data-index="1" data-selector="trade-activity" tabindex="-1" style="opacity: 1;">about <a tabindex="0">importing</a></span>  <span id="sentence-section2" data-index="2" data-selector="product" tabindex="-1" style="opacity: 1;"><a tabindex="0">goods</a></span>  <span id="sentence-section3" data-index="3" data-selector="industry" tabindex="-1" style="opacity: 1;">for the <a tabindex="0">business services</a> industry.</span></div>
					<div id="hints-container" aria-hidden="true"><div id="sentence-hint" class="sentence-hint-container" style="left: 206.852px; top: 1549.58px; display: block;">    <div class="sentence-hint-arrow"></div>    <div class="sentence-hint-connector"></div></div><div id="scroll-hint" class="scroll-hint-container" style="visibility: hidden; height: 0px; opacity: 0;">    <div class="scroll-hint-icon"></div>    <div class="scroll-hint-text">Please scroll down to complete the request</div></div></div>
					<!-- GOOGLE GTM Custom Event added to button onClick -->
					<button class="lead-gen-button hide-until-page-loaded" style="visibility: visible;">Get a free quote</button>
					<form><input type="hidden" name="lg_userData" value=""></form>
				</div>
			</div>
        `;
        ioHero.appendChild(Container);
      }
      ioHero();
      