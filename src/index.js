import './sass/main.scss';
import './sass/simple-lightbox.scss'
import NewsApiService from './js/axios-api'
import Notiflix from "notiflix";
import gallery from './templates/gallery-card.hbs'
import loadMoreBtn from './templates/button-load-more.hbs'
import LoadMoreBtnClass from './js/load-btn';
import SimpleLightbox from "simplelightbox";
import "regenerator-runtime";


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
    newsApiService.fetchFoto()
      console.log(newsApiService) 
        .then(({ hits, totalHits }) => {
        sum = hits.length;
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
        console.log(totalHits)
     appendGalleryMarkup(hits, totalHits)   
    })
}

 function onSearch(evt) {
    evt.preventDefault()

     newsApiService.resetPage();
 // через форму добираемся до инпута по его имени searchQuery делаем потому что  refs.input.value при модульном хранении файлов не работает
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
    console.log( newsApiService.incrementPage())
    newsApiService.fetchFoto().then(({ hits, totalHits }) => {
        sum += hits.length;
        appendGalleryMarkup(hits, totalHits)
        
    })
}

function appendGalleryMarkup(fotoGallery, totalHits, e) {
    clearGallery()
    if (document.querySelector('.load-more') === null) {
     
          const loadMoreButton = loadMoreBtn();
          refs.galleryContainer.insertAdjacentHTML('beforeend', loadMoreButton);
          btnLoadMore = new LoadMoreBtnClass({
              selector: '.load-more',
              hidden: false,
          });
      }
   
    btnLoadMore.refs.button.addEventListener('click', onLoadMore);
    refs.galleryContainer.insertAdjacentHTML('afterbegin', gallery(fotoGallery))
    
    // слушатель для модалки
    getSimpleLightBox()

    //скролл
    pushToTheStartPage()
    // setTimeout(pageScrollToStart, 2000) 
 
   showNotification(totalHits)
}

function clearGallery() {
    refs.galleryContainer.innerHTML = '';
};
  function pageScrollToStart() {
    window.scrollBy(0,1);
    setTimeout(pageScrollToStart,10);
  }
function pushToTheStartPage() {
        window.scroll(0, 0);
}
function getSimpleLightBox() {
    var lightbox = new SimpleLightbox('.gallery a', { elements: '.gallery a' });
   
    lightbox.on('show.simplelightbox', function () {
	 refs.galleryContainer.addEventListener('click',evt =>  evt.preventDefault())
});
    }
function showNotification(totalHits) {
    console.log(`start`, totalHits)
      if (totalHits === 0) {
              clearGallery()
      return  Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
      } else if (sum >= totalHits) {
          btnLoadMore.hide()

           Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
      }
}

const newsApiService = new NewsApiService();



// ИНДЕКС

// function openGalleryFoto(e, fotoGallery) {
//     e.preventDefault();
//     //див элемента, в котором храниться наша картинка
//     const currentCard = e.target.parentNode.parentNode;
//     //создаем обьект-коллекцию со всеми дивами в галерее
//     const arrives = document.querySelectorAll('.photo-card')
 
//     //условие, которое дает реакцию только на клик на картинку
//       if (e.target.nodeName !== 'IMG') {
//     return;
//       }
    
//     //преобразовываем коллекцию в массив
//     const createObject = Object.values(arrives);
//     console.dir(b.indexOf(e.target.parentNode.parentNode), `hgty`)
//     //узнаем индекс нашего элемента
//     const currentIndex = createObject.indexOf(currentTarget)


//     }
    
/**
 * первый вариант
 */

// refs.form.addEventListener('submit', onSearch)



// let sum = null;
// let btnLoadMore = null;


// function onSearch(evt) {
//     evt.preventDefault()
//     console.log(evt.currentTarget)
//     // if (evt.currentTarget === '')
//     //     const a = document.querySelector('a')
//     // через форму добираемся до инпута по его имени searchQuery делаем потому что  refs.input.value при модульном хранении файлов не работает
//     newsApiService.query = evt.currentTarget.elements.searchQuery.value;
//     newsApiService.resetPage();
//     newsApiService.fetchFoto().then(({ hits, totalHits }) => {
//         sum = hits.length;
//         Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
//         console.log(totalHits)
//      appendGalleryMarkup(hits, totalHits)   
//     })
// }

// function onLoadMore() {
   
//     newsApiService.fetchFoto().then(({hits, totalHits}) => {
//         sum += hits.length;
        
           
     
//           console.log(sum, `sum`)
//         appendGalleryMarkup(hits, totalHits)
        
//     })
// }

// function appendGalleryMarkup(fotoGallery, totalHits, e) {

//     clearGallery()
//     console.log(sum, `summ`)
//     console.log(fotoGallery, `galeryarray`)
//     console.log(totalHits, `hits`)
//       if (document.querySelector('.load-more') === null) {
     
          
//           const loadMoreButton = loadMoreBtn();
          
//           refs.galleryContainer.insertAdjacentHTML('beforeend', loadMoreButton);
  
//           btnLoadMore = new LoadMoreBtnClass({
//   selector: '.load-more',
//               hidden: false,
//           });
//       }
   
//     btnLoadMore.refs.button.addEventListener('click', onLoadMore);
//     refs.galleryContainer.insertAdjacentHTML('afterbegin', gallery(fotoGallery))
    
//     // слушатель для модалки
//     var lightbox = new SimpleLightbox('.gallery a', {elements: '.gallery a'} );
   
//     lightbox.on('show.simplelightbox', function () {
// 	 refs.galleryContainer.addEventListener('click', openGalleryFoto)
// });
//     console.log(lightbox);

//     //скролл
//     window.scroll(0, 0);
    
//     function pageScroll() {
//     window.scrollBy(0,1);
//     scrolldelay = setTimeout(pageScroll,10);
//     }
//      pageScroll()
    

//       if (totalHits === 0) {
//               clearGallery()
//       return  Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
//       } else if (sum >= totalHits) {

//           btnLoadMore.hide()
//           return  Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
//       }
   
// }

// function clearGallery() {
//     refs.galleryContainer.innerHTML = '';
// };

// // const newsApiService = new NewsApiService();
// //  console.log(loadMoreBtnClass)
// const newsApiService = new NewsApiService();


// // ИНДЕКС

// // function openGalleryFoto(e, fotoGallery) {
// //     e.preventDefault();
// //     //див элемента, в котором храниться наша картинка
// //     const currentCard = e.target.parentNode.parentNode;
// //     //создаем обьект-коллекцию со всеми дивами в галерее
// //     const arrives = document.querySelectorAll('.photo-card')
 
// //     //условие, которое дает реакцию только на клик на картинку
// //       if (e.target.nodeName !== 'IMG') {
// //     return;
// //       }
    
// //     //преобразовываем коллекцию в массив
// //     const createObject = Object.values(arrives);
// //     console.dir(b.indexOf(e.target.parentNode.parentNode), `hgty`)
// //     //узнаем индекс нашего элемента
// //     const currentIndex = createObject.indexOf(currentTarget)


// //     }
    
    
// function openGalleryFoto(e) {
//     e.preventDefault();
//     console.log(e.target.parentNode.href)
//     }

//hkjkjk