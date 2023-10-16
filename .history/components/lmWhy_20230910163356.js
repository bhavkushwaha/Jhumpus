function lmWhy() {
    const lmWhy = document.getElementById("lmWhy");
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `
    <div class="servdtl-overview clearfix">
    <div
    class="text-body text-center d-flex flex-column align-items-center"
  >
    <h2 class="title fw-bold">Why Choose Us?</h2>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in ullamcorper nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec viverra rutrum purus, nec condimentum metus dictum et. Nulla sed imperdiet nisi. Fusce auctor vel turpis quis luctus. Maecenas dictum eros non felis dignissim, at rhoncus lectus faucibus. Nullam vitae iaculis enim, consectetur pretium ex. Nulla eget tristique mi. Fusce aliquam, nisi sed varius luctus:</p>
    <h5><i class="fa fa-th-large"></i>Regular Compliance Evaluation </h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies gravida sagittis. Maecenas pulvinar diam id felis maximus facilisis. Sed erat orci, pellentesque vitae egestas sit amet, eleifend nec erat. Mauris nec.</p>
    <h5><i class="fa fa-th-large"></i>Guidance on Customs Procedure</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies gravida sagittis. Maecenas pulvinar diam id felis maximus facilisis. Sed erat orci, pellentesque vitae egestas sit amet, eleifend nec erat. Mauris nec. Nulla sed imperdiet nisi. Fusce auctor vel turpis quis luctus. Maecenas dictum eros non felis dignissim, at rhoncus lectus faucibus.</p>
    <h5><i class="fa fa-th-large"></i>Improved Data Analysis</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus orci sem, eget fermentum mauris varius ac. Donec non pharetra est. Curabitur pretium metus finibus nulla vulputate, quis vestibulum ex dapibus.</p>                </div>

                <div class="lnk-gfq"><a href="contact-us.php">Contact Us</a></div>
    `;
    lmWhy.appendChild(Container);
  }
  lmWhy();