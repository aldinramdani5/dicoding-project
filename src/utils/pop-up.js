export function setupPopup() {
  const popup = document.getElementById("popup-container");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (!popup) return;

  // === OPEN LOGIN ===
  document.getElementById("openLogin")?.addEventListener("click", () => {
    popup.classList.add("show");

    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
  });

  // === OPEN REGISTER ===
  document.getElementById("openRegister")?.addEventListener("click", () => {
    popup.classList.add("show");

    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
  });

  // === CLOSE POPUP ===
  document.getElementById("closePopup")?.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  // === SWITCH LOGIN → REGISTER ===
  document.getElementById("toRegister")?.addEventListener("click", (e) => {
    e.preventDefault();

    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
  });

  // === SWITCH REGISTER → LOGIN ===
  document.getElementById("toLogin")?.addEventListener("click", (e) => {
    e.preventDefault();

    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  });
}
