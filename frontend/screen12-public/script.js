// METRICS
document.getElementById("users").innerText = 1280;
document.getElementById("trips").innerText = 3420;
document.getElementById("budget").innerText = "₹ 3,200";
document.getElementById("city").innerText = "Goa";

// USERS TABLE
const users = [
  { name: "Suresh Ram", trips: 5, status: "Active" },
  { name: "Ananya", trips: 3, status: "Active" },
  { name: "Rahul", trips: 7, status: "Flagged" }
];

const table = document.getElementById("userTable");

users.forEach(u => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${u.name}</td>
    <td>${u.trips}</td>
    <td>${u.status}</td>
    <td>
      <button class="btn-view">View</button>
      <button class="btn-disable">Disable</button>
    </td>
  `;

  table.appendChild(row);
});
