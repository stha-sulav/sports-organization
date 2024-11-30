const buttons = document.querySelectorAll("[data-carousel-button]");
const carousel = document.querySelector("[data-carousel]");
const slides = carousel.querySelector("[data-slides]");
let interval; // To store the interval ID for auto-move
const intervalTime = 5000; // Time in milliseconds between auto-moves (e.g., 5 seconds)

// Function to move the carousel by a given offset
const moveCarousel = (offset) => {
  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;

  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
};

// Event listener for manual button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    moveCarousel(offset);

    // Restart the auto-move interval when user interacts
    resetAutoMove();
  });
});

// Function to start the automatic carousel movement
const startAutoMove = () => {
  interval = setInterval(() => {
    moveCarousel(1); // Move to the next slide automatically
  }, intervalTime);
};

// Function to reset the interval (e.g., after user interaction)
const resetAutoMove = () => {
  clearInterval(interval); // Stop the current interval
  startAutoMove(); // Start a new interval
};

// Initialize the automatic movement
if (carousel.querySelector(["data-auto"])) startAutoMove();
