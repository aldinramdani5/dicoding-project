import "../styles/style.css";
import "../styles/chat.css";

export default function Chat() {
  return `
  <div class="chat-wrapper">
    <div class="chat-page">

      <div class="chat-header">
        <h2>Chat Assistant</h2>
        <button id="backHome" class="close-btn">&times;</button>
      </div>

      <div class="chat-body" id="chatBody">
        <div class="chat-message bot">
          Halo! Selamat datang di layanan chat kami. Ada yang bisa dibantu?
        </div>
      </div>

      <div class="chat-input">
        <input type="text" id="userMessage" placeholder="Ketik pesan..." />
        <button id="sendMessage">Kirim</button>
      </div>

    </div>
  </div>
  `;
}

//  FUNCTION HYDRATE (aktifkan tombol)
export function hydrateChat() {
  const sendMessage = document.getElementById("sendMessage");
  const userInput = document.getElementById("userMessage");
  const chatBody = document.getElementById("chatBody");
  const backHome = document.getElementById("backHome");

  // back button
  backHome.addEventListener("click", () => {
    if (window.navigateTo) window.navigateTo("/");
  });

  // send message
  sendMessage.addEventListener("click", () => {
    const msg = userInput.value.trim();
    if (!msg) return;

    const userMsg = document.createElement("div");
    userMsg.classList.add("chat-message", "user");
    userMsg.textContent = msg;
    chatBody.appendChild(userMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
    userInput.value = "";

    setTimeout(() => {
      const botMsg = document.createElement("div");
      botMsg.classList.add("chat-message", "bot");
      botMsg.textContent =
        "Pesan kamu sudah diterima! Terima kasih telah menghubungi kami.";
      chatBody.appendChild(botMsg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 800);
  });
}
