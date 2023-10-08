document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeLightboxBtn = document.getElementById("close-lightbox");

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImage.src = thumbnail.querySelector("img").src;
    });
  });

  closeLightboxBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
