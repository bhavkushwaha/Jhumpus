function contactHero() {
    const contactHero = document.getElementById("contactHero");
    const Container = document.createElement("div");
    const BG = document.createElement("div");
    BG.classList.add("hero-bg-c");
    Container.innerHTML = `
<div class="container-fluid" style=
"
padding-left: 0px;
padding-right: 0px;
">
<div class="pages-hero-contact">
        <div class="container">
            
        </div>
    </div>
</div>
`;
contactHero.appendChild(Container);
}
contactHero();
