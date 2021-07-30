
import NewsApiService from './axios-api'
import Notiflix from "notiflix";
import refs from './refs'
import gallery from '../templates/gallery-card.hbs'
import LoadMoreBtnClass from './load-btn';
import SimpleLightbox from "simplelightbox";
import "regenerator-runtime";
const { form, input, btnSearch, galleryContainer } = refs;


form.addEventListener('submit', onSearch)

let sum = null;
let a = null;

 function onSearch(evt) {
    evt.preventDefault()

     newsApiService.resetPage();
     clearGallery()
     const currentValue = evt.currentTarget.elements.searchQuery.value.trim();
 // через форму добираемся до инпута по его имени searchQuery делаем потому что  refs.input.value при модульном хранении файлов не работает
     if (currentValue === '') {
         return;
     }
     newsApiService.query(evt.currentTarget.elements.searchQuery.value)
     newsApiService.fetchFoto().then(({ hits, totalHits }) => {
        sum = hits.length;
        if (hits.length !== 0) {
             Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
        }
       
     appendGalleryMarkup(hits, totalHits)   
    }).catch(error => console.log(error))
}

function onLoadMore() {
    newsApiService.incrementPage();
    newsApiService.fetchFoto().then(({ hits, totalHits }) => {
        sum += hits.length;
        appendGalleryMarkup(hits, totalHits)
    })
}

function appendGalleryMarkup(fotoGallery, totalHits, e) {
    
    btnLoadMore.refs.button.addEventListener('click', onLoadMore);
    galleryContainer.insertAdjacentHTML('beforeend', gallery(fotoGallery))
     btnLoadMore.show()
    // слушатель для модалки
    getSimpleLightBox()
   showNotification(totalHits)
}

function clearGallery() {
    galleryContainer.innerHTML = '';
};
function pageScrollToStart() {
      window.scrollBy(0, 1);
       a = setTimeout(pageScrollToStart,10);
    
}
function stopScroll() {
    clearTimeout(a)
 } 

function getSimpleLightBox() {
    var lightbox = new SimpleLightbox('.gallery a', { elements: '.gallery a' });
   
    lightbox.on('show.simplelightbox', function () {
        galleryContainer.addEventListener('click',evt =>  evt.preventDefault())
});
    }
function showNotification(totalHits) {
    
    console.log(`start`, totalHits)
      if (totalHits === 0) {
          clearGallery()
          btnLoadMore.hide()
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
      } else if (sum >= totalHits) {
          btnLoadMore.hide()

           Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
      }
}

const newsApiService = new NewsApiService();
const btnLoadMore = new LoadMoreBtnClass({
              selector: '.load-more',
              hidden: true,
          });