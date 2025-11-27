// ========== CHATBOX WIDGET (SMALL) ==========
export function ChatboxWidget() {
  return `
<div class="chat-widget-container">

  <!-- Floating Button -->
  <button id="chatToggle" class="chat-toggle">
    <img src="https://cdn-icons-png.flaticon.com/512/134/134914.png" alt="chat">
  </button>

  <!-- Chat Widget -->
  <div id="chatWidget" class="chat-widget hidden">

    <div class="chat-widget-header">
      <h3>Chat Assistant</h3>
      <button id="minimizeChat" class="minimize-btn">−</button>
    </div>

    <div class="chat-widget-body">
      <p class="welcome">
        Halo! Ada yang bisa kami bantu? 😊
      </p>

      <button id="openFullChat" class="fullchat-btn">
        Buka Layar Penuh
      </button>
    </div>

  </div>
</div>
  `;
}

// ========== LOGIC (toggle, minimize, redirect) ==============
export function initChatbox() {
  const toggleBtn = document.getElementById("chatToggle");
  const widget = document.getElementById("chatWidget");
  const minimizeBtn = document.getElementById("minimizeChat");
  const openFull = document.getElementById("openFullChat");

  if (!toggleBtn || !widget) return;

  // Open widget
  toggleBtn.addEventListener("click", () => {
    widget.classList.remove("hidden");
  });

  // Minimize widget
  minimizeBtn.addEventListener("click", () => {
    widget.classList.add("hidden");
  });

  // Go to full page
  openFull?.addEventListener("click", () => {
    if (window.navigateTo) window.navigateTo("/chat");
  });
}

export function showChatbox() {
  const box = document.getElementById("chatBox");
  const btn = document.getElementById("chatToggle");
  if (!box || !btn) return;

  box.style.display = "flex";
  btn.style.display = "flex";
}

export function hideChatbox() {
  const box = document.getElementById("chatBox");
  const btn = document.getElementById("chatToggle");
  if (!box || !btn) return;

  box.style.display = "none";
  btn.style.display = "none";
}
