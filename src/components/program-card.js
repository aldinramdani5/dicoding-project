// src/components/program-card.js
export function ProgramCard(data = {}) {
  const { id = "", title = "", desc = "", image = "" } = data;
  return `
<article class="program-card" data-id="${id}">
  <div class="card-media">
    <img src="${image}" alt="${title}" />
  </div>
  <div class="card-body">
    <h3 class="card-title">${title}</h3>
    <p class="card-desc">${desc}</p>
  </div>
</article>
`;
}
