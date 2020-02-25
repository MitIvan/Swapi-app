import { elements } from './domElements'

export let renderPeople = people => {
    elements.table.innerHTML = '';
    elements.table.innerHTML +=`
        <table> 
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mass</th>
                    <th>Height</th>
                    <th>Gender</th>
                    <th>Birth year</th>
                    <th>Films</th>
                </tr>
            </thead>
            <tbody id ="tbody">`
        let tBody = document.querySelector('#tbody')
        for (const person of people.results) {
            tBody.innerHTML += `
            <tr>
                <td>${person.name}</td>
                <td>${person.mass}</td>
                <td>${person.height}</td>
                <td>${person.gender}</td>
                <td>${person.birth_year}</td>
                <td>${person.films.length}</td>
            </tr>`
        }        
}

