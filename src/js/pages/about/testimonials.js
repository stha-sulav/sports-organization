const testimonialContainer = document.querySelector(".testimonial-container");
const testimonialTemplate = document.createElement("template");
testimonialTemplate.innerHTML = `<div class="testimonial-item slides">
            <img src="" alt="" class="user-img"/>
            <div class="testimonial-content">
              <p class="testimonial">
                tetimonial
              </p>
              <h4 class="user-detail">user</h4>
            </div>
          </div>`;

const testimonials = [
  {
    id: 1,
    sport: "Football",
    testimonial:
      "Playing football with Campus Champs gave me the opportunity to showcase my skills and build lifelong friendships. The coaches push us to be our best while fostering teamwork and respect.",
    name: "John Carter",
    role: "Team Captain",
    imgSrc: "images/football-captain.jpg",
  },
  {
    id: 2,
    sport: "Basketball",
    testimonial:
      "Joining the basketball team has been a life-changing experience. The competitions are intense, and the team spirit is incredible. Campus Champs is the best platform for any sports enthusiast.",
    name: "jim Johnson",
    role: "Shooting Guard",
    imgSrc: "images/basketball-captain.jpg",
  },
  {
    id: 3,
    sport: "Swimming",
    testimonial:
      "Campus Champs gave me the platform to improve my skills and compete at a higher level. The support and encouragement from the team have been amazing.",
    name: "Lisa Brown",
    role: "Freestyle Swimmer",
    imgSrc: "images/swimming-captain.jpg",
  },
  {
    id: 4,
    sport: "Chess",
    testimonial:
      "Chess is more than just a game here; it’s a journey of strategy and growth. Campus Champs has provided the resources and mentorship that helped me win multiple tournaments.",
    name: "Emi Davis",
    role: "Chess Club President",
    imgSrc: "images/chess-player.jpg",
  },
];

const testimonialContent = testimonials.map((item) => {
  const content = testimonialTemplate.content.cloneNode(true);

  const img = content.querySelector(".user-img");
  img.src = item.imgSrc;
  img.alt = item.name;

  const header = content.querySelector(".user-detail");
  header.textContent = `- ${item.name}, ${item.role}`;

  const testimonial = content.querySelector(".testimonial");
  testimonial.textContent = item.testimonial;
  return content;
});

if (Array.isArray(testimonialContent)) {
  testimonialContent.forEach((content, index) => {
    if (index === 0) {
      const slideDiv = content.querySelector(".slides");
      slideDiv.setAttribute("data-active", null);
    }

    testimonialContainer.appendChild(content);
  });
}

`<div class="testimonial-item">
            <img src="images/football-captain.jpg" class="user-img" />
            <div class="testimonial-content">
              <p class="testimonial">
                "Campus Champs transformed my university life. The coaches are
                amazing, and the events are unforgettable!"
              </p>
              <h4>- Alex Morgan, Basketball Team Captain</h4>
            </div>
          </div>`;
