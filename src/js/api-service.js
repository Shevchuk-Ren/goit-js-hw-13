const API_KEY = '22611129-58a3168a9d70d9c0808a9c973';
const BASE_URL = 'https://pixabay.com/api/'
const options = {
    headers: {
        Authorization: API_KEY,
    },
   
};
        
export default class NewsApiService {
    constructor() {
        this.querySearch = '';
        this.page = 1;
    
    }
    //метод отвечает за все http запросы
    fetchFoto() {

    
        console.log(`option`, this.querySearch)
         console.log(`page`, this)
         const url = `${BASE_URL}?key=${options.headers.Authorization}&q=${this.querySearch}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`;
 return fetch(url).then(r => 
    r.json()
).then(data => {
    console.log(data, `pageper`)
    this.incrementPage()
    // return data.hits;
    return data;
    });
    }
    
    incrementPage() {
        this.page += 1;
        // this.per_page += 40;
    }
    resetPage() {
        this.page = 1;
        //  this.per_page = 40;
    }
    get query() {
        return this.querySearch;
    }
    set query(newQuery) {
        this.querySearch = newQuery;
    }
  
}