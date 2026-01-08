console.clear();

const box = document.querySelector('[data-js="box"]');

const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');

inputColor.addEventListener("input", () => {
  const hue = inputColor.value; // 0..360 (string is fine here)
  box.style.backgroundColor = `hsl(${hue}, 70%, 60%)`;
});

inputRadius.addEventListener("input", () => {
  const radius = inputRadius.value; // 0..50
  box.style.borderRadius = radius === inputRadius.max ? "50%" : `${radius}%`;
});

inputRotation.addEventListener("input", () => {
  const rotation = inputRotation.value; // 0..180
  box.style.transform = `rotate(${rotation}deg)`;
});
