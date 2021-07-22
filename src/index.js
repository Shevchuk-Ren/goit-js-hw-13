import './sass/main.scss';
import Notiflix from "notiflix";
import gallery from './templates/gallery-card.hbs'
const options = {
    headers: {
        Authorization: '22611129-58a3168a9d70d9c0808a9c973',
    },
    
};
console.log(gallery)
const refs = {
    form: document.querySelector('.search-form'),
    input: document.querySelector('input'),
    btnSearch: document.querySelector('button')
}
// const URL = `https://pixabay.com/api/?key=${options.headers.Authorization}&q=cat`;
// fetch(URL).then(r => 
//     r.json()
// ).then(console.log);
// console.log(console.log)

refs.btnSearch.addEventListener('click', searchGalleryImg);
// refs.input.addEventListener('input', onInput)

function searchGalleryImg(evt, gallery) {
    evt.preventDefault()
    const a = refs.input.value;
     console.log(a);
    console.log('hhh')
    // console.log(gallery)
    const URL = `https://pixabay.com/api/?key=${options.headers.Authorization}&q=${a}`;
fetch(URL).then(r => 
    r.json()
).then(console.log);
    
}
// function onInput(evt) {
   
//      const querySearch = refs.input.value;
//     return querySearch;

// }