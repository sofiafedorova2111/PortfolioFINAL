document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 900);
});