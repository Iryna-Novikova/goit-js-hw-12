// імпортуємо бібліотеку izitoast
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// // імпортуємо власні функції
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', handlerFormSbmt); 

function handlerFormSbmt(evt) { 
    evt.preventDefault();
    clearGallery();

    const textForSearch = formEl.elements['search-text'].value.trim();
    
    if (textForSearch !== '') {
        showLoader();
        getImagesByQuery(textForSearch)
            .then(res => {
                if (res.hits.length === 0) {
                    iziToast.show({
                        title: '',
                        message: '❌ Sorry, there are no images matching your search query. Please try again!',
                        backgroundColor: 'rgb(136, 44, 44)',
                        messageColor: 'rgb(255, 255, 255)',
                        position: 'topRight',
                    });
                } else {
                    createGallery(res.hits);
                    formEl.reset();
                }
            })
            .catch(err => {
                iziToast.show({
                    title: '',
                    message: `❌ Sorry, it's some error hear: ${err}`,
                    backgroundColor: 'rgb(136, 44, 44)',
                    messageColor: 'rgb(255, 255, 255)',
                    position: 'topRight',
                });
            })
            .finally(() => 
                hideLoader()
            );
        
    } else { 
        iziToast.show({
            title: '',
            message: '❌ Please enter non empty request.',
            backgroundColor: 'rgb(136, 44, 44)',
            messageColor: 'rgb(255, 255, 255)',
            position: 'topRight',
        });
    }
}
