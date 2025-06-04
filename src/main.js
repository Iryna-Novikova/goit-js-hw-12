// імпортуємо бібліотеку izitoast
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// // імпортуємо власні функції
import { getImagesByQuery, perPage } from './js/pixabay-api';
import {
    createGallery, clearGallery, showLoader, hideLoader,
    showLoadMoreButton, hideLoadMoreButton
} from './js/render-functions.js';

const formElm = document.querySelector('.form');
const loadBtnElm = document.querySelector('.load-more-btn');

let page = 1;
let maxPage = 1;
let query = '';
let message;

formElm.addEventListener('submit', handlerFormSbmt); 

// опрацювання сабміту форми
async function handlerFormSbmt(evt) { 
    evt.preventDefault();
    clearGallery();
    hideLoadMoreButton();

    query = formElm.elements['search-text'].value.trim();

    if (query !== '') {
        showLoader();
        page = 1;
        try {
            const res = await getImagesByQuery(query, page);

            if (res.hits.length === 0) {
                message = '❌ Sorry, there are no images matching your search query. Please try again!';
                showAlert('topRight');           
            } else {              
                createGallery(res.hits);
                scrollImages();
            };

            formElm.reset();

            maxPage = Math.ceil(res.totalHits / perPage);
            if (page < maxPage) {
                showLoadMoreButton();
            };               
        }
        catch (err) {
                message = `❌ Sorry, it's some error hear: ${err}`;
                showAlert('topRight');
        };
                   
        hideLoader();
    }
    else { 
        message = '❌ Please enter non empty request.';
        showAlert('topRight'); 
        formElm.reset();
    };
}

// дозавантаження картинок
loadBtnElm.addEventListener('click', handlerLoadBtnOnClick);

async function handlerLoadBtnOnClick(evt) {
    page += 1; 
    showLoader();   
    try { 
        const res = await getImagesByQuery(query, page);
        createGallery(res.hits);
        scrollImages();
    }
    catch (err) {
            message = `❌ Sorry, it's some error hear: ${err}`;
            showAlert('topRight');
    };

    hideLoader();

    if (page === maxPage) {
        hideLoadMoreButton();
        message = "We're sorry, but you've reached the end of search results.";
        setTimeout(showAlert, 1000,'bottomCenter');
    };
}

// функція відображення повідомлення
function showAlert(pos) {
    iziToast.show({
        title: '',
        message: message,
        backgroundColor: 'rgb(136, 44, 44)',
        messageColor: 'rgb(255, 255, 255)',
        position: pos,
    });
 }

// скролінг
function scrollImages() {
    const galleryItemElm = document.querySelector('.gallery-item');
    
    if (!galleryItemElm) return;

    const height = galleryItemElm.getBoundingClientRect().height;

    window.scrollBy({
        top: height * 2,
        behavior: "smooth",
      });
}

 