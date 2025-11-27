// src/components/testimonial.js
export function Testimonial(data = {}) {
  const { text = "", name = "", image = "" } = data;
  return `
  <div class="testimonial">
    <div class="testimonial-img"><img src="${image}" alt="${name}"/></div>
    <div class="testimonial-body">
      <p class="testimonial-text">${text}</p>
      <span class="testimonial-name">${name}</span>
    </div>
  </div>
  `;
}
