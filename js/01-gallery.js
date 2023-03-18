import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divgalEl = document.querySelector('.gallery');
const newStructEl = galleryItems.map((elem) => `
<li class="gallery__item">
  <a class="gallery__link" href="">
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />
  </a>
</li>`).join("");
divgalEl.insertAdjacentHTML("beforeend", newStructEl);

document.querySelector('button.image').onclick = () => {
	basicLightbox.create(`
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`).show()

}

//divgalEl.style.flexWrap = "wrap";





/*const divgalEl = document.querySelector('.gallery');
const newStructEl = galleryItems.map((elem) => `
<div class="gallery__item">
<a class="gallery__link" href="">
 <img class="gallery__image" src="${elem.preview}" alt="${elem.description}">
 </a>
 </div>`).join("");
divgalEl.insertAdjacentHTML("beforeend", newStructEl);*/

 