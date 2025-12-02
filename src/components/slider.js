export function initSlider() {
  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!carousel || !prevBtn || !nextBtn) return;

  let currentIndex = 0;
  const cardWidth = 266 + 24; // width card + gap (sesuai CSS)
  const totalCards = carousel.children.length;

  function updateSlider() {
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
}
