let apiService = {
    getData: async function (page, pageType){
        uiService.loader.style.display = 'block'
            let response = await fetch(`https://swapi.co/api/${pageType}/?page=${page}`)
            let data = await response.json()
            if(navigationService.pageType==='people'){
                uiService.loader.style.display = 'none'
                uiService.displayPeople(data)
                navigationService.showNavigationBtn(data)
                navigationService.pagination(data, navigationService.pageType)
            } else if (navigationService.pageType === 'starships'){
                uiService.loader.style.display = 'none'
                uiService.displayShips(data)
                navigationService.showNavigationBtn(data)
                navigationService.pagination(data, navigationService.pageType)
            }
    } 
}
