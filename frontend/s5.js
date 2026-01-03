const sectionsContainer = document.getElementById("sections");
const addBtn = document.getElementById("addBtn");

let sectionCount = 0;

/* Initial beach itinerary data */
const itineraryData = [
  {
    title: "Travel to Goa",
    description: "Flight from Chennai to Goa followed by cab to beach resort.",
    date: "10 Mar",
    budget: "₹8,000"
  },
  {
    title: "Beach Resort Stay",
    description: "Stay near Baga Beach with sea-view room and breakfast.",
    date: "10–15 Mar",
    budget: "₹25,000"
  },
  {
    title: "Beach Activities",
    description: "Surfing, snorkeling, dolphin watching, sunset cruise.",
    date: "11–14 Mar",
    budget: "₹6,000"
  }
];

/* Render sections */
function renderSections() {
  sectionsContainer.innerHTML = "";

  itineraryData.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "section-card";

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="inputs-row">
        <input type="text" value="${item.date}" 
               oninput="updateField(${index}, 'date', this.value)" />
        <input type="text" value="${item.budget}" 
               oninput="updateField(${index}, 'budget', this.value)" />
      </div>
    `;

    sectionsContainer.appendChild(card);
  });
}

/* Update data in real time */
function updateField(index, field, value) {
  itineraryData[index][field] = value;
}

/* Add new section dynamically */
addBtn.addEventListener("click", () => {
  sectionCount++;

  itineraryData.push({
    title: `Custom Beach Plan ${sectionCount}`,
    description: "Add details like island hopping, spa, shopping, or nightlife.",
    date: "",
    budget: ""
  });

  renderSections();
});

/* Initial load */
renderSections();
