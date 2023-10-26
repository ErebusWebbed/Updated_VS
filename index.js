var typed = new Typed(".auto-type", {
    strings: ["Find your <br>desired products<br> in a <span>CLICK!<span>"],
    typeSpeed: 40,
    loop: false
})

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
});