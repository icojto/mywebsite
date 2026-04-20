export function initSiteShell() {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-site-nav]');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => nav.classList.toggle('is-open'));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('is-open')));
  }

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = new Date().getFullYear();
}
