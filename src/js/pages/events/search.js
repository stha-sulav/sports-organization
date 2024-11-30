const searchInput = document.getElementById("event-search");
const categorySelect = document.getElementById("event-category");
const eventCards = document.querySelectorAll(".event-card");

// Function to filter events
function filterEvents() {
  const searchQuery = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  eventCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const category = card.querySelector("img").alt.toLowerCase();

    // Check if the card matches the search query and category filter
    const matchesSearch = title.includes(searchQuery);
    const matchesCategory =
      selectedCategory === "all" || category.includes(selectedCategory);

    if (matchesSearch && matchesCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Attach event listeners to the search input and category select
searchInput.addEventListener("input", filterEvents);
categorySelect.addEventListener("change", filterEvents);
