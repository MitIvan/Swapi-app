import axios from 'axios';

export default class People {
    constructor(page){
        this.page = page;
    }
    async  getPeople(){
        try{
            let res = await axios(`https://swapi.co/api/people/?page=${this.page}`)
            this.result = res.data;
            // console.log(this.result);    
        } catch(error) {
            console.log(error); 
        }
     }
}
    
 