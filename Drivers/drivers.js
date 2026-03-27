const url = "https://api.openf1.org/v1/drivers?session_key=latest";

let driversData = [];

fetch(url)
  .then(res => res.json())
  .then(data => {
    // remove duplicates
    const seen = new Set();
    driversData = data.filter(driver => {
      if (seen.has(driver.driver_number)) return false;
      seen.add(driver.driver_number);
      return true;
    });

    displayDrivers(driversData);
  });

// 📦 Display Function
function displayDrivers(drivers) {
  const container = document.getElementById("driver-container");
  container.innerHTML = "";

  drivers.forEach(driver => {
    const card = document.createElement("div");
    card.classList.add("driver-card");

    card.innerHTML = `
      <img src="${driver.headshot_url}" alt="${driver.full_name}">
      <h2>${driver.full_name}</h2>
      <p>${driver.team_name}</p>
      <p>#${driver.driver_number}</p>
      <p>${driver.country_code}</p>
    `;

    container.appendChild(card);
  });
}

// 🔍 Search
document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = driversData.filter(driver =>
    driver.full_name.toLowerCase().includes(value)
  );
  

  displayDrivers(filtered);
});

