const articles = [
    { tag: "RACE REPORT", title: "Piastri Leads McLaren 1-2 in Spanish GP", desc: "Oscar Piastri claimed a commanding Spanish GP victory as Verstappen and Russell collided late in the race.", img: "images/spanish-gp.png", date: "June 1, 2025", link: "https://www.formula1.com/en/latest/article/piastri-leads-mclaren-1-2-from-norris-in-spanish-gp-amid-late-race-drama-for.2t1WkW9NVeMzJbOIkpM8u8" },
    { tag: "RACE REPORT", title: "Norris Wins Mexico City GP to Take Championship Lead", desc: "Lando Norris converted pole into a stunning Mexico City victory, taking the championship lead from Piastri.", img: "images/mexico-gp.png", date: "October 26, 2025", link: "https://www.formula1.com/en/latest/article/norris-seals-commanding-win-in-action-packed-mexico-city-gp-to-take-world.5ztiajHhdtqagu0qQLx0vS" },
    { tag: "RACE REPORT", title: "Russell Wins Singapore as McLaren Seal Constructors' Title", desc: "George Russell stormed to victory in Singapore while McLaren clinched the Teams' Championship.", img: "images/singapore-gp.png", date: "September 21, 2025", link: "https://www.formula1.com/en/latest/article/russell-storms-to-victory-in-singapore-as-mclaren-seal-teams-championship.7cMITGtnc9fdxEaukmGVvI" },
    { tag: "RACE REPORT", title: "Piastri Wins Dutch GP as Norris Retires Late On", desc: "Oscar Piastri extended his championship lead at Zandvoort after Norris retired in the closing stages.", img: "images/dutch-gp.png", date: "August 31, 2025", link: "https://www.formula1.com/en/latest/article/piastri-wins-as-norris-faces-late-race-retirement-in-dramatic-dutch-grand.5gVVQeQH0zjZk9hl6k6wvv" },
    { tag: "RACE REPORT", title: "Verstappen Storms to Victory at Emilia-Romagna GP", desc: "Max Verstappen snatched the lead at the start and held off the McLaren pair to win at Imola.", img: "images/emilia-romagna-gp.png", date: "May 18, 2025", link: "https://www.formula1.com/en/latest/article/verstappen-storms-to-victory-in-thrilling-emilia-romagna-grand-prix-ahead-of.4YJG3CyQJdFzCI6tiBtqoU" },
    { tag: "RACE REPORT", title: "Piastri Wins Miami GP — McLaren Seal Dominant 1-2", desc: "Oscar Piastri claimed his third consecutive win in Miami, leading Norris home 30 seconds clear of the field.", img: "images/miami-gp.png", date: "May 4, 2025", link: "https://www.formula1.com/en/latest/article/piastri-wins-from-norris-and-russell-as-mclaren-seal-commanding-1-2-in-miami.6Vfaf5zEMOKmPHzHdkGdof" }
];

const grid = document.getElementById('newsGrid');

articles.forEach(a => {
    grid.innerHTML += `
        <div class="news-card">
            <div class="card-img-wrap">
                <img src="${a.img}" alt="${a.title}">
                <span class="tag">${a.tag}</span>
            </div>
            <div class="card-body">
                <span class="date">${a.date}</span>
                <h2>${a.title}</h2>
                <p>${a.desc}</p>
                <a href="${a.link}" target="_blank" class="read-more">Read More &rarr;</a>
            </div>
        </div>`;
});
