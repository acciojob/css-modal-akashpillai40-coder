const openBtn = document.getElementById("openModal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal (X button)
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});