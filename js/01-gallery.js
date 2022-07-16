import { galleryItems } from "./gallery-items.js";

const div = document.querySelector(`.gallery`);

const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(images) {
  return images.map(
    (img) => `<div class="gallery__item">
<a class="gallery__link" href="${img.original}">
  <img
    class="gallery__image"
    src="${img.preview}"
    data-source="${img.original}"
    alt="${img.description}"
  />
</a>
</div>`
  ).join('');
}

div.innerHTML = galleryMarkup;


div.addEventListener(`click`, onClick)

function onClick (event){
    event.preventDefault()
    if (!event.target.classList.contains("gallery__image")) {
        return;
      }
      const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()
}

