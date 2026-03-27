const container = document.getElementById("team-container");
const searchInput = document.getElementById("searchInput");

let allTeams = [];
function displayTeams(teams) {
  container.innerHTML = "";

  teams.forEach(team => {

    const card = `
      <div class="card">
        <h2>${team.name}</h2>
        <p>${team.nationality}</p>

        <a href="${team.url}" target="_blank">Know More</a>
      </div>
    `;

    container.innerHTML += card;
  });
}

fetch('https://api.jolpi.ca/ergast/f1/constructors?limit=200')
  .then(res => res.json())
  .then(data => {
    allTeams = data.MRData.ConstructorTable.Constructors;
    displayTeams(allTeams);
  });

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = allTeams.filter(team =>
    team.name.toLowerCase().includes(value)
  );

  if (filtered.length === 0) {
    container.innerHTML = "<p style='color:white; text-align: center; background: rgba(0,0,0,0.6); padding: 20px; border-radius: 8px; height: 100px; line-height: 100px; width: 300px; font-size: 35px;'>No teams found.</p>";
    return;
  }

  displayTeams(filtered);
});



