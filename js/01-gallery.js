import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divgalEl = document.querySelector('.gallery');
const newStructEl = galleryItems.map((elem) => `
<div class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img class="gallery__image" src="${elem.preview}"
      data-source="${elem.original}" alt="${elem.description}" />
  </a>
</div>`).join("");
divgalEl.insertAdjacentHTML("beforeend", newStructEl);
divgalEl.addEventListener("click", selectPicture);

function selectPicture(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") { return };
  const instance = basicLightbox.create(`
 <img width="1400" height="900" src="${event.target.dataset.source}">`);
  instance.show(() => { document.addEventListener("keyup", ev => {
      if (ev.key === 'Escape') { instance.close() }
    });
  })
};



 