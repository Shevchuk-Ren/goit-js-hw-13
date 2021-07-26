import './sass/main.scss';
import NewsApiService from './js/api-service'
import Notiflix from "notiflix";
import gallery from './templates/gallery-card.hbs'

// const options = {
//     headers: {
//         Authorization: '22611129-58a3168a9d70d9c0808a9c973',
//     },
    
// };
// console.log(NewsApiService)
const newsApiService = new NewsApiService();

const refs = {
    form: document.querySelector('.search-form'),
    input: document.querySelector('input'),
    btnSearch: document.querySelector('button'),
    galleryContainer: document.querySelector('.gallery'),
    btnLoadMore: document.querySelector('.loader')
}
// const URL = `https://pixabay.com/api/?key=${options.headers.Authorization}&q=cat`;
// fetch(URL).then(r => 
//     r.json()
// ).then(console.log);
// console.log(console.log)

// refs.btnSearch.addEventListener('click', searchGalleryImg);
// refs.input.addEventListener('input', onInput)
refs.form.addEventListener('submit', onSearch)
refs.btnLoadMore.addEventListener('click', onLoadMore)



function onSearch(evt) {
    evt.preventDefault()
  
    // через форму добираемся до инпута по его имени searchQuery делаем потому что  refs.input.value при модульном хранении файлов не работает
    newsApiService.query = evt.currentTarget.elements.searchQuery.value;
    
    newsApiService.fetchArticles()
       
    //  console.log(`значение инпут`, querySearch);


}

function onLoadMore() {
     newsApiService.fetchArticles()
}