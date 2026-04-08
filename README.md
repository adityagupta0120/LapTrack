# 🏎️ LapTrack — F1 Fan Dashboard

LapTrack is a Formula 1 fan web app built with vanilla HTML, CSS, and JavaScript. It covers drivers, teams, race schedule, standings, and news — all with a full-screen video background and a dark/light mode toggle on every page.

---

## Pages

| Page | Description |
|------|-------------|
| `home/` | Landing page — Ferrari video background, LapTrack logo, Continue button that plays an F1 engine sound then redirects |
| `Drivers/` | Driver cards loaded from `drivers.json` — shows driver photo, name, team, nationality, and code |
| `TEAMS/` | All F1 constructors fetched live from the Jolpica Ergast API — includes a live search bar to filter teams |
| `schedule/` | 2026 race calendar loaded from `schedule.json` — cards show circuit image, location, country, and date |
| `standings/` | 2025 driver standings table with team color indicators — sortable high to low or low to high by points |
| `news/` | F1 race report cards — image on the left, title, description, date, and a Read More link on the right |

---

## Features

- Full-screen video background on every page
- Dark / Light mode toggle in the navbar on all pages — switches between Ferrari video (light) and Red Bull video (dark)
- Live team search on the Teams page
- Sortable standings table (high to low / low to high)
- F1 news cards with links to official F1 articles
- Responsive layout across all pages

---

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- [Google Fonts — Cinzel](https://fonts.google.com/specimen/Cinzel)
- [Jolpica Ergast F1 API](https://api.jolpi.ca/ergast/) — live constructor data for Teams page
- Local JSON files (`drivers.json`, `schedule.json`) for Drivers and Schedule pages
- Static data array in `standing.js` for the Standings page
- Static articles array in `news.js` for the News page

---

## Project Structure

```
LapTrack/
├── home/
│   ├── index.html        # Landing page
│   ├── hello.css         # Landing page styles
│   └── script.js         # Sound + redirect on Continue button
├── Drivers/
│   ├── drivers.html
│   ├── drivers.css
│   ├── drivers.js        # Loads cards from drivers.json
│   ├── drivers.json      # Driver data
│   └── images/           # Driver portrait images
├── TEAMS/
│   ├── teams.html
│   ├── TEAMS.CSS
│   └── teams.js          # Fetches from Ergast API + search filter
├── schedule/
│   ├── schedule.html
│   ├── schedule.css
│   ├── schedule.js       # Loads cards from schedule.json
│   ├── schedule.json     # Race calendar data
│   └── images/           # Circuit images
├── standings/
│   ├── standings.html
│   ├── standing.css
│   └── standing.js       # Static driver data + sort logic
├── news/
│   ├── news.html
│   ├── news.css
│   └── news.js           # Static articles array + card rendering
├── toggle.js             # Shared dark/light mode toggle (used by all pages)
└── assets/
    ├── ferrari wallpaer 2.mp4          # Light mode background video
    ├── f1-red-bull-bolid.1920x1080.mp4 # Dark mode background video
    ├── f1sound.mp3                     # Engine sound on landing page
    └── logo3.png                       # LapTrack navbar logo
```

---

## Getting Started

Open `home/index.html` in your browser — no installs or build tools needed.

> The Teams page requires an internet connection to fetch data from the Ergast API.
