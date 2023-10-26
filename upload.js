const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
        let imgLink = URL.createObjectURL(inputFile.files[0]);
        imageView.style.backgroundImage = `url(${imgLink})`;
        imageView.textContent="";
        imageView.style.border = 0;
}

dropArea.addEventListener("dragover",(e)=>{
    e.preventDefault();
})

dropArea.addEventListener("drop",(e)=>{
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
})

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
});