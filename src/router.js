import Home, { hydrateHome } from "./pages/home.js";
import About from "./pages/about.js";
import Program from "./pages/program.js";
import Chat, { hydrateChat } from "./pages/chat.js";
// ❌ HAPUS BARIS INI
// import { showChatbox, hideChatbox } from "./components/chatbox.js";
import { showChatbox, hideChatbox } from "./components/chatbox.js";

const routes = {
  "/": { view: Home, mount: hydrateHome },
  "/chat": { view: Chat, mount: hydrateChat },
  "/about": { view: About },
  "/program": { view: Program },
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

  // Tambahkan class animasi
  app.classList.remove("show");
  app.classList.add("page-transition");

  // Delay dikit biar animasi fade-out jalan
  setTimeout(() => {
    // Load halaman baru
    app.innerHTML = route.view();

    // Tampilkan chatbox jika bukan halaman chat
    if (path === "/chat") hideChatbox();
    else showChatbox();

    // Hydrate halaman
    if (route.mount) route.mount();

    // Trigger fade-in
    requestAnimationFrame(() => {
      app.classList.add("show");
    });
  }, 150);
}
