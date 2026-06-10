document.addEventListener("DOMContentLoaded", () => {
    const triggers = document.querySelectorAll(".carousel-lightbox-trigger");
    const lightbox = document.getElementById("lightbox");
    const lbImg = document.getElementById("lightbox-img");
    const lbTitle = document.getElementById("lightbox-title");
    const lbDesc = document.getElementById("lightbox-desc");
  
    triggers.forEach(item => {
      item.addEventListener("click", () => {
        lbImg.src = item.dataset.img;
        lbTitle.textContent = item.dataset.title;
        lbDesc.textContent = item.dataset.desc;
        lightbox.style.display = "flex";
      });
    });
  
    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  });
  