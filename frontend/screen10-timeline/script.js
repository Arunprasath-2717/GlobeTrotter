let tripData = {
  days: [
    {
      dayId: 1,
      activities: [
        { time: "09:00", title: "Beach Walk" },
        { time: "13:00", title: "Lunch – Cafe" }
      ]
    }
  ]
};

let activeDay = 1;
let communityPosts = [
  { user: "Suresh Ram", city: "Goa", text: "3-day budget trip with beaches & nightlife." },
  { user: "Ananya", city: "Ooty", text: "Nature walks & tea estate itinerary." }
];

/* CALENDAR */
function renderCalendar() {
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";

  tripData.days.forEach(day => {
    const btn = document.createElement("button");
    btn.className = "day-btn" + (day.dayId === activeDay ? " active" : "");
    btn.innerText = `Day ${day.dayId}`;
    btn.onclick = () => {
      activeDay = day.dayId;
      renderCalendar();
      renderTimeline();
    };
    calendar.appendChild(btn);
  });
}

/* TIMELINE */
function renderTimeline() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = `<h3>Day ${activeDay}</h3>`;

  const day = tripData.days.find(d => d.dayId === activeDay);

  day.activities.forEach((act, index) => {
    const row = document.createElement("div");
    row.className = "event";

    row.innerHTML = `
      <span class="time">${act.time}</span>
      <div class="card">${act.title}</div>

      <div class="event-actions">
        <button class="edit" onclick="editActivity(${index})">✏️</button>
        <button class="delete" onclick="deleteActivity(${index})">🗑️</button>
      </div>
    `;

    timeline.appendChild(row);
  });

  timeline.innerHTML += `
    <button class="add-btn" onclick="addActivity()">+ Add Activity</button>
  `;
}


/* COMMUNITY */
function renderCommunity() {
  const container = document.getElementById("communityList");
  container.innerHTML = "";

  communityPosts.forEach(post => {
    container.innerHTML += `
      <div class="community-card">
        <strong>${post.user}</strong>
        <span class="tag">${post.city}</span>
        <p>${post.text}</p>
        <div class="actions">
          <button>👍 Like</button>
          <button>💾 Save</button>
          <button>🔁 Reuse</button>
        </div>
      </div>
    `;
  });
}

/* MODAL */
function openShareModal() {
  document.getElementById("shareModal").style.display = "flex";
}

function closeShareModal() {
  document.getElementById("shareModal").style.display = "none";
}

function submitExperience() {
  const city = expCity.value;
  const text = expText.value;
  if (!city || !text) return;

  communityPosts.unshift({ user: "You", city, text });
  renderCommunity();
  closeShareModal();
}

/* INIT */
renderCalendar();
renderTimeline();
renderCommunity();
function deleteActivity(index) {
  const day = tripData.days.find(d => d.dayId === activeDay);
  if (!confirm("Delete this activity?")) return;

  day.activities.splice(index, 1);
  renderTimeline();
}

function editActivity(index) {
  const day = tripData.days.find(d => d.dayId === activeDay);
  const activity = day.activities[index];

  const newTitle = prompt("Edit activity", activity.title);
  const newTime = prompt("Edit time", activity.time);

  if (!newTitle || !newTime) return;

  activity.title = newTitle;
  activity.time = newTime;
  renderTimeline();
}

