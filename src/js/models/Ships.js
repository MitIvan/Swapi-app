import axios from 'axios';

export default class Ships {
    constructor(page){
        this.page = page;
    }
    async  getShips(){
        try{
            let res = await axios(`https://swapi.co/api/starships/?page=${this.page}`)
            this.result = res.data;
            // console.log(this.result);    
        } catch(error) {
            console.log(error); 
        }
     }
}
    