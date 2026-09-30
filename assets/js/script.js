/* ============================================================
   ANKUR DHANGAR — PORTFOLIO SCRIPTS
   Responsibilities:
     1. Mobile navigation toggle
     2. Navbar active-link highlight on scroll
     3. Contact form handler
   ============================================================ */

/* -------------------------------------------------------
   1. Mobile Navigation Toggle
------------------------------------------------------- */
(function initMobileNav() {
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.textContent = isOpen ? '✕' : '☰';
  });

  // Close menu when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '☰';
    });
  });
})();


/* -------------------------------------------------------
   2. Active Nav Link on Scroll (IntersectionObserver)
------------------------------------------------------- */
(function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('active'));
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { rootMargin: '-30% 0px -60% 0px' }
  );

  sections.forEach(s => observer.observe(s));
})();


/* -------------------------------------------------------
   3. Contact Form Handler
------------------------------------------------------- */
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const btn  = form.querySelector('button[type="submit"]');

  btn.disabled    = true;
  btn.textContent = 'Sending…';

  // Simulate async submission (replace with real endpoint when ready)
  setTimeout(() => {
    btn.textContent = '✓ Message Sent!';
    form.reset();
    setTimeout(() => {
      btn.disabled    = false;
      btn.textContent = 'Send Message →';
    }, 3000);
  }, 1200);
}