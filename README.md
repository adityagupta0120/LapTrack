# 🏎️ LapTrack — F1 Fan Dashboard

LapTrack is a Formula 1 fan web app built with vanilla HTML, CSS, and JavaScript. It gives you a central hub to explore F1 drivers, teams, race schedules, standings, and news — all wrapped in a sleek, video-background UI.

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing page with a Ferrari video background, the LapTrack logo, and a Continue button that plays an F1 engine sound before navigating |
| `Drivers/` | Displays F1 driver cards loaded from a local `drivers.json` file, showing name, team, nationality, and driver code |
| `TEAMS/` | Fetches all F1 constructors from the Jolpica Ergast API with a live search/filter input |
| `schedule/` | Shows the 2026 race calendar as image cards loaded from `schedule.json`, with location, country, and date |
| `standings/` | F1 championship standings page |
| `news/` | F1 news page |

---

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- [Google Fonts — Cinzel](https://fonts.google.com/specimen/Cinzel)
- [Jolpica Ergast F1 API](https://api.jolpi.ca/ergast/) — for live team/constructor data
- Local JSON files for drivers and race schedule data

---

## Project Structure

```
LapTrack/
├── index.html          # Landing page
├── script.js           # Sound + redirect logic
├── hello.css           # Landing page styles
├── Drivers/            # Drivers page (HTML, CSS, JS, JSON, images)
├── TEAMS/              # Teams page (HTML, CSS, JS)
├── schedule/           # Schedule page (HTML, CSS, JS, JSON, images)
├── standings/          # Standings page (HTML, CSS, JS)
├── news/               # News page (HTML, CSS, JS)
└── hii/                # Shared assets (logo, video, audio)
```

---

## Getting Started

Just open `index.html` in your browser — no build tools or installs needed.

> For the Teams page to load data, you'll need an internet connection since it fetches from the Ergast API.

---

## Assets

- `hii/f1sound.mp3` — F1 engine sound played on the landing page
- `hii/ferrari wallpaer 2.mp4` — Background video used across all pages
- `hii/logo3.png` — LapTrack navbar logo
- `Drivers/images/` — Driver portrait images
- `schedule/images/` — Race circuit images
