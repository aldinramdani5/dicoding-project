// src/pages/home.js
import HeroLogo from "../assets/img/Nav-Logo.png";
import Student from "../assets/img/a.jpg";
import Group from "../assets/img/Courses.jpeg";
import { initSlider } from "../components/slider.js";

export default function Home() {
  return `
<!-- Skip link -->
<a href="#hero" class="skip-link">Skip to main content</a>



<!-- Main Content -->
<main id="main-content">

  <!-- Hero Section -->
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



  <!-- Program Section -->
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

  <!-- Learning Section -->
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

  <!-- Features Section -->
  <section class="features-section">
    <div class="feature-container">
      <h1>LOREM Hadir Sebagai Teman Belajar Teknologi Kamu</h1>
      <p class="subtitle">
        Kami ngerti gimana rasanya mulai belajar teknologi, bingung, ragu.
      </p>

      <div class="features">

        <div class="feature">
          <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" />
          <h3>Materi Mudah dan Terarah</h3>
          <p>
            Materi terstruktur dan mudah dipahami. Cocok untuk non-IT.
          </p>
        </div>

        <div class="feature">
          <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" />
          <h3>Belajar dari Para Expert</h3>
          <p>
            Mentor profesional, aktif di industri, siap membimbingmu.
          </p>
        </div>

        <div class="feature">
          <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" />
          <h3>Networking Bertambah Luas</h3>
          <p>
            Gabung komunitas teknologi terbesar dan saling dukung.
          </p>
        </div>

        <div class="feature">
          <img src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png" />
          <h3>Responsif & Solutif</h3>
          <p>
            Semua pertanyaan dijawab cepat & jelas.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Getting Started -->
  <section class="getting-section">
    <div class="getting-started">
      <h1>Bagaimana Cara Memulainya?</h1>
      <h2>Ikuti 3 langkah mudah untuk belajar di LOREM</h2>

      <div class="steps-grid">

        <div class="step-card">
          <div class="step-number">1</div>
          <h3>Pilih Jalur Belajarmu</h3>
          <p>Pilih jalur sesuai minat dan tujuanmu.</p>
        </div>

        <div class="step-card">
          <div class="step-number">2</div>
          <h3>Mulai Belajar</h3>
          <p>
            Ikuti panduan step-by-step yang mudah dipahami.
          </p>
        </div>

        <div class="step-card">
          <div class="step-number">3</div>
          <h3>Bangun Skill & Portofolio</h3>
          <p>
            Bangun portofolio siap kerja bersama mentor profesional.
          </p>
        </div>

      </div>

      <div class="steps-credit">
        Di LOREM, kamu belajar bareng mentor praktisi,
        materi up-to-date, dan komunitas suportif.
      </div>
    </div>
  </section>

  <!-- Testimonial Section -->
  <section class="testimonial-section">
    <div class="testimonial-container">

      <div class="testimonial-text">
        <h2>Testimoni Peserta</h2>
        <p id="testimonial-quote">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <h4 id="testimonial-name">Rina Saputri</h4>
        <span id="testimonial-role">Mahasiswa Informatika</span>
      </div>

      <div class="testimonial-card">
        <button class="arrow left" id="prevBtn2">&#10094;</button>
        <img id="testimonial-img" src="https://i.pravatar.cc/220?img=12" alt="User Photo" />
        <button class="arrow right" id="nextBtn2">&#10095;</button>
      </div>

    </div>
  </section>

</main>



<!-- Footer container -->
<div id="footer-container"></div>

<!-- Chat container -->
<div id="chat-container"></div>
`;
}

export function hydrateHome() {
  initSlider(); // aktifin slider
}
