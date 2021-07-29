import axios from "axios";


const API_KEY = '22611129-58a3168a9d70d9c0808a9c973';
const BASE_URL = 'https://pixabay.com/api/'
axios.defaults.baseURL = BASE_URL;

// let perPage = 40;
let querySearch = "cat";
const options = {
    headers: {
        Authorization: API_KEY,
    },
   
};

export default class NewsApiService {
    constructor() {
        this.querySearch = '';
        this.page = 1;
        this.perPage = 40;
        
    
    }
    //метод отвечает за все http запросы
    async fetchFoto() {
        try {
            const url = `?key=${options.headers.Authorization}&q=${this.querySearch}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`;
        const response = await axios.get(url)
        const data = response.data;
        return data;
        } catch (error) {
            throw(error)
       }
    }
    
    incrementPage() {
        this.page += 1;
        
    }
    resetPage() {
        console.log(this.page, `reset page`)
      return  this.page = 1;
     
    }
    query(newQuery) {
        console.log(newQuery, `welcome `)
       this.querySearch = newQuery;
    }

  
}










/**
 * первый вариант
 */

// axios.defaults.headers.common.Authorization = API_KEY;
// export default class NewsApiService {
//     constructor() {
//         this.querySearch = '';
//         this.page = 1;
    
//     }
//     //метод отвечает за все http запросы
//     fetchFoto() {

    
//         console.log(`option`, this.querySearch)
//          console.log(`page`, this)
//          const url = `${BASE_URL}?key=${options.headers.Authorization}&q=${this.querySearch}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`;
//  return axios.get(url).then(response => {
//     console.log(response)
//     return response.data
// }).then(data => {
//     console.log(data.hits)
//      this.incrementPage()
//     return data.hits
// })
//     }
    
//     incrementPage() {
//         this.page += 1;
//         // this.per_page += 40;
//     }
//     resetPage() {
//         this.page = 1;
//         //  this.per_page = 40;
//     }
//     get query() {
//         return this.querySearch;
//     }
//     set query(newQuery) {
//         this.querySearch = newQuery;
//     }
  
// }
// console.log()