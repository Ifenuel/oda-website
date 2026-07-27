document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".section-block, .card-custom");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -50px 0px" }
  );

  revealElements.forEach((el) => {
    el.classList.add("reveal-hidden");
    observer.observe(el);
  });

  // Safety net: if anything is somehow still hidden after 2 seconds, show it anyway
  setTimeout(() => {
    document.querySelectorAll(".reveal-hidden:not(.is-visible)").forEach((el) => {
      el.classList.add("is-visible");
    });
  }, 2000);
});