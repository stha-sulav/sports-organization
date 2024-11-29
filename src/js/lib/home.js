const cardContainer = document.querySelector(".card-container");
const cardTemplate = document.createElement("template");

cardTemplate.innerHTML = `
  <div class="card">
    <img class="card-image" src="" alt="Card Image" />
    <div class="card-item-content">
      <h3 class="card-header">Title</h3>
      <p class="card-description">Description</p>
      <a href="" class="btn-accent">Learn More</a>
    </div>
  </div>
`;

const items = [
  {
    name: "Football",
    description:
      "Join the team or participate in tournaments to showcase your talent.",
    imgSrc: "images/football.jpg",
  },
  {
    name: "Basketball",
    description:
      "Stay active and competitive with our dynamic basketball team.",
    imgSrc: "images/basketball.jpg",
  },
  {
    name: "Swimming",
    description:
      "Enhance your skills with professional training and competitions.",
    imgSrc: "images/swimming.jpg",
  },
  {
    name: "Tennis",
    description:
      "Enjoy the thrill of the game with world-class facilities and coaching.",
    imgSrc: "images/tennis.jpg",
  },
];

const cardContents = items.map((item) => {
  // Clone the template content
  const content = cardTemplate.content.cloneNode(true);

  // Update the image
  const img = content.querySelector(".card-image");
  img.src = item.imgSrc;
  img.alt = item.name;

  // Update the title
  const header = content.querySelector(".card-header");
  header.textContent = item.name;

  // Update the description
  const description = content.querySelector(".card-description");
  description.textContent = item.description;

  // Update the link
  const link = content.querySelector(".btn-accent");
  link.href = `sports/${item.name.toLowerCase()}.html`;

  return content; // Return the cloned and modified template
});

// Append the cards to the container
if (Array.isArray(cardContents)) {
  cardContents.forEach((content) => {
    cardContainer.appendChild(content);
  });
} else {
  console.error("cardContents is not an array:", cardContents);
}
`<div class="card">
            <img
              class="card-image"
              src="https://via.placeholder.com/200x150"
              alt="Sports Image"
            />
            <div class="card-item-content">
              <h3 class="card-header">Football</h3>
              <p class="card-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus, quae?
              </p>
              <a href="/sports/football" class="btn-accent">Learn More</a>
            </div>
          </div>`;
