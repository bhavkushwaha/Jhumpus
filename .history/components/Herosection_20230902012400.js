function Herosection() {
  const Herosection = document.getElementById("Herosection");
  const Container = document.createElement("div");
  const BG = document.createElement("div");
  Container.classList.add("container-fluid");
  // BG.classList.add("hero-bg");
  Container.innerHTML = `

  
  <
        
  `;
  // BG.innerHTML = `
  //      <div class="bg"></div>
  //       <img class="purple-circle" src="./Images/imgbg.jpg"></img>
  // `;
  Herosection.appendChild(Container);
  // Herosection.appendChild(BG);
}
Herosection();

// div class="row row-cols-2 gx-5 gy-5">
//           <div class="text-wrapper col-12 col-lg-6">
//             <div class="text-body">
//               <h1 class=" fw-bold">
//               Global Trade Management
//               </h1>
//               <h1 class=" fw-bold">
//               End-to-end expertise.
//               </h1>
//               <p class="mt-3">
//               Every part of global trade can be done more efficiently. We scale best-in-class talent, processes, and tech to help your team optimize cost and speed.
//               </p>
//             </div>
//           </div>
//           <div
//             class="mockup-img col-12 col-lg-5 d-flex overflow-hidden justify-content-center"
//           >
//             <img class="" src="./Images/imgbg.jpg" alt="" id="" />
//           </div>
//         </div>