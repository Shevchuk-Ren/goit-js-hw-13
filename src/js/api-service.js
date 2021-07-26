export default class NewsApiService {
    constructor() {
        this.querySearch = '';
    
    }
    //метод отвечает за все http запросы
    fetchArticles() {

    const options = {
    headers: {
        Authorization: '22611129-58a3168a9d70d9c0808a9c973',
    },
   
        };
         console.log(`option`, this.querySearch)
         const url = `https://pixabay.com/api/?key=${options.headers.Authorization}&q=${this.querySearch}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`;
fetch(url).then(r => 
    r.json()
    ).then(console.log);
    }
    get query() {
        return this.querySearch;
    }
    set query(newQuery) {
        this.querySearch = newQuery;
    }
}