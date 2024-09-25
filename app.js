/* Created by Tivotal */

let toggleBtns = document.querySelectorAll(".toggle-btn");
let navBar = document.querySelector(".nav");

toggleBtns.forEach((toggleBtn) => {
  toggleBtn.addEventListener("click", () => {
    navBar.classList.toggle("active");
  });
});
