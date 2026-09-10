# LiMIllusion — Personal Portfolio

> Personal portfolio website

Live at: [limillusion.github.io](https://limillusion.github.io)

---

## Overview

A single-page glassmorphism portfolio built with vanilla HTML, CSS and JavaScript — no frameworks, no build step, no dependencies beyond a Font Awesome kit and Google Fonts.

**Design highlights:**
- Frosted-glass cards with `backdrop-filter: blur`
- Animated gradient background with floating colour orbs
- Fully fluid layout using `clamp()` — no hard breakpoints for typography
- Entrance animations on load (CSS `@keyframes`, no JS animation libraries)
- Responsive: two-column on desktop, single-column on mobile

---

## Customisation

Everything you need to personalise the site lives at the **top of `script.js`** inside the `CONFIG` object.

```js
const CONFIG = {

  // Personal info
  name: "John",
  aka:  "Doe",
  bio:  "Your bio here...",

  // Skill tags — add or remove freely
  // icon: any Font Awesome class (e.g. "fa-brands fa-python")
  skills: [
    { icon: "fa-solid fa-server", label: "SysAdmin" },
    // ...
  ],

  // Link groups displayed in the right card
  linkGroups: [
    {
      emoji: "✍️",
      title: "Writing",
      links: [
        {
          icon:       "fa-brands fa-hashnode",
          label:      "Example"
          href:       "https://example.com/",
          badge:      "Tech",
          badgeClass: "badge-tech",   // badge-tech | badge-stories | badge-oss | ""
        },
      ],
    },
    // ...
  ],
};
```

No need to touch `index.html` or `style.css` for content changes.

---

## Running locally

No build step needed. Just open `index.html` in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

---

## Browser support

Works in all modern browsers that support `backdrop-filter`. For older browsers that don't, the cards fall back gracefully to a semi-transparent dark background.

---

## AI disclosure

> **This codebase was written with the assistance of an AI coding tool ([Antigravity](https://antigravity.dev) by Google DeepMind).**
>