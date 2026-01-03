let sectionCount = 3;

function addSection() {
  sectionCount++;

  const sections = document.getElementById("sections");

  const div = document.createElement("div");
  div.className = "section-card";
  div.innerHTML = `
    <h3>Custom Beach Plan ${sectionCount}</h3>
    <p>Add details like sightseeing, shopping, spa sessions, or island hopping.</p>
    <div class="inputs-row">
      <input type="text" placeholder="Date Range" />
      <input type="text" placeholder="Estimated Budget" />
    </div>
  `;

  sections.appendChild(div);
}
