// src/components/footer.js
export function Footer() {
  return `<footer>
  <div class="footer-container">
    <div class="footer-col">
      <h3>Tentang Kami</h3>
      <p style="color: #9ca3af; line-height: 1.6">
        Platform belajar online yang membantu siapa pun menguasai teknologi,
        desain, dan bisnis dengan cara yang menyenangkan.
      </p>
    </div>

    <div class="footer-col">
      <h3>Kursus</h3>
      <ul>
        <li><a href="#">FrontEnd & BackEnd</a></li>
        <li><a href="#">React & BackEnd</a></li>
        <li><a href="#">UI/UX Design</a></li>
        <li><a href="#">Flutter</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h3>Bantuan</h3>
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Panduan Pengguna</a></li>
        <li><a href="#">Syarat & Ketentuan</a></li>
        <li><a href="#">Kebijakan Privasi</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h3>Ikuti Kami</h3>
      <div class="footer-social">
        <a href="#" aria-label="Instagram"><i data-lucide="instagram"></i></a>
        <a href="#" aria-label="Twitter"><i data-lucide="twitter"></i></a>
        <a href="#" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>
        <a href="#" aria-label="YouTube"><i data-lucide="youtube"></i></a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">&copy; 2025 Learnify. All rights reserved.</div>
</footer>
`;
}
