// Smooth Scroll

document.querySelectorAll("[data-link]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(
      link.getAttribute("href")
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Active Navigation

const links = document.querySelectorAll("[data-link]");

const sections = [...links]
  .map(link =>
    document.querySelector(
      link.getAttribute("href")
    )
  );

const observer = new IntersectionObserver(
  entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort(
        (a, b) =>
          b.intersectionRatio -
          a.intersectionRatio
      )[0];

    if (!visible) return;

    links.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") ===
          "#" + visible.target.id
      );
    });
  },
  {
    threshold: [0.2, 0.4, 0.6]
  }
);

sections.forEach(section => {
  if (section) observer.observe(section);
});

// Reveal Animation

const reveals =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          revealObserver.unobserve(
            entry.target
          );
        }
      });
    },
    {
      threshold: 0.15
    }
  );

reveals.forEach(item =>
  revealObserver.observe(item)
);

// Footer Year

document.getElementById("year").textContent =
  new Date().getFullYear();