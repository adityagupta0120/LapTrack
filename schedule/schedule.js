let all = [];

function display(races) {
    const cont = document.getElementById('cards-container');
    cont.innerHTML = "";
    races.forEach(race => {
        const card = `
        <div class="card" style="background-image: url('${race.image}')">
            <div class="location">${race.location}</div>
            <div class="race-name">${race.name}</div>
            <div class="country">${race.country}</div>
            <div class="date">${race.date}</div>
            <button class="btn">View Details</button>
        </div>`;
        cont.innerHTML += card;
    });
}

fetch('schedule.json')
    .then(res => res.json())
    .then(data => {
        all = data;
        display(all);
    });
