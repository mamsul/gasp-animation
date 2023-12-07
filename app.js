gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
  link.addEventListener("click", () => {
    // Change color of nav and line nav
    gsap.to(links, { color: "#252525" });

    if (document.activeElement === link) {
      gsap.to(link, { color: "#f5c253" });
    }

    // move the line position
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 1,
      absolute: true,
      ease: "elastic.out(1, 0.7)",
    });
  });
});

// Cards
const cards = document.querySelectorAll(".card");

cards.forEach((card, idx) => {
  card.addEventListener("click", () => {
    const state = Flip.getState(cards);

    const isActiveCard = card.classList.contains("active");

    cards.forEach((otherCard, otherIdx) => {
      otherCard.classList.remove("active");
      otherCard.classList.remove("inactive");

      if (!isActiveCard && idx !== otherIdx) {
        otherCard.classList.add("inactive");
      }
    });

    if (!isActiveCard) card.classList.add("active");

    Flip.from(state, {
      duration: 1,
      ease: 'expo.out',
      absolute: true,
    });
  });
});
