const beliefContainer = document.querySelector(".belief-container");
const beliefTemplate = document.createElement("template");

beliefTemplate.innerHTML = `
<div class="belief-items">
            <div class="number">Number</div>
            <div class="belief-content">
              <h3 class="belief-heading">Heading</h3>
              <p class="description">
                Description
              </p>
            </div>
          </div>`;

const coreBeliefs = [
  {
    id: 1,
    title: "Excellence Through Sports",
    description:
      "We believe that sports are a powerful medium for achieving physical, mental, and personal growth, driving our members toward excellence on and off the field.",
  },
  {
    id: 2,
    title: "Inclusivity and Diversity",
    description:
      "We are committed to providing equal opportunities for students of all skill levels and backgrounds to participate, compete, and enjoy sports.",
  },
  {
    id: 3,
    title: "Teamwork and Leadership",
    description:
      "Collaboration and mutual respect are at the heart of our organization, fostering teamwork and developing strong leadership qualities in our members.",
  },
  {
    id: 4,
    title: "Integrity and Sportsmanship",
    description:
      "Upholding fairness, respect, and ethical behavior is essential in building a positive and inspiring sports culture.",
  },
  {
    id: 5,
    title: "Community and Connection",
    description:
      "We strive to create a sense of belonging by uniting students through shared passion and collective efforts, building lifelong friendships and networks.",
  },
];

const beliefContents = coreBeliefs.map((item) => {
  const content = beliefTemplate.content.cloneNode(true);

  const number = content.querySelector(".number");
  number.textContent = item.id;

  const beliefHeading = content.querySelector(".belief-heading");
  beliefHeading.textContent = item.title;

  const description = content.querySelector(".description");
  description.textContent = item.description;

  return content;
});

if (Array.isArray(beliefContents)) {
  beliefContents.forEach((content) => {
    beliefContainer.appendChild(content);
  });
}
