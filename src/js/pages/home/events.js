const events = [
  {
    title: "Football Championship 2024",
    date: "2024-12-15",
    location: "Main Stadium, City Center",
    description: "Join us for the ultimate football showdown of the season!",
    link: "events/football.html",
  },
  {
    title: "Basketball 3v3 Tournament",
    date: "2024-12-20",
    location: "Sports Complex Arena",
    description:
      "Show off your skills in our fast-paced 3v3 basketball tournament.",
    link: "events/basketball-3v3/html",
  },
  {
    title: "Winter Swimming Gala",
    date: "2025-01-05",
    location: "Olympic Pool, Downtown",
    description: "Celebrate the new year with exciting swimming competitions.",
    link: "events/winter-swimming-gala.html",
  },
  {
    title: "Tennis Open Invitational",
    date: "2025-01-15",
    location: "Tennis Courts, Sports Park",
    description:
      "Compete with the best at our annual Tennis Open Invitational.",
    link: "events/tennis-open-invitational.html",
  },
];

// Select the events container
const eventsContainer = document.querySelector(".events-container");

// Generate event cards
events.forEach((event) => {
  const eventCard = document.createElement("div");
  eventCard.classList.add("event-card");

  eventCard.innerHTML = `
    <h3>${event.title}</h3>
    <p class="event-date">
    <img src="images/icons/events.svg" alt="event icon" />
    ${new Date(event.date).toDateString()} - ${event.location}</p>
    <p class="event-description">
    <img src="images/icons/location.svg" alt="location icon" />
    ${event.description}</p>
    <a href="${event.link}">Read More</a>
  `;

  // Append to the container
  eventsContainer.appendChild(eventCard);
});
