console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;

  const scrollableHeight = documentHeight - windowHeight;
  const scrollPercentage = (scrollTop / scrollableHeight) * 100;

  return scrollPercentage;
}

window.addEventListener("scroll", () => {
  const percentage = calculateScrollPercentage();
  progressBar.style.width = `${percentage}%`;
  console.log("scrolling...");
});
