//імпортуємо з бібліотеки simplelightbox
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryListElem = document.querySelector('.gallery');
const loaderElm = document.querySelector('.loader');
const loadBtnElm = document.querySelector('.load-more-btn');

//екземпляр SimpleLightbox для роботи з модальним вікном
const Lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });

// створення елементу розмітки для однієї картинки
function getListElemMrkup(image) {
    return `<li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">
      <img
        class="gallery-image"
        src="${image.webformatURL}"
        alt="${image.tags}"
      /> 
    <div class="img-info">
      <div class="img-info-descr">
         <h2 class="img-info-header">likes</h2>
         <p class="img-info-p">${image.likes}</p>
      </div>
      <div class="img-info-descr">
         <h2 class="img-info-header">views</h2>
         <p class="img-info-p">${image.views}</p>
      </div>
      <div class="img-info-descr">
         <h2 class="img-info-header">comments</h2>
         <p class="img-info-p">${image.comments}</p>
      </div>
      <div class="img-info-descr">
         <h2 class="img-info-header">downloads</h2>
         <p class="img-info-p">${image.downloads}</p>
      </div>      
      </div>          
    </a>
    </li>`; 
}

export function createGallery(images) { 
    const listImagesMrkup = images.map(getListElemMrkup).join('\n');
    galleryListElem.insertAdjacentHTML('beforeend', listImagesMrkup);
    Lightbox.refresh();
}

export function clearGallery() { 
    galleryListElem.innerHTML = '';
}

export function showLoader() { 
    loaderElm.classList.remove('hidden');
}

export function hideLoader() { 
    loaderElm.classList.add('hidden');
}

export function showLoadMoreButton() { 
  loadBtnElm.classList.remove('hidden');
}

export function hideLoadMoreButton() { 
  loadBtnElm.classList.add('hidden');
}