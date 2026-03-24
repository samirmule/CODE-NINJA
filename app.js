const foodData = [
  {
    id: 1,
    title: "Wedding Food",
    quantity: "50 plates",
    location: "Pune",
    expiresIn: 120
  },
  {
    id: 2,
    title: "Restaurant Surplus",
    quantity: "20 plates",
    location: "Mumbai",
    expiresIn: 60
  }
];

const container = document.getElementById("food-container");

function createCard(food) {
  const card = document.createElement("div");
  card.className = "card";

  let time = food.expiresIn * 60;

  const timer = document.createElement("p");

  function updateTimer() {
    const mins = Math.floor(time / 60);
    const secs = time % 60;

    timer.innerText = `⏳ ${mins}:${secs.toString().padStart(2, "0")}`;

    if (time > 3600) timer.style.color = "green";
    else if (time > 1800) timer.style.color = "orange";
    else timer.style.color = "red";

    if (time > 0) time--;
  }

  setInterval(updateTimer, 1000);

  const btn = document.createElement("button");
  btn.innerText = "Claim Food";
  btn.onclick = () => alert("Food Claimed!");

  card.innerHTML = `
    <h2>${food.title}</h2>
    <p>🍛 ${food.quantity}</p>
    <p>📍 ${food.location}</p>
  `;

  card.appendChild(timer);
  card.appendChild(btn);

  container.appendChild(card);
}

foodData.forEach(createCard);