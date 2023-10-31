// Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
document.addEventListener('DOMContentLoaded', () => {
    const galleryList = document.querySelector('.gallery');

    function createGalleryItem(item) {
        return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `;
    }

    const galleryElements = galleryItems.map(createGalleryItem).join('');
    galleryList.insertAdjacentHTML('beforeend', galleryElements);
    
    new SimpleLightbox(`.gallery a`, {
        captionsData: 'alt',
        captionDelay: 250,
    });
});
console.log(galleryItems);
