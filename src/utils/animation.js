export function fadeIn(element) {
  element.style.opacity = 0;
  element.style.transition = "opacity .4s";
  requestAnimationFrame(() => {
    element.style.opacity = 1;
  });
}
