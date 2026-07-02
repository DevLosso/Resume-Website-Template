<div align="center">

# 🌌 DevLosso Portfolio

### ✨ A sleek, glassmorphic, RTL-first personal resume website — pure HTML, CSS & Vanilla JS. Zero frameworks. Zero dependencies. 100% handcrafted.

[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![RTL](https://img.shields.io/badge/RTL-فارسی-0f766e?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](#-license)

**The personal portfolio of [Alireza Abbaspour](https://github.com/devlosso) — founder of DevLosso** 🚀

[✉️ Email](mailto:devlosso.info@gmail.com) · [💬 Telegram](https://t.me/imlosso) · [🐙 GitHub](https://github.com/devlosso)

</div>

---

## 🎨 Design Highlights

- 🌑 **Deep-space dark theme** — layered radial + linear gradients create an ambient glow, no images needed
- 🧊 **Glassmorphism everywhere** — frosted-glass cards with `backdrop-filter: blur()` and translucent borders
- 🎨 **Modern CSS `color-mix()`** — every hover glow, border tint, and accent shade is mixed live from two CSS variables. Change `--accent` once, the whole theme follows
- 🇮🇷 **True RTL layout** — built right-to-left from the ground up for Persian (`dir="rtl"`), not patched on afterward
- 📱 **Fully responsive** — CSS Grid collapses gracefully on mobile with clean breakpoints
- ⚡ **Zero frameworks, zero build step** — no React, no Tailwind, no bundler. Open `index.html` and it just works

---

## ✨ Interactive Features

| Feature | How it works |
|:--------|:-------------|
| 🧭 **Scroll-Spy Navigation** | An `IntersectionObserver` watches every section and highlights the active nav link — the most visible section wins, ranked by `intersectionRatio` |
| 🪂 **Reveal-on-Scroll Animations** | Cards fade in and float up as they enter the viewport, then the observer unsubscribes for max performance |
| 🖱️ **Buttery Smooth Scrolling** | Native `scrollIntoView({ behavior: "smooth" })` + CSS `scroll-behavior: smooth` as a fallback |
| 🧲 **Sticky Glass Header** | The navbar stays pinned with a live blur of whatever scrolls beneath it |
| 💫 **Micro-interactions** | Cards lift on hover, social icons pop with a layered glow, buttons cast colored shadows |
| 📅 **Auto-updating Year** | The footer year is set by JavaScript — the copyright never goes stale |

---

## 📂 Project Structure

```
📦 devlosso-portfolio
├── 📄 index.html    →  Semantic markup: header, hero, skills, contact (RTL, Persian)
├── 🎨 style.css     →  Design system with CSS variables, glassmorphism, animations
└── ⚙️ main.js       →  Scroll-spy, reveal animations, smooth scroll — ~90 lines, no deps
```

Three files. That's the whole stack. 😎

---

## 🚀 Getting Started

No install. No build. No `node_modules` black hole.

```bash
git clone https://github.com/devlosso/portfolio.git
cd portfolio
```

Then just open `index.html` in your browser — or serve it locally for the full experience:

```bash
# Python
python -m http.server 8000

# or Node
npx serve
```

Visit `http://localhost:8000` and enjoy. ✨

---

## 🛠️ Under the Hood

### 🎛️ One design system, powered by CSS variables

Every color, radius, and transition lives in `:root`. Want a purple theme? Change two lines:

```css
:root {
  --accent:  #3B82F6;   /* ← change me */
  --accent2: #2563EB;   /* ← and me    */
}
```

Thanks to `color-mix()`, all 15+ derived shades — hover glows, border tints, shadows — update automatically.

### 👁️ IntersectionObserver over scroll events

Instead of listening to `scroll` (which fires hundreds of times per second and murders performance), both the scroll-spy and the reveal animations use `IntersectionObserver` — the browser tells *us* when something becomes visible. Reveal observers even call `unobserve()` after the first trigger, so nothing is wasted.

### 🧊 Real glassmorphism

```css
.card {
  background: rgba(15, 22, 35, .85);
  backdrop-filter: blur(14px);
  border: 1px solid var(--line);
}
```

Translucent background + backdrop blur + subtle border = that premium frosted-glass depth.

---

## 🖼️ Sections

- 👤 **درباره من (About)** — intro card + quick-facts card in a responsive 2-column hero grid
- 🧩 **مهارت‌ها (Skills)** — interactive chips: Python, C#, HTML, CSS, Networking, Backend, Frontend, API & Web Services, WordPress
- 📬 **ارتباط (Contact)** — glowing social icons for Email, Telegram, and GitHub

---

## 🗺️ Roadmap

- [ ] 🌗 Light / Dark theme toggle
- [ ] 🌍 English (LTR) language switch
- [ ] 💼 Projects showcase section
- [ ] 📊 Animated skill-level bars
- [ ] 📨 Working contact form
- [ ] 🔍 SEO meta tags + Open Graph preview card

---

## 🤝 Contributing

Found a bug or have a cool idea?

1. 🍴 Fork it
2. 🌿 `git checkout -b feature/cool-idea`
3. 💾 `git commit -m "Add cool idea"`
4. 🚀 Open a Pull Request

---

## 📄 License

Released under the **MIT License** — free to use, learn from, and remix.

---

<div align="center">

### ⭐ Like this portfolio? A star means a lot!

**Designed & Developed with 💙 by [Alireza Abbaspour (DevLosso)](https://github.com/devlosso)**

*Tehran, Iran 🇮🇷 · Python Developer · Software & Network Enthusiast*

</div>
