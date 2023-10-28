function ioWhy() {
    const ioWhy = document.getElementById("ioWhy");
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `
<div class="container">
<div class="servdtl-overview clearfix">
<div
class="text-body text-center d-flex flex-column align-items-center"
>
<h1>Why Choose Us?</h1>
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
ioWhy.appendChild(Container);
}
ioWhy();