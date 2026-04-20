import { projects, profile } from "../data/projects.js";
import { createDefaultFilterState, renderFiltersPanel } from "../components/filtersPanel.js";
import { createProjectCard } from "../components/projectCards.js";
import { projectMatchesFilters, sortProjects } from "../components/utils.js";
import { initHeroSlider } from "../components/heroSlider.js";
import { createProjectModal } from "../components/projectModal.js";
import { initSiteShell } from "../main.js";

initSiteShell();

const highlightedProjects = projects.filter(project => project.highlighted);
const heroSlides = [
  {
    title: profile.name,
    copy: "Game-focused portfolio with a strong mix of design, level design, systems work, and project coordination.",
    image: profile.heroImage,
    alt: `${profile.name} portrait`,
    badges: ["Profile", "Game-Focused"]
  },
  ...highlightedProjects.slice(0, 5).map(project => ({
    title: project.title,
    copy: project.shortSummary,
    image: project.media[0],
    alt: `${project.title} preview`,
    badges: ["Highlighted", String(project.year)]
  }))
];
initHeroSlider(document.querySelector('[data-hero-slider]'), heroSlides);

const state = createDefaultFilterState({ highlightedOnly: true });
const filtersEl = document.querySelector('[data-filters-panel]');
const gridEl = document.querySelector('[data-project-grid]');
const countEl = document.querySelector('[data-results-count]');
const searchInput = document.querySelector('[data-project-search]');
const mobileFilterToggle = document.querySelector('[data-mobile-filter-toggle]');
const modal = createProjectModal(sortProjects(projects, 'newest'));

function renderProjects(resetCheckboxes = false) {
  const filtered = sortProjects(projects.filter(project => projectMatchesFilters(project, state)), 'newest');
  countEl.textContent = `${filtered.length} project${filtered.length === 1 ? '' : 's'}`;
  gridEl.innerHTML = filtered.length
    ? filtered.map(project => createProjectCard(project)).join('')
    : `<div class="empty-state">No projects match this filter combination yet.</div>`;

  if (resetCheckboxes) renderFiltersPanel(filtersEl, state, renderProjects);

  gridEl.querySelectorAll('[data-open-project]').forEach(button => {
    button.addEventListener('click', () => modal?.open(button.dataset.openProject));
  });
}

renderFiltersPanel(filtersEl, state, renderProjects);
renderProjects();

searchInput?.addEventListener('input', () => {
  state.search = searchInput.value;
  renderProjects();
});

mobileFilterToggle?.addEventListener('click', () => {
  filtersEl.classList.toggle('is-open');
});
