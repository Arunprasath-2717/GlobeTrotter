const feed = document.getElementById("feed");

const posts = [
  {
    user: "Suresh Ram",
    city: "Goa",
    text: "Amazing 3-day budget trip with beaches, food and nightlife.",
  },
  {
    user: "Ananya",
    city: "Ooty",
    text: "Perfect hill station plan with nature walks and tea estates.",
  },
  {
    user: "Rahul",
    city: "Jaipur",
    text: "Cultural experience with forts, local food and markets.",
  }
];

posts.forEach(p => {
  const card = document.createElement("div");
  card.className = "post";

  card.innerHTML = `
    <div class="post-header">
      <div class="avatar"></div>
      <div>
        <h6>${p.user}</h6>
        <span class="tag">${p.city}</span>
      </div>
    </div>

    <div class="post-body">${p.text}</div>

    <div class="post-actions">
      <button>👍 Like</button>
      <button>💬 Comment</button>
      <button>🔖 Save</button>
      <button>Reuse Plan</button>
    </div>
  `;

  feed.appendChild(card);
});
