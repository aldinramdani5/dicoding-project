// src/pages/about.js
export default function About() {
  return `
    <!-- About Section -->
  <section id="about" aria-labelledby="about-heading" class="about">
    <div class="about-container">
      <article class="about-text">
        <h2 id="about-heading">About Us</h2>
        <p>
          English Learning Buddy adalah platform e-learning inovatif yang
          membantu pelajar meningkatkan kemampuan bahasa Inggris melalui
          latihan interaktif, panduan AI real-time, dan rencana belajar personal.
        </p>
        <p>
          Baik untuk sekolah, karier, atau perjalanan — platform ini menyesuaikan
          dengan tujuan dan ritme belajar kamu, menjadikan proses belajar lebih
          mudah dan menyenangkan.
        </p>
      </article>

      <figure class="about-img">
        <img id="about-img" src="assets/img/About.jpg" alt="Students learning English" class="active" />
      </figure>
    </div>
  </section>`;
}
