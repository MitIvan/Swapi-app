let uiService = {
    loader: document.querySelector('.loader'),
    table: document.querySelector('#table'),
    displayPeople: function (people) {
            console.log(people);
            this.table.innerHTML = '';
            this.table.innerHTML += `
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
    },
    displayShips: function(ships) {
        console.log(ships)
        this.table.innerHTML = '';
        this.table.innerHTML += `
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
}