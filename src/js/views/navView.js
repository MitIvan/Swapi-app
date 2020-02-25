
import { elements } from './domElements'

export let showNavBtn = navType => {
    !navType.next ? elements.nextBtn.style.display = 'none' : elements.nextBtn.style.display = 'block';
    !navType.previous ? elements.previousBtn.style.display = 'none' : elements.previousBtn.style.display = 'block';  
}

export let showLoader = toggle => {
    !toggle ? elements.loader.style.display = 'none' : elements.loader.style.display = 'block';
}

export let pagination = data => {
   let pageNum = elements.pageNum;
    let numberOfPages = data.count / 10 + 1;
    Math.ceil(numberOfPages );
    pageNum.innerHTML = '';
    for(let i = 1; i<= numberOfPages; i++){
        let button = document.createElement('button');
        button.innerHTML = `${i}`;
        button.value = i;
        pageNum.appendChild(button);   
    };
};