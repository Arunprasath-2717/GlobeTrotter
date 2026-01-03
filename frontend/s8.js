const searchInput = document.getElementById("searchInput");
const filterBy = document.getElementById("filterBy");
const cards = document.querySelectorAll(".card");

function applyFilters() {
  const query = searchInput.value.toLowerCase();
  const filter = filterBy.value;

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    const type = card.dataset.type;

    const matchesSearch = text.includes(query);
    const matchesFilter = !filter || filter === type;

    card.style.display = matchesSearch && matchesFilter ? "flex" : "none";
  });
}

searchInput.addEventListener("input", applyFilters);
filterBy.addEventListener("change", applyFilters);
