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
});

window.addEventListener("popstate", router);
