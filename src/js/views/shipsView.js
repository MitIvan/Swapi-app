import { elements } from './domElements'

export let renderShips = ships => {
    elements.table.innerHTML = '';
    elements.table.innerHTML += `
        <table> 
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Cost</th>
                        <th>People Capacity</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody id ="tbody">`
                let tBody = document.querySelector('#tbody')
                for (const ship of ships.results) {
                    let peopleCapacity = parseInt(ship.crew) + parseInt(ship.passengers)
                    tBody.innerHTML += `
                    <tr>
                        <td>${ship.name}</td>
                        <td>${ship.model}.</td>
                        <td>${ship.manufacturer}</td>
                        <td>${ship.cost_in_credits}</td>
                        <td>${peopleCapacity}</td>
                        <td>${ship.starship_class}</td>
                    </tr>`
    }
}

