// --- Lightbox Modal (Pop-up Certification Image) ---
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("expandedImage");
const closeBtn = document.querySelector(".close-modal");
const certImages = document.querySelectorAll(".cert-image img");

// Open modal upon clicking any certificate image
certImages.forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.classList.add("show"); // This triggers the CSS rule we just added!
    document.body.style.overflow = "hidden"; // Block page scrolling behind popup
  });
});

// Close modal function
function closeModal() {
  modal.classList.remove("show");
  document.body.style.overflow = ""; // Reactivate scroll
}

// Close events
closeBtn.addEventListener("click", closeModal);

// Close by clicking outside the image boundary
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Close using 'Escape' keyboard key
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});