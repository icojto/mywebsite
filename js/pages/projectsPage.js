import { projects } from "../data/projects.js";
import { createDefaultFilterState, renderFiltersPanel } from "../components/filtersPanel.js";
import { createProjectCard } from "../components/projectCards.js";
import { projectMatchesFilters, sortProjects } from "../components/utils.js";
import { createProjectModal } from "../components/projectModal.js";
import { initSiteShell } from "../main.js";

initSiteShell();

const state = createDefaultFilterState();
const filtersEl = document.querySelector('[data-filters-panel]');
const gridEl = document.querySelector('[data-project-grid]');
const countEl = document.querySelector('[data-results-count]');
const searchInput = document.querySelector('[data-project-search]');
const sortSelect = document.querySelector('[data-project-sort]');
const mobileFilterToggle = document.querySelector('[data-mobile-filter-toggle]');
const modal = createProjectModal(sortProjects(projects, 'newest'));

function renderArchive(resetCheckboxes = false) {
  const filtered = sortProjects(projects.filter(project => projectMatchesFilters(project, state)), state.sort);
  countEl.textContent = `${filtered.length} project${filtered.length === 1 ? '' : 's'}`;
  gridEl.innerHTML = filtered.length
    ? filtered.map(project => createProjectCard(project)).join('')
    : `<div class="empty-state">No projects match this archive filter combination yet.</div>`;
  if (resetCheckboxes) renderFiltersPanel(filtersEl, state, renderArchive);
  gridEl.querySelectorAll('[data-open-project]').forEach(button => {
    button.addEventListener('click', () => modal?.open(button.dataset.openProject));
  });
}

renderFiltersPanel(filtersEl, state, renderArchive);
renderArchive();

searchInput?.addEventListener('input', () => {
  state.search = searchInput.value;
  renderArchive();
});

sortSelect?.addEventListener('change', () => {
  state.sort = sortSelect.value;
  renderArchive();
});

mobileFilterToggle?.addEventListener('click', () => {
  filtersEl.classList.toggle('is-open');
});
