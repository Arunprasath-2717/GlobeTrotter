const activities = [
  { title: "Baga Beach", type: "place", desc: "Famous for nightlife and water sports." },
  { title: "Anjuna Beach", type: "place", desc: "Relaxed beach with sunset views." },
  { title: "Scuba Diving", type: "activity", desc: "Explore marine life underwater." },
  { title: "Dolphin Watching", type: "activity", desc: "Morning boat ride to spot dolphins." },
  { title: "Beach Yoga", type: "activity", desc: "Calming yoga by the sea." },
  { title: "Seafood Dining", type: "activity", desc: "Fresh coastal cuisine experience." }
];

const cardsContainer = document.getElementById("cards");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const groupSelect = document.getElementById("group");

function renderCards(data) {
  cardsContainer.innerHTML = "";
  data.forEach(item => {
    cardsContainer.innerHTML += `
      <div class="card">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    `;
  });
}

function applyFilters() {
  let filtered = [...activities];

  const search = searchInput.value.toLowerCase();
  const sort = sortSelect.value;
  const group = groupSelect.value;

  if (search) {
    filtered = filtered.filter(a =>
      a.title.toLowerCase().includes(search)
    );
  }

  if (group !== "all") {
    filtered = filtered.filter(a => a.type === group);
  }

  filtered.sort((a, b) =>
    sort === "az"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );

  renderCards(filtered);
}

searchInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);
groupSelect.addEventListener("change", applyFilters);

// Initial Load
renderCards(activities);
