import './sass/main.scss';
import NewsApiService from './js/api-service'
import Notiflix from "notiflix";
import gallery from './templates/gallery-card.hbs'
import loadMoreBtn from './templates/button-load-more.hbs'


const newsApiService = new NewsApiService();


const refs = {
    form: document.querySelector('.search-form'),
    input: document.querySelector('input'),
    btnSearch: document.querySelector('button'),
    galleryContainer: document.querySelector('.gallery'),
    // btnLoadMore: document.querySelector('.load-more')
}

refs.form.addEventListener('submit', onSearch)




function onSearch(evt) {
    evt.preventDefault()
     clearGallery()
    // через форму добираемся до инпута по его имени searchQuery делаем потому что  refs.input.value при модульном хранении файлов не работает
    newsApiService.query = evt.currentTarget.elements.searchQuery.value;
    newsApiService.resetPage();
   
    
    newsApiService.fetchArticles().then(foto => {
      
     appendGalleryMarkup(foto)   
    })

    if (document.querySelector('.load-more') === null) {
        console.log(`first`)
         const loadMoreButton = loadMoreBtn();
        refs.galleryContainer.insertAdjacentHTML('afterend', loadMoreButton);
        
    }
     console.log(`second`)
       const btnLoadMore = document.querySelector('.load-more')
    btnLoadMore.addEventListener('click', onLoadMore);
  
    

}

function onLoadMore() {
   
      clearGallery()
    newsApiService.fetchArticles().then(foto => {
   
     appendGalleryMarkup(foto)   
    })
  
    
  
}
function appendGalleryMarkup(foto) {
    console.log(foto, `foto`)
    refs.galleryContainer.insertAdjacentHTML('afterbegin', gallery(foto))
    
}
function clearGallery() {
    refs.galleryContainer.innerHTML = '';
}