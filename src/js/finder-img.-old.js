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

// / ИНДЕКС

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
    
