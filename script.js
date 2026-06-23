let currentGoal = "おまかせ";

function currentSeason() {
  const m = new Date().getMonth() + 1;
  if (m >= 3 && m <= 5) return "春";
  if (m >= 6 && m <= 8) return "夏";
  if (m >= 9 && m <= 11) return "秋";
  return "冬";
}

function matchesGoal(item, goal) {
  return goal === "おまかせ" || item.main === goal || item.sub === goal;
}

function matchesSeason(item, season) {
  const s = season === "auto" ? currentSeason() : season;
  return season === "all" || item.season === s || item.season === "通年";
}

function pool(category, goal, season) {
  let items = INGREDIENTS.filter(i =>
    i.category === category &&
    matchesGoal(i, goal) &&
    matchesSeason(i, season)
  );

  if (!items.length) items = INGREDIENTS.filter(i => i.category === category && matchesGoal(i, goal));
  if (!items.length) items = INGREDIENTS.filter(i => i.category === category && matchesSeason(i, season));
  if (!items.length) items = INGREDIENTS.filter(i => i.category === category);

  return items;
}

function sample(items, count) {
  const copy = [...items];
  const out = [];

  while (copy.length && out.length < count) {
    const idx = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(idx, 1)[0]);
  }

  return out;
}

function rainbowEmoji(index) {
  const colors = ["🩵", "🤍", "💎", "🫧", "🩵", "🤍"];
  return colors[index % colors.length];
}

function beautyText(items) {
  const names = items.map(i => i.name).join("、");

  if (currentGoal === "おまかせ") {
    return `${names}をバランスよく組み合わせた蒸しごはんです。タンパク質・野菜・きのこ・炭水化物が入るので、迷った日に使いやすい構成です。`;
  }

  return `${names}を組み合わせた、${currentGoal}を意識した蒸しごはんです。目的に合う食材を中心に、蒸すだけで食べやすい構成にしています。`;
}

function clearResult() {
  const result = document.getElementById("result");
  if (result) result.innerHTML = "";
}

function showResultOnly() {
  const gacha = document.getElementById("gacha");
  const zukan = document.getElementById("zukan");
  const resultPage = document.getElementById("resultPage");

  if (gacha) gacha.classList.add("hidden");
  if (zukan) zukan.classList.add("hidden");
  if (resultPage) resultPage.classList.remove("hidden");
}

function showGachaPage() {
  const gacha = document.getElementById("gacha");
  const zukan = document.getElementById("zukan");
  const resultPage = document.getElementById("resultPage");

  if (gacha) gacha.classList.remove("hidden");
  if (zukan) zukan.classList.add("hidden");
  if (resultPage) resultPage.classList.add("hidden");

  clearResult();
}

function roll() {
  const season = document.getElementById("season").value;

  const items = [
    ...sample(pool("タンパク質", currentGoal, season), 1),
    ...sample(pool("野菜", currentGoal, season), 3),
    ...sample(pool("きのこ", currentGoal, season), 1),
    ...sample(pool("炭水化物", currentGoal, season), 1)
  ];

  const result = document.getElementById("result");

  result.innerHTML = `
    <span class="kicker">${currentGoal}の日</span>
    <h1>今日の蒸しごはん</h1>

    ${items.map((item, index) => `
      <div class="item">
        <div class="emoji">${rainbowEmoji(index)}</div>
        <div>
          <b>${item.name}</b>
          <small>${item.category} / ${item.season} / ${item.main}・${item.sub}<br>${item.memo}</small>
        </div>
      </div>
    `).join("")}

    <div class="info">
      <b>栄養・美容ポイント</b>
      <p>${beautyText(items)}</p>
    </div>

    <div class="info">
      <b>蒸し時間</b>
      <p>10〜15分。根菜やいも類は薄めに切ると火が通りやすいです。</p>
    </div>

    <button class="dice" id="againBtn">← もう一回蒸す</button>
  `;

  document.getElementById("againBtn").addEventListener("click", showGachaPage);

  showResultOnly();
}

function setupGoals() {
  const box = document.getElementById("goalButtons");

  box.innerHTML = Object.keys(GOALS).map(g => `
    <button class="goal ${g === currentGoal ? "active" : ""}" data-goal="${g}">
      ${g}
      <span>${GOALS[g]}</span>
    </button>
  `).join("");

  document.querySelectorAll(".goal").forEach(b => {
    b.addEventListener("click", () => {
      currentGoal = b.dataset.goal;
      setupGoals();
      clearResult();
    });
  });

  const filter = document.getElementById("filterGoal");
  if (filter) {
    filter.innerHTML = `
      <option value="all">すべての目的</option>
      ${Object.keys(GOALS).filter(g => g !== "おまかせ").map(g => `
        <option value="${g}">${g}</option>
      `).join("")}
    `;
  }
}

function renderZukan() {
  const filterGoal = document.getElementById("filterGoal");
  const zukanList = document.getElementById("zukanList");

  if (!filterGoal || !zukanList) return;

  const selected = filterGoal.value;

  const items = INGREDIENTS.filter(i =>
    selected === "all" || matchesGoal(i, selected)
  );

  zukanList.innerHTML = items.map((item, index) => `
    <div class="item">
      <div class="emoji">${rainbowEmoji(index)}</div>
      <div>
        <b>${item.name}</b>
        <small>${item.category} / ${item.season} / ${item.main}・${item.sub}<br>${item.memo}</small>
      </div>
    </div>
  `).join("");
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    tab.classList.add("active");

    const gacha = document.getElementById("gacha");
    const zukan = document.getElementById("zukan");
    const resultPage = document.getElementById("resultPage");

    if (gacha) gacha.classList.toggle("hidden", tab.dataset.tab !== "gacha");
    if (zukan) zukan.classList.toggle("hidden", tab.dataset.tab !== "zukan");
    if (resultPage) resultPage.classList.add("hidden");

    clearResult();
    renderZukan();
  });
});

document.getElementById("roll").addEventListener("click", roll);
document.getElementById("season").addEventListener("change", clearResult);

const filterGoal = document.getElementById("filterGoal");
if (filterGoal) {
  filterGoal.addEventListener("change", renderZukan);
}

setupGoals();
clearResult();
renderZukan();