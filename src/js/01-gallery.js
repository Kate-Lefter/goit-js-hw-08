import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const pictureGalleryItems = document.querySelector('.gallery');
const galleryMarkup = clickImgGallery(galleryItems);

pictureGalleryItems.insertAdjacentHTML('beforeend', galleryMarkup);

function clickImgGallery(elements) {
    return elements
        .map(({ preview, original, description }) => {
        return `
      <div class="gallery__item" >
         <a class="gallery__link"  data-lightbox="image-1"
         href="${original}" onclick="return false;">
              <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                    />
                </a>
</div>
            `;
    })
        .join('');
}


pictureGalleryItems.addEventListener('click', onClickGalleryItems);

function onClickGalleryItems(e) { 
    const isGalleryImage = e.target.classList.contains('gallery__image');
    if (!isGalleryImage) {
        return;
    }
   const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`);
  instance.show();
}
