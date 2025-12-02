import "../styles/program.css";

const API_KEY = "sb_publishable_h889CjrPIGwCMA9I4oTTaA_2L22Y__R";
const BASE = "https://jrkqcbmjknzgpbtrupxh.supabase.co/rest/v1";

// --------------------------------------------
// RENDER PAGE
// --------------------------------------------
export default function Program() {
  setTimeout(loadLearningPaths, 0);

  return `
    <main class="lp-page">
      <div class="lp-container">

        <!-- HEADER SLIDER -->
        <div class="lp-header">
          <button id="prevTab" class="lp-prev-btn">‹</button>
          <div class="lp-header-wrapper" id="lpTabs"></div>
          <button id="nextTab" class="lp-next-btn">›</button>
        </div>

        <!-- CONTENT -->
        <div id="lpContent" class="lp-content"></div>

      </div>
    </main>
  `;
}

// --------------------------------------------
// LOAD ALL LEARNING PATHS
// --------------------------------------------
async function loadLearningPaths() {
  const tabs = document.getElementById("lpTabs");
  const content = document.getElementById("lpContent");

  tabs.innerHTML = `<p>Loading...</p>`;

  try {
    const res = await fetch(`${BASE}/learning_paths?select=*`, {
      headers: { apikey: API_KEY, Authorization: "Bearer " + API_KEY },
    });

    const data = await res.json();

    const paths = [
      ...data,
      { learning_path_id: "all", learning_path_name: "Semua Kelas" },
    ];

    tabs.innerHTML = paths
      .map(
        (p) => `
        <div class="lp-tab" data-id="${p.learning_path_id}">
          ${p.learning_path_name}
        </div>
      `
      )
      .join("");

    document.querySelectorAll(".lp-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        document
          .querySelectorAll(".lp-tab")
          .forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        const id = tab.dataset.id;
        if (id === "all") renderAllClasses();
        else loadLearningPathDetail(id);
      });
    });

    document.querySelector(".lp-tab").classList.add("active");
    loadLearningPathDetail(paths[0].learning_path_id);

    setupSliderButtons();
  } catch (err) {
    tabs.innerHTML = "<p>Error loading Learning Paths</p>";
  }
}

// --------------------------------------------
// FETCH LEVEL MAP
// --------------------------------------------
async function fetchLevelMap() {
  const res = await fetch(`${BASE}/course_levels?select=*`, {
    headers: { apikey: API_KEY, Authorization: "Bearer " + API_KEY },
  });

  const levels = await res.json();
  const map = {};
  levels.forEach((lvl) => (map[lvl.id] = lvl.course_level));
  return map;
}

// --------------------------------------------
// LEVEL BADGE COLOR
// --------------------------------------------
function getLevelBadge(levelName) {
  const colors = {
    Dasar: "#16a34a",
    Pemula: "#0ea5e9",
    Menengah: "#2563eb",
    Mahir: "#7c3aed",
    Profesional: "#dc2626",
  };

  return `
    <span class="lp-level-badge"
      style="background:${colors[levelName]}20;color:${colors[levelName]}">
      ${levelName}
    </span>
  `;
}

// --------------------------------------------
// RENDER LIST COURSE PER LEARNING PATH
// --------------------------------------------
async function loadLearningPathDetail(id) {
  const content = document.getElementById("lpContent");
  content.classList.remove("show");
  content.innerHTML = "<p>Loading...</p>";

  try {
    const levelMap = await fetchLevelMap();

    const res = await fetch(`${BASE}/courses?select=*`, {
      headers: { apikey: API_KEY, Authorization: "Bearer " + API_KEY },
    });

    const courses = await res.json();
    const filtered = courses.filter(
      (c) => String(c.learning_path_id) === String(id)
    );

    if (filtered.length === 0) {
      content.innerHTML = "<p>Tidak ada kelas.</p>";
      return;
    }

    content.innerHTML = `
      <div class="lp-card-grid">
        ${filtered
          .map(
            (course) => `
        <div class="lp-course-card" data-id="${course.course_id}">
          <div class="lp-course-icon">📘</div>

          <div class="lp-course-info">
            <h3>${course.course_name}</h3>
            <div class="lp-course-sub">
              Level: ${levelMap[course.course_level_str]}
            </div>
            ${getLevelBadge(levelMap[course.course_level_str])}
          </div>
        </div>
      `
          )
          .join("")}
      </div>
    `;

    // CLICK EVENT KE COURSE DETAIL
    document.querySelectorAll(".lp-course-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.dataset.id;
        window.navigateTo(`/course?id=${id}`);
      });
    });

    setTimeout(() => content.classList.add("show"), 20);
  } catch (err) {
    content.innerHTML = "<p>Error loading detail.</p>";
  }
}

// --------------------------------------------
// RENDER SEMUA KELAS
// --------------------------------------------
async function renderAllClasses() {
  const content = document.getElementById("lpContent");
  content.classList.remove("show");
  content.innerHTML = "Loading semua kelas...";

  try {
    const levelMap = await fetchLevelMap();

    const res = await fetch(`${BASE}/courses?select=*`, {
      headers: { apikey: API_KEY, Authorization: "Bearer " + API_KEY },
    });

    const courses = await res.json();

    content.innerHTML = `
      <h2 class="all-title">Semua Kelas</h2>
      <div class="lp-card-grid">
        ${courses
          .map(
            (course) => `
        <div class="lp-course-card" data-id="${course.course_id}">
          <div class="lp-course-icon">📘</div>

          <div class="lp-course-info">
            <h3>${course.course_name}</h3>
            <div class="lp-course-sub">
              Level: ${levelMap[course.course_level_str]}
            </div>
            ${getLevelBadge(levelMap[course.course_level_str])}
          </div>
        </div>
      `
          )
          .join("")}
      </div>
    `;

    document.querySelectorAll(".lp-course-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.dataset.id;
        window.navigateTo(`/course?id=${id}`);
      });
    });

    setTimeout(() => content.classList.add("show"), 20);
  } catch (err) {
    content.innerHTML = "<p>Error loading kelas.</p>";
  }
}

// --------------------------------------------
// SLIDER CONTROL
// --------------------------------------------
function setupSliderButtons() {
  const wrapper = document.getElementById("lpTabs");
  const prev = document.getElementById("prevTab");
  const next = document.getElementById("nextTab");

  prev.addEventListener("click", () =>
    wrapper.scrollBy({ left: -200, behavior: "smooth" })
  );
  next.addEventListener("click", () =>
    wrapper.scrollBy({ left: 200, behavior: "smooth" })
  );
}
