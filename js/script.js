document.getElementById("year").textContent = new Date().getFullYear();

// Header shadow + back-to-top visibility on scroll
const header = document.getElementById("header");
const backToTop = document.getElementById("backToTop");

const onScroll = () => {
  const scrolled = window.scrollY > 40;
  header.classList.toggle("scrolled", scrolled);
  backToTop.classList.toggle("visible", window.scrollY > 480);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Contact form (front-end only, no backend wired up yet)
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const lang = document.documentElement.getAttribute("lang") || "en";
  formNote.textContent = translations[lang]["form.successNote"];
  form.reset();
});

// Fade-in on scroll, staggered within each group
const revealGroups = [
  document.querySelectorAll(".service-card"),
  document.querySelectorAll(".process-step"),
  document.querySelectorAll(".about-text, .about-visual"),
  document.querySelectorAll(".contact-info, .contact-form"),
];

revealGroups.forEach((group) => {
  group.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = `opacity .55s ease ${i * 0.08}s, transform .55s ease ${i * 0.08}s`;
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealGroups.forEach((group) => group.forEach((el) => observer.observe(el)));

// Count-up animation for hero stats
const countEls = document.querySelectorAll(".stat-num[data-count]");

function animateCount(el) {
  const target = parseInt(el.getAttribute("data-count"), 10);
  const suffix = el.getAttribute("data-suffix") || "";
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

countEls.forEach((el) => countObserver.observe(el));
