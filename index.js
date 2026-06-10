document.addEventListener("DOMContentLoaded", () => {
    const triggers = document.querySelectorAll(".carousel-lightbox-trigger");
    const lightbox = document.getElementById("lightbox");
    const lbImg = document.getElementById("lightbox-img");
    const lbImg2 = document.getElementById("lightbox-img2");
    const lbTitle = document.getElementById("lightbox-title");
    const lbDesc = document.getElementById("lightbox-desc");
  
    triggers.forEach(item => {
      item.addEventListener("click", () => {
        lbImg.src = item.dataset.img;
        lbImg2.src = item.dataset.img2 || "";   
        lbImg2.style.display = item.dataset.img2 ? "block" : "none";
  
        lbTitle.textContent = item.dataset.title;
        lbDesc.textContent = item.dataset.desc;
  
        lightbox.style.display = "flex";
      });
    });
  
    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  });
  