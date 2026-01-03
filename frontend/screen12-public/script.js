// MOCK DATA (Replace with Firebase later)
const users = [
  { name: "Suresh Ram", trips: 5, status: "active" },
  { name: "Ananya", trips: 3, status: "active" },
  { name: "Rahul", trips: 7, status: "flagged" }
];

const trips = [
  { city: "Goa", budget: 3200, month: "Jan" },
  { city: "Ooty", budget: 2800, month: "Feb" },
  { city: "Goa", budget: 3500, month: "Mar" },
  { city: "Jaipur", budget: 4000, month: "Apr" }
];

// KPI LOGIC
document.getElementById("totalUsers").innerText = users.length;
document.getElementById("totalTrips").innerText = trips.length;

const avg =
  trips.reduce((a, b) => a + b.budget, 0) / trips.length;
document.getElementById("avgBudget").innerText = `₹ ${Math.round(avg)}`;

const cityCount = {};
trips.forEach(t => cityCount[t.city] = (cityCount[t.city] || 0) + 1);
document.getElementById("topCity").innerText =
  Object.keys(cityCount).sort((a,b)=>cityCount[b]-cityCount[a])[0];

// USERS TABLE
const table = document.getElementById("userTable");
users.forEach(u => {
  table.innerHTML += `
    <tr>
      <td>${u.name}</td>
      <td>${u.trips}</td>
      <td><span class="status ${u.status}">${u.status}</span></td>
      <td><button>View</button></td>
    </tr>
  `;
});

// CHARTS
new Chart(document.getElementById("tripsChart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [{
      label: "Trips",
      data: [1,1,1,1],
      borderColor: "#1da1f2",
      fill: false
    }]
  }
});

new Chart(document.getElementById("budgetChart"), {
  type: "pie",
  data: {
    labels: ["Goa", "Ooty", "Jaipur"],
    datasets: [{
      data: [2,1,1],
      backgroundColor: ["#1da1f2","#2ecc71","#f1c40f"]
    }]
  }
});

new Chart(document.getElementById("activityChart"), {
  type: "bar",
  data: {
    labels: ["Beach", "Food", "Sightseeing"],
    datasets: [{
      data: [8,5,4],
      backgroundColor: "#1da1f2"
    }]
  }
});
