function whiteSpace() {
    const whiteSpace = document.getElementById("whiteSpace");
    const Container = document.createElement("div");
    const BG = document.createElement("div");
    BG.classList.add("hero-bg-c");
    Container.innerHTML = `
    <div>
    </div>
    `;
whiteSpace.appendChild(Container);
}
whiteSpace();