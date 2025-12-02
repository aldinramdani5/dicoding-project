import Home, { hydrateHome } from "./pages/home.js";
import About from "./pages/about.js";
import Program from "./pages/program.js";
import Chat, { hydrateChat } from "./pages/chat.js";

// chatbox
import { showChatbox, hideChatbox } from "./components/chatbox.js";

// COURSE DETAIL
import CourseDetail, { hydrateCourseDetail } from "./pages/course-detail.js";

const routes = {
  "/": { view: Home, mount: hydrateHome },
  "/chat": { view: Chat, mount: hydrateChat },
  "/about": { view: About },
  "/program": { view: Program },
  "/course": { view: CourseDetail, mount: hydrateCourseDetail },
};

export function navigateTo(path) {
  history.pushState(null, null, path);
  router();
}

export function router() {
  const path = window.location.pathname;
  const route = routes[path];
  const app = document.getElementById("app");

  if (!route) {
    app.innerHTML = "<h2>404</h2>";
    showChatbox();
    return;
  }

  // === ANIMASI FADE-OUT ===
  app.classList.remove("show");
  app.classList.add("page-transition");

  setTimeout(() => {
    // === LOAD HALAMAN ===
    app.innerHTML = route.view();

    // === ATUR CHATBOX ===
    if (path === "/chat") hideChatbox();
    else showChatbox();

    // === HYDRATE ===
    if (route.mount) route.mount();

    // === ANIMASI FADE-IN ===
    requestAnimationFrame(() => {
      app.classList.add("show");
    });
  }, 150);
}
