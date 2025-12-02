import "../styles/course-detail.css";

const API_KEY = "sb_publishable_h889CjrPIGwCMA9I4oTTaA_2L22Y__R";
const BASE = "https://jrkqcbmjknzgpbtrupxh.supabase.co/rest/v1";

// =====================================
// PAGE RENDER
// =====================================
export default function CourseDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  setTimeout(() => loadCourseDetail(id), 0);

  return `
    <main class="cd-page">
      <div id="courseDetail" class="cd-container">
        <p class="cd-loading">Loading course detail...</p>
      </div>
    </main>
  `;
}

export function hydrateCourseDetail() {
  // tidak butuh apa-apa untuk sekarang
}

// =====================================
// BADGE COLOR
// =====================================
function getBadge(levelName) {
  const colors = {
    Dasar: "#16a34a",
    Pemula: "#0ea5e9",
    Menengah: "#2563eb",
    Mahir: "#7c3aed",
    Profesional: "#dc2626",
  };

  return `
    <span class="cd-level-badge"
      style="background:${colors[levelName]}20;color:${colors[levelName]}">
      ${levelName}
    </span>
  `;
}

// =====================================
// MAIN FUNCTION: LOAD COURSE DETAIL
// =====================================
async function loadCourseDetail(courseId) {
  const container = document.getElementById("courseDetail");
  container.innerHTML = `<p class="cd-loading">Memuat detail...</p>`;

  try {
    // --- 1. COURSE DATA ---
    const courseRes = await fetch(
      `${BASE}/courses?course_id=eq.${courseId}&select=*`,
      {
        headers: { apikey: API_KEY, Authorization: "Bearer " + API_KEY },
      }
    );
    const courseData = await courseRes.json();
    const course = courseData[0];

    if (!course) {
      container.innerHTML = "<p>Course tidak ditemukan.</p>";
      return;
    }

    // --- 2. LEVEL DATA ---
    const lvlRes = await fetch(
      `${BASE}/course_levels?id=eq.${course.course_level_str}`,
      {
        headers: { apikey: API_KEY, Authorization: "Bearer " + API_KEY },
      }
    );
    const lvlData = await lvlRes.json();
    const levelName = lvlData[0]?.course_level ?? "Tidak diketahui";

    // --- 3. LEARNING PATH DATA ---
    const lpRes = await fetch(
      `${BASE}/learning_paths?learning_path_id=eq.${course.learning_path_id}`,
      {
        headers: { apikey: API_KEY, Authorization: "Bearer " + API_KEY },
      }
    );
    const lpData = await lpRes.json();
    const lp = lpData[0];

    // --- 4. TUTORIALS ---
    const tutRes = await fetch(
      `${BASE}/tutorials?course_id=eq.${courseId}&select=*`,
      {
        headers: { apikey: API_KEY, Authorization: "Bearer " + API_KEY },
      }
    );
    const tutorials = await tutRes.json();

    // =====================================
    // GROUPING LOGIC
    // =====================================

    const chapters = [
      "Persiapan Belajar",
      "Pengenalan",
      "Dasar-Dasar",
      "Materi Inti",
      "Studi Kasus",
      "Ujian",
      "Penutup",
    ];

    const groups = {};
    chapters.forEach((c) => (groups[c] = []));

    tutorials.forEach((t, i) => {
      const index = Math.min(Math.floor(i / 10), chapters.length - 1);
      const chapter = chapters[index];

      groups[chapter].push({
        tutorial_title: t.tutorial_title,
        description: t.content ?? "",
      });
    });

    // =====================================
    // RENDER PAGE
    // =====================================

    container.innerHTML = `
      <div class="cd-breadcrumb">
        <span class="cd-link" onclick="window.navigateTo('/program')">Program</span> › 
        <span>${lp?.learning_path_name ?? "Learning Path"}</span> › 
        <strong>${course.course_name}</strong>
      </div>

      <h1 class="cd-title">${course.course_name}</h1>

      <div class="cd-subinfo">
        ${getBadge(levelName)}
        <span class="cd-path">${lp?.learning_path_name ?? ""}</span>
      </div>

      <button class="cd-start-btn">Mulai Belajar</button>

      <h2 class="cd-section-title">Materi Pembelajaran</h2>

      <div id="cdGroups"></div>
    `;

    // =====================================
    // RENDER GROUPS
    // =====================================
    const groupContainer = document.getElementById("cdGroups");

    groupContainer.innerHTML = Object.keys(groups)
      .map(
        (chapter) => `
        <div class="cd-chapter">
          <div class="cd-chapter-header">
            <span>${chapter}</span>
            <span class="cd-ch-icon">›</span>
          </div>

          <div class="cd-chapter-list">
            ${groups[chapter]
              .map(
                (t) => `
            <div class="cd-tutorial-item">
              <div class="cd-tut-check">✔</div>
              <div>
                <h4>${t.tutorial_title}</h4>
                <p>${t.description || "Materi pembelajaran tersedia"}</p>
              </div>
            </div>`
              )
              .join("")}
          </div>
        </div>
      `
      )
      .join("");

    // =====================================
    // INTERACTION: OPEN/CLOSE CHAPTER
    // =====================================
    document.querySelectorAll(".cd-chapter").forEach((chapter) => {
      chapter
        .querySelector(".cd-chapter-header")
        .addEventListener("click", () => {
          chapter.classList.toggle("open");
        });
    });

    container.classList.add("show");
  } catch (err) {
    console.error(err);
    container.innerHTML = "<p>Error memuat detail.</p>";
  }
}
