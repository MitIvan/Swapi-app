let navigationService = {
    people: document.querySelector('.cosmonaut'),
    ships: document.querySelector('.rocket'),
    nextBtn: document.querySelector('#next'),
    previousBtn: document.querySelector('#previous'),
    pageNum: document.querySelector('.pageNum'),
    
    pageType: '',
    currentPage: 1,
    loadEventListers: function() {
        this.people.addEventListener('click', ()=> {
            this.currentPage = 1;
            this.pageType = 'people'
            apiService.getData(this.currentPage, this.pageType);
        })
        this.ships.addEventListener('click', ()=> {
            this.currentPage = 1;
            this.pageType = 'starships'
            apiService.getData(this.currentPage, this.pageType);
        })
        this.nextBtn.addEventListener('click', ()=> {
            this.nextPage()
        })
        this.previousBtn.addEventListener('click', ()=> {
            this.previousPage()
        })
    },
    nextPage: function() {
        this.currentPage++;
        apiService.getData(this.currentPage, this.pageType)
    },
    previousPage: function() {
        this.currentPage--;
        apiService.getData(this.currentPage, this.pageType)
    },
    showNavigationBtn(response){
        if(!response.next){
            this.nextBtn.style.display = 'none'
        }else{
            this.nextBtn.style.display = 'block'
        }
        if(!response.previous){
            this.previousBtn.style.display = 'none'
        }else{
            this.previousBtn.style.display = 'block'
        }
    },
    pagination: function(data, pageType){
        let pageNum = document.querySelector('.pageNum')
        let numberOfPages = data.count / 10 + 1;
        Math.ceil(numberOfPages )
        pageNum.innerHTML = ''
        for(let i = 1; i<= numberOfPages; i++){
            let button = document.createElement('button');
            button.innerHTML = `${i}`
            pageNum.appendChild(button)
            button.addEventListener('click', ()=> {
                this.currentPage = i
                apiService.getData(this.currentPage, pageType)      
            })

        }        
    },  
}

navigationService.loadEventListers()





