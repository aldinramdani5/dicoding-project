// src/pages/home.js
import HeroLogo from "../assets/img/Nav-Logo.png";
import Student from "../assets/img/a.jpg";
import Group from "../assets/img/Courses.jpeg";
import { initSlider } from "../components/slider.js";

export default function Home() {
  return `
<a href="#hero" class="skip-link">Skip to main content</a>

<main id="main-content">

  <section id="hero" class="hero">
    <div class="hero-container">
      <article class="hero-text">
        <h1>Learn English Anytime,Anywhere</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aperiam
          necessitatibus in dolore, tempore assumenda expedita nostrum.
        </p>
        <div class="hero-buttons">
          <button class="btn btn-secondary">Get Started</button>
          <a href="#courses">Explore Courses</a>
        </div>
      </article>

      <figure class="hero-img">
        <img src="${HeroLogo}" alt="Illustration of a person Learning Buddy" />
      </figure>
    </div>
  </section>

  <section class="program-section">
    <div class="program-header">
      <h2>
        Pilih Program Belajar Yang Sesuai Dengan <br />
        Rencana Masa Depanmu
      </h2>
      <a href="#" class="see-all">Lihat Semua Program</a>
    </div>

    <div class="carousel-container">
      <button class="nav-btn prev" id="prevBtn">&#10094;</button>

      <div class="carousel-wrapper">
        <div class="carousel" id="carousel">

          <div class="program-card">
            <a href="#">
              <div class="img-wrapper">
                <img src="${Student}" />
              </div>
              <h3>Front End & Back End</h3>
              <p>Belajar keahlian teknologi dan digital.</p>
            </a>
          </div>

          <div class="program-card">
            <a href="#">
              <div class="img-wrapper">
                <img src="${Student}" />
              </div>
              <h3>Marchine Learning</h3>
              <p>Platform lengkap untuk belajar coding.</p>
            </a>
          </div>

          <div class="program-card">
            <a href="#">
              <div class="img-wrapper">
                <img src="${Student}" />
              </div>
              <h3>React & BackEnd</h3>
              <p>Belajar jadi white hacker profesional.</p>
            </a>
          </div>

          <div class="program-card">
            <a href="#">
              <div class="img-wrapper">
                <img src="${Student}" />
              </div>
              <h3>RuangAI</h3>
              <p>Belajar Generative AI secara online.</p>
            </a>
          </div>

          <div class="program-card">
            <a href="#">
              <div class="img-wrapper">
                <img src="${Student}" />
              </div>
              <h3>DEVMASTER</h3>
              <p>Bootcamp developer profesional.</p>
            </a>
          </div>

        </div>
      </div>

      <button class="nav-btn next" id="nextBtn">&#10095;</button>
    </div>
  </section>

  <section class="learning-section">
    <div class="learning">
      <div class="learning-container">
        <div class="learning-text">
          <h2>Belajar Teknologi Nggak Selalu Gampang</h2>
          <p>
            Istilah teknis, materi nggak runtut, dan platform mahal sering bikin nyerah di awal.
            <strong>LOREM</strong> hadir buat bantu kamu mulai dengan nyaman, bareng mentor profesional,
            komunitas suportif, dan support yang selalu responsif.
          </p>
        </div>

        <div class="learning-image">
          <div class="image-box">
            <img src="${Group}" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features + Testimonial tetap sama -->
  
</main>

<div id="footer-container"></div>
<div id="chat-container"></div>
`;
}

export function hydrateHome() {
  initSlider();
}
