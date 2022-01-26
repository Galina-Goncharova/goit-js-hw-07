import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery")


const listImg = galleryItems
    .map(({ preview, original, description}) => `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`)
    .join("");
console.log(listImg);

galleryRef.innerHTML = listImg;

function handlerClick(event) {
    event.preventDefault();

    const source = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
`)

    instance.show()
}

galleryRef.addEventListener("click", handlerClick)








