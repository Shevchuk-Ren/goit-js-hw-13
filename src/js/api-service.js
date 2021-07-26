export default class NewsApiService {
    constructor() {
        this.querySearch = '';
        this.page = 1;
    
    }
    //метод отвечает за все http запросы
    fetchArticles() {

    const options = {
    headers: {
        Authorization: '22611129-58a3168a9d70d9c0808a9c973',
    },
   
        };
        console.log(`option`, this.querySearch)
         console.log(`page`, this.page)
         const url = `https://pixabay.com/api/?key=${options.headers.Authorization}&q=${this.querySearch}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=4`;
 return fetch(url).then(r => 
    r.json()
).then(data => {
   
    this.incrementPage()
    return data.hits;
    });
    }
    
    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.querySearch;
    }
    set query(newQuery) {
        this.querySearch = newQuery;
    }
  
}