
fetch("drivers.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("drivers");
    data.forEach(driver => {
      const card = document.createElement("div");
      card.innerHTML = `
      <div class="divv" style="background-image: url('${driver.image}'); background-size: cover; background-position: center; border-radius: 10px; padding: 20px; color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.7);">
        <div class="hello">
          <h2>${driver.name}</h2>
          <p>Team: ${driver.team}</p>
          <p>Nationality: ${driver.nationality}</p>
          <Code>${driver.code}</Code>
        </div>
      </div>
      `;
      container.appendChild(card);
    });
  });