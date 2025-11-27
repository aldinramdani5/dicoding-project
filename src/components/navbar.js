// src/components/navbar.js
export function Navbar() {
  return `
  <header role="banner">
    <nav aria-label="Main Navigation" class="navbar">
      <div class="nav-container">

        <!-- Logo -->
        <h1 class="logo">
          <a href="/" data-link>lorem</a>
        </h1>

        <!-- Right -->
        <div class="nav-right">

          <ul class="nav-links" role="menubar">
            <li role="none"><a href="/about" data-link role="menuitem">About</a></li>
            <li role="none"><a href="/courses" data-link role="menuitem">Courses</a></li>
            <li role="none"><a href="/features" data-link role="menuitem">Features</a></li>
            <li role="none"><a href="/contact" data-link role="menuitem">Contact</a></li>
          </ul>

          <div class="nav-actions">
            <button class="btn btn-primary" id="openLogin" aria-haspopup="dialog">
              Login
            </button>
            <button class="btn btn-secondary" id="openRegister" aria-haspopup="dialog">
              Register
            </button>
          </div>

        </div>

      </div>
    </nav>
  </header>
  `;
}

export function initNavbarEvents() {
  document.querySelectorAll("[data-link]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const href = el.getAttribute("href");
      if (window.navigateTo) window.navigateTo(href);
    });
  });
}
