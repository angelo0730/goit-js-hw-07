import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");

const createGallery = (element) => {
    return element.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
};

const photosList = createGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", photosList);

// ----------Click Event-----------

const eventGalleryClick = (event) => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {

    }

    const urlOriginal = event.target.dataset.source;


const instance = basicLightbox.create(`<img src="${urlOriginal}">`);
instance.show();

// -----ESC instance-----
const escKeyPress = (event) => {
    if (event.key === "Escape") {
        instance.close();
        window.removeEventListener("keydown", escKeyPress)
    }
};
window.addEventListener("keydown", escKeyPress)


};
galleryList.addEventListener("click", eventGalleryClick);