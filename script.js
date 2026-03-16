/* =========================
   CONFIG
========================= */

const username = "seanghay-huort";


/* =========================
   GITHUB PROJECTS
========================= */

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("github-projects");

    data.slice(0, 6).forEach(repo => {

      const card = document.createElement("div");
      card.className = "project";

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided."}</p>
        <a href="${repo.html_url}" target="_blank" class="project-btn">
          View Code
        </a>
      `;

      container.appendChild(card);

    });

  });


/* =========================
   THEME TOGGLE
========================= */

const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
}


/* =========================
   SCROLL ANIMATIONS
========================= */

const sections = document.querySelectorAll("section");
const timelineItems = document.querySelectorAll(".timeline-item");
const skills = document.querySelectorAll(".progress");

window.addEventListener("scroll", () => {

  /* SECTION FADE IN */

  sections.forEach(section => {

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      section.classList.add("visible");
    }

  });

  /* TIMELINE ANIMATION */

  timelineItems.forEach(item => {

    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight - 50) {
      item.classList.add("show");
    }

  });

  /* SKILL BARS */

  skills.forEach(skill => {

    const top = skill.getBoundingClientRect().top;

    if (top < window.innerHeight) {

      if (skill.classList.contains("swift")) {
        skill.style.width = "95%";
      } else if (skill.classList.contains("swiftui")) {
        skill.style.width = "85%";
      } else if (skill.classList.contains("uikit")) {
        skill.style.width = "90%";
      } else {
        skill.style.width = "80%";
      }

    }

  });

});


/* =========================
   PARTICLES BACKGROUND
========================= */

particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true }
  }
});


/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {

    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

  }, 800);

});


/* =========================
   PARALLAX EFFECT
========================= */

document.addEventListener("mousemove", (e) => {

  const moveX = (e.clientX / window.innerWidth) * 20;
  const moveY = (e.clientY / window.innerHeight) * 20;

  sections.forEach(section => {
    section.style.transform =
      `translateX(${moveX / 10}px) translateY(${moveY / 10}px)`;
  });

});


/* =========================
   EMAILJS CONTACT FORM
========================= */

(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

const contactForm = document.getElementById("contact-form");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      this
    ).then(() => {

      alert("Message sent!");

    });

  });

}