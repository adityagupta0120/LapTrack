const drivers = [
    { pos:1,  name:"Lando Norris",      team:"McLaren",         points:374, color:"#FF8000" },
    { pos:2,  name:"Oscar Piastri",     team:"McLaren",         points:361, color:"#FF8000" },
    { pos:3,  name:"Max Verstappen",    team:"Red Bull Racing", points:278, color:"#3671C6" },
    { pos:4,  name:"George Russell",    team:"Mercedes",        points:230, color:"#27F4D2" },
    { pos:5,  name:"Charles Leclerc",   team:"Ferrari",         points:187, color:"#E8002D" },
    { pos:6,  name:"Carlos Sainz",      team:"Williams",        points:155, color:"#64C4FF" },
    { pos:7,  name:"Lewis Hamilton",    team:"Ferrari",         points:131, color:"#E8002D" },
    { pos:8,  name:"Kimi Antonelli",    team:"Mercedes",        points:114, color:"#27F4D2" },
    { pos:9,  name:"Nico Hulkenberg",   team:"Sauber",          points:96,  color:"#52E252" },
    { pos:10, name:"Lance Stroll",      team:"Aston Martin",    points:70,  color:"#229971" },
    { pos:11, name:"Fernando Alonso",   team:"Aston Martin",    points:56,  color:"#229971" },
    { pos:12, name:"Pierre Gasly",      team:"Alpine",          points:42,  color:"#FF87BC" },
    { pos:13, name:"Yuki Tsunoda",      team:"Red Bull Racing", points:40,  color:"#3671C6" },
    { pos:14, name:"Alexander Albon",   team:"Williams",        points:34,  color:"#64C4FF" },
    { pos:15, name:"Esteban Ocon",      team:"Haas",            points:23,  color:"#B6BABD" },
    { pos:16, name:"Oliver Bearman",    team:"Haas",            points:18,  color:"#B6BABD" },
    { pos:17, name:"Jack Doohan",       team:"Alpine",          points:10,  color:"#FF87BC" },
    { pos:18, name:"Isack Hadjar",      team:"Racing Bulls",    points:8,   color:"#6692FF" },
    { pos:19, name:"Gabriel Bortoleto", team:"Sauber",          points:5,   color:"#52E252" },
    { pos:20, name:"Liam Lawson",       team:"Racing Bulls",    points:2,   color:"#6692FF" },
    { pos:21, name:"Valtteri Bottas",   team:"Sauber",          points:18,  color:"#52E252" },
    { pos:22, name:"Zhou Guanyu",       team:"Sauber",          points:12,  color:"#52E252" },
    { pos:23, name:"Daniel Ricciardo",  team:"Racing Bulls",    points:9,   color:"#6692FF" },
    { pos:24, name:"Nyck de Vries",     team:"AlphaTauri",      points:7,   color:"#4E7C9B" },
    { pos:25, name:"Nick Hulkenberg",   team:"Haas",            points:6,   color:"#B6BABD" },
    { pos:26, name:"Logan Sargeant",    team:"Williams",        points:5,   color:"#64C4FF" },
    { pos:27, name:"Theo Pourchaire",   team:"Sauber",          points:4,   color:"#52E252" },
    { pos:28, name:"Felipe Drugovich",  team:"Aston Martin",    points:4,   color:"#229971" },
    { pos:29, name:"Frederik Vesti",    team:"Mercedes",        points:3,   color:"#27F4D2" },
    { pos:30, name:"Mick Schumacher",   team:"Haas",            points:3,   color:"#B6BABD" },
    { pos:31, name:"Antonio Giovinazzi",team:"Ferrari",         points:2,   color:"#E8002D" },
    { pos:32, name:"Robert Kubica",     team:"Alfa Romeo",      points:2,   color:"#900000" },
    { pos:33, name:"Nico Rosberg",      team:"Mercedes",        points:1,   color:"#27F4D2" },
    { pos:34, name:"Romain Grosjean",   team:"Haas",            points:1,   color:"#B6BABD" },
    { pos:35, name:"Kevin Magnussen",   team:"Haas",            points:1,   color:"#B6BABD" },
    { pos:36, name:"Stoffel Vandoorne", team:"McLaren",         points:1,   color:"#FF8000" },
    { pos:37, name:"Pascal Wehrlein",   team:"Sauber",          points:1,   color:"#52E252" },
    { pos:38, name:"Marcus Ericsson",   team:"Sauber",          points:1,   color:"#52E252" },
    { pos:39, name:"Jolyon Palmer",     team:"Renault",         points:1,   color:"#FFD700" },
    { pos:40, name:"Rio Haryanto",      team:"Manor",           points:1,   color:"#FF4500" }
];

function render(data) {
    const rows = data.map(d => `
        <tr>
            <td class="pos">${d.pos}</td>
            <td><span class="team-bar" style="background:${d.color}"></span>${d.name}</td>
            <td>${d.team}</td>
            <td class="points">${d.points}</td>
        </tr>`).join('');

    document.getElementById('driversTable').innerHTML = `
        <table class="standings-table">
            <thead><tr><th>POS</th><th>Driver</th><th>Team</th><th>Points</th></tr></thead>
            <tbody>${rows}</tbody>
        </table>`;
}

function sortBy(dir, btn) {
    document.querySelectorAll('.sort-btn').forEach(function(b) {
        b.classList.remove('active');
    });
    btn.classList.add('active');

    // sort high to low
    if (dir === 'desc') {
        drivers.sort(function(a, b) {
            return b.points - a.points;
        });
    }

    // sort low to high
    if (dir === 'asc') {
        drivers.sort(function(a, b) {
            return a.points - b.points;
        });
    }

    render(drivers);
}

sortBy('desc', document.querySelector('.sort-btn'));