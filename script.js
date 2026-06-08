const galleryImages = document.querySelectorAll('.product-gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');

if (galleryImages.length > 0 && lightbox && lightboxImage) {
  galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightbox.classList.add('show');
    });
  });
}

const closeLightbox = () => {
  lightbox.classList.remove('show');
  lightboxImage.src = '';
};

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxBackdrop) {
  lightboxBackdrop.addEventListener('click', closeLightbox);
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.classList.contains('show')) {
    closeLightbox();
  }
});
