import './sass/main.scss';
import NewsApiService from './js/api-service'
import Notiflix from "notiflix";
import gallery from './templates/gallery-card.hbs'
import loadMoreBtn from './templates/button-load-more.hbs'
import LoadMoreBtnClass from './js/load-btn';

// const loadMoreBtnClass = new LoadMoreBtnClass({
//   selector: '.load-more',
//   hidden: true,
// });
const newsApiService = new NewsApiService();
//  console.log(loadMoreBtnClass)

const refs = {
    form: document.querySelector('.search-form'),
    input: document.querySelector('input'),
    btnSearch: document.querySelector('button'),
    galleryContainer: document.querySelector('.gallery'),
}

refs.form.addEventListener('submit', onSearch)

let sum = null;
let btnLoadMore = null;


function onSearch(evt) {
    evt.preventDefault()
   
    // через форму добираемся до инпута по его имени searchQuery делаем потому что  refs.input.value при модульном хранении файлов не работает
    newsApiService.query = evt.currentTarget.elements.searchQuery.value;
    newsApiService.resetPage();
   
   
    newsApiService.fetchFoto().then(({ hits, totalHits }) => {
        sum = hits.length;

        console.log(totalHits)
        if (totalHits === 0) {
              clearGallery()
      return  Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
     }
      Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
     appendGalleryMarkup(hits, totalHits)   
    })
 

}

function onLoadMore() {
   

    newsApiService.fetchFoto().then(({hits, totalHits}) => {
        sum += hits.length;
          console.log(sum, `sum`)
        appendGalleryMarkup(hits, totalHits)
        
    }).catch()
  
    
  
}
function appendGalleryMarkup(foto, totalHits) {

    clearGallery()
    console.log(totalHits, `hits`)
   
 
    
      if (document.querySelector('.load-more') === null) {
          console.log(btnLoadMore, `loadd`);
          
          const loadMoreButton = loadMoreBtn();
          
          refs.galleryContainer.insertAdjacentHTML('beforeend', loadMoreButton);
          
           
          btnLoadMore = document.querySelector('.load-more');
          
    
        
      } 
    btnLoadMore.addEventListener('click', onLoadMore);
   
    
    refs.galleryContainer.insertAdjacentHTML('afterbegin', gallery(foto))
      if (sum >= totalHits) {
           
            btnLoadMore.remove(); 
             return  Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
        }
}
function clearGallery() {
    refs.galleryContainer.innerHTML = '';
}