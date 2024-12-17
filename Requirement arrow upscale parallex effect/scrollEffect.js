// Select the expanding line element
const scrollLine = document.querySelector('.scroll-line');

// Scroll event to update the line size
window.addEventListener('scroll', () => {
  // Calculate how far the user has scrolled
  const scrollTop = window.scrollY;

  // Dynamically set the height of the line (expanding upward)
  scrollLine.style.height = `${scrollTop}px`;
});
