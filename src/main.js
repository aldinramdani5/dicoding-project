import { router, navigateTo } from "./router.js";
import { Navbar, initNavbarEvents } from "./components/navbar.js";
import { Footer } from "./components/footer.js";
import { ChatboxWidget, initChatbox } from "./components/chatbox.js";
import { setupPopup } from "./utils/pop-up.js";
import "./styles/chat-widget.css";

window.addEventListener("DOMContentLoaded", () => {
  // render layout
  document.getElementById("navbar").innerHTML = Navbar();
  document.getElementById("footer").innerHTML = Footer();
  document.body.insertAdjacentHTML("beforeend", ChatboxWidget());
  initChatbox();

  // navigation
  initNavbarEvents();
  router();

  // popup AFTER navbar rendered
  setupPopup();

  // global navigate
  window.navigateTo = navigateTo;

  // ============================
  // TEST API DICODING
  // ============================
  async function testAPI() {
    const testURL = "https://jrkqcbmjknzgpbtrupxh.supabase.co/rest/v1/learning_paths";

    console.log("Mengecek koneksi API...");

    try {
      const res = await fetch(testURL, {
        headers: {
          apikey: "sb_publishable_h889CjrPIGwCMA9I4oTTaA_2L22Y__R",
          Authorization: "Bearer sb_publishable_h889CjrPIGwCMA9I4oTTaA_2L22Y__R"
        }
      });

      const data = await res.json();

      console.log("🔥 API CONNECTED!", data);
    } catch (err) {
      console.error("API ERROR:", err);
    }
  }

  testAPI();
});

window.addEventListener("popstate", router);
