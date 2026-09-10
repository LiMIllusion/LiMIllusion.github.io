/* ============================================================
   ✏️ CONFIGURATION — edit name, bio, skills and links here
   ============================================================ */
const CONFIG = {

  /* --- Personal info --- */
  name: "Luca Cesta",
  aka: "LiM",
  bio: "Appassionato di informatica, affascinato dal mondo.<br>Uno <span class='accent'>smanettone</span>, ndr.",

  /* --- Skill tags (add or remove as needed) ---
     icon: Font Awesome class (e.g. "fa-brands fa-python")
     label: tag text */
  skills: [
    { icon: "fa-solid fa-server", label: "SysAdmin" },
    { icon: "fa-brands fa-microsoft", label: "Azure" },
    { icon: "fa-solid fa-terminal", label: "PowerShell" },
    { icon: "fa-brands fa-html5", label: "HTML5 & CSS3" },
    { icon: "fa-brands fa-js", label: "JavaScript" },
    { icon: "fa-brands fa-python", label: "Python" },
    { icon: "fa-brands fa-node-js", label: "Node.js" },
  ],

  /* --- Link groups in the right panel ---
     Each group has:
       emoji:  section title emoji
       title:  section title text
       links:  array of links with { icon, label, href, badge (optional), badgeClass }
                 badgeClass: "badge-tech" | "badge-stories" | "badge-oss" | "" */
  linkGroups: [
    {
      emoji: "✍️",
      title: "Scrittura",
      links: [
        {
          icon: "fa-solid fa-newspaper",
          label: "Tutti i post che ho scritto",
          href: "#",
        },
        {
          icon: "fa-brands fa-hashnode",
          label: "Hashnode — articoli tech",
          href: "https://limillusion.hashnode.dev/",
          badge: "Tech",
          badgeClass: "badge-tech",
        },
        {
          icon: "fa-brands fa-medium",
          label: "Medium — le mie stories",
          href: "https://medium.com/@limillusion",
          badge: "Stories",
          badgeClass: "badge-stories",
        },
      ],
    },
    {
      emoji: "🛠️",
      title: "Progetti",
      links: [
        {
          icon: "fa-brands fa-github",
          label: "GitHub — i miei progetti",
          href: "https://www.github.com/limillusion",
          badge: "Open Source",
          badgeClass: "badge-oss",
        },
      ],
    },
    {
      emoji: "🌐",
      title: "Social",
      links: [
        {
          icon: "fa-brands fa-x-twitter",
          label: "Twitter / X",
          href: "https://twitter.com/limillusion",
        },
        {
          icon: "fa-brands fa-linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/limillusion",
        },
      ],
    },
  ],

};
/* ============================================================
   ☝️ End of configuration — no need to edit below
   ============================================================ */



/* ---- Render skills ---- */
(function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;
  container.innerHTML = CONFIG.skills
    .map(s => `<span class="skill-tag"><i class="${s.icon}"></i>${s.label}</span>`)
    .join('');
})();

/* ---- Render link groups ---- */
(function renderLinks() {
  const container = document.getElementById('links-container');
  if (!container) return;

  container.innerHTML = CONFIG.linkGroups.map(group => {
    const linksHTML = group.links.map(link => {
      const badge = link.badge
        ? `<span class="badge ${link.badgeClass}">${link.badge}</span>`
        : '';
      const target = link.href !== '#' ? 'target="_blank" rel="noopener noreferrer"' : '';
      return `
        <a class="nav-link" href="${link.href}" ${target} aria-label="${link.label}">
          <i class="${link.icon}"></i>
          ${link.label}
          ${badge}
        </a>`;
    }).join('');

    return `
      <div class="link-group">
        <p class="group-title">${group.emoji}&nbsp;&nbsp;${group.title}</p>
        ${linksHTML}
      </div>`;
  }).join('');
})();

/* ---- Viewport height fix (mobile) ---- */
(function () {
  const set = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight * .01}px`);
  set();
  window.addEventListener('resize', set, { passive: true });
})();

/* ---- Subtle mouse parallax on background gradient only ---- */
/* Orbs use the CSS orbDrift animation — their transform is not touched here */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const bg = document.querySelector('.bg-gradient');
  if (!bg) return;
  let raf;

  document.addEventListener('mousemove', e => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;  /* normalized range: -1 to +1 */
      const dy = (e.clientY - cy) / cy;
      /* Shift the background slightly for a depth effect */
      bg.style.backgroundPosition = `${50 + dx * 3}% ${50 + dy * 3}%`;
    });
  }, { passive: true });
})();

/* ---- Hero: inject name, aka, bio ---- */
(function () {
  const nameEl = document.querySelector('.name');
  const akaEl = document.querySelector('.aka');
  const bioEl = document.querySelector('.bio');
  if (nameEl) nameEl.textContent = CONFIG.name;
  if (akaEl) akaEl.innerHTML = `aka <span class="accent">${CONFIG.aka}</span>`;
  if (bioEl) bioEl.innerHTML = CONFIG.bio;
})();