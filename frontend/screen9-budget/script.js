let dayCount = 0;

/* Create Day 1 automatically */
document.addEventListener("DOMContentLoaded", () => {
  addDay();
});

/* ADD DAY */
function addDay() {
  dayCount++;

  const day = document.createElement("div");
  day.className = "day-section";

  day.innerHTML = `
    <div class="day-header">
      <span class="day-badge">Day ${dayCount}</span>
      <button class="remove-day" onclick="removeDay(this)">Remove</button>
    </div>

    <div class="activities"></div>

    <button class="btn add-activity-btn" onclick="addActivity(this)">
      <i class="bi bi-plus-circle"></i> Add Activity
    </button>
  `;

  document.getElementById("daysContainer").appendChild(day);
}

/* REMOVE DAY */
function removeDay(btn) {
  btn.closest(".day-section").remove();
  calculateTotal();
}

/* ADD ACTIVITY */
function addActivity(btn) {
  const container = btn.previousElementSibling;

  const row = document.createElement("div");
  row.className = "activity-row";

  row.innerHTML = `
    <input type="text" class="form-control activity-name" placeholder="Activity name">
    <input type="number" class="form-control cost-input" value="0" oninput="calculateTotal()">
    <button class="remove-activity" onclick="this.parentElement.remove(); calculateTotal()">✕</button>
  `;

  container.appendChild(row);
}

/* CALCULATE TOTAL */
function calculateTotal() {
  let total = 0;
  document.querySelectorAll(".cost-input").forEach(input => {
    total += Number(input.value) || 0;
  });
  document.getElementById("totalCost").innerText = "₹ " + total;
}
saveTripData();
function saveTripData() {
  const days = [];

  document.querySelectorAll(".day-section").forEach((dayEl, index) => {
    const activities = [];

    dayEl.querySelectorAll(".activity-row").forEach(row => {
      const name = row.querySelector(".activity-name").value;
      const cost = row.querySelector(".cost-input").value;

      if (name) {
        activities.push({ name, cost });
      }
    });

    days.push({ day: index + 1, activities });
  });

  localStorage.setItem("tripData", JSON.stringify({ days }));
}
