// Global app controller
import People from './models/People'
import Ships from './models/Ships'
import {renderPeople} from './views/peopleView';
import {renderShips} from './views/shipsView';
import * as navigation from './views/navView'
import {elements} from './views/domElements';

let state = {};

// -------------People controller--------------


let controlPeople = async() => {

    state.pageType = 'people'
    state.people = new People(state.page);
    navigation.showLoader(true)
    await state.people.getPeople();
    navigation.showLoader(false)
    navigation.pagination(state.people.result)
    renderPeople(state.people.result);
    navigation.showNavBtn(state.people.result);  
}


//----------StarShips Controller-------------

let controlShips = async() => {
    state.pageType = 'ships'
    state.ships = new Ships(state.page);
    navigation.showLoader(true)
    await state.ships.getShips();
    navigation.showLoader(false)
    navigation.pagination(state.ships.result)
    renderShips(state.ships.result);
    navigation.showNavBtn(state.ships.result);  
}

let selectPage = (pageType) => {
    pageType === 'people' ? controlPeople() : null
    pageType === 'ships' ? controlShips() : null;
}


//-------- Event Listeners------------
elements.people.addEventListener('click', () => {
    state.page = 1
    controlPeople();
});

elements.ships.addEventListener('click', () => {
    state.page = 1
    controlShips();
});

elements.nextBtn.addEventListener('click', () => {
    state.page++;
    selectPage(state.pageType)
});

elements.previousBtn.addEventListener('click', () => {
    state.page--;
    selectPage(state.pageType)
});

elements.pageNum.addEventListener('click', e =>{
  state.page = e.target.value
  selectPage(state.pageType)
});

