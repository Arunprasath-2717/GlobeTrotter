const activities = [
  {
    name: "Sunset Beach Walk",
    description: "Relaxing walk during golden hour",
    type: "sunset",
    info: "Best after 5:30 PM"
  },
  {
    name: "Surfing Adventure",
    description: "Ride waves with trained instructors",
    type: "adventure",
    info: "Safety gear included"
  },
  {
    name: "Beach Yoga",
    description: "Morning yoga with sea breeze",
    type: "relax",
    info: "Ideal at sunrise"
  },
  {
    name: "Snorkeling Tour",
    description: "Explore coral reefs and fish",
    type: "adventure",
    info: "Clear waters required"
  },
  {
    name: "Candlelight Beach Dinner",
    description: "Romantic seaside dining",
    type: "sunset",
    info: "Reservation required"
  }
];

const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const sortSelect = document.getElementById("sortSelect");
const activityList = document.getElementById("activityList");

/* Render cards dynamically */
function renderActivities(data) {
  activityList.innerHTML = "";

  if (data.length === 0) {
    activityList.innerHTML = "<p>No activities found.</p>";
    return;
  }

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.info = item.info;

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <span class="tag ${item.type}">${item.type}</span>
    `;

    activityList.appendChild(card);
  });
}

/* Apply real-time filters */
function updateView() {
  let filtered = [...activities];

  const searchText = searchInput.value.toLowerCase();
  const filter = filterSelect.value;
  const sort = sortSelect.value;

  if (searchText) {
    filtered = filtered.filter(a =>
      a.name.toLowerCase().includes(searchText) ||
      a.description.toLowerCase().includes(searchText)
    );
  }

  if (filter) {
    filtered = filtered.filter(a => a.type === filter);
  }

  if (sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  renderActivities(filtered);
}

/* Event listeners */
searchInput.addEventListener("input", updateView);
filterSelect.addEventListener("change", updateView);
sortSelect.addEventListener("change", updateView);

/* Initial load */
renderActivities(activities);
