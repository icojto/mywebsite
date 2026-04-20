import { filterGroups } from "../data/filters.js";

export function createDefaultFilterState({ highlightedOnly = false } = {}) {
  return {
    search: "",
    sort: "newest",
    selected: Object.fromEntries(
      filterGroups.map(group => [group.id, highlightedOnly && group.id === "specialFlags" ? ["highlighted"] : []])
    )
  };
}

export function renderFiltersPanel(container, state, onChange) {
  container.innerHTML = `
    ${filterGroups.map((group, index) => `
      <div class="filter-group" data-group="${group.id}">
        <button class="filter-group__button" type="button" data-group-toggle="${group.id}" aria-expanded="${index === 0 ? 'true' : 'false'}">
          <span>${group.label}</span>
          <span>▾</span>
        </button>
        <div class="filter-group__body" ${index === 0 ? '' : 'hidden'}>
          ${group.options.map(([value, label]) => `
            <label class="filter-option">
              <input type="checkbox" value="${value}" data-filter-group="${group.id}" ${state.selected[group.id].includes(value) ? 'checked' : ''} />
              <span>${label}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `).join('')}
    <div class="filter-chips">
      <button class="btn btn-soft" type="button" data-filter-clear>Clear filters</button>
    </div>
  `;

  container.querySelectorAll('[data-group-toggle]').forEach(button => {
    button.addEventListener('click', () => {
      const body = button.nextElementSibling;
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      body.hidden = isOpen;
    });
  });

  container.querySelectorAll('input[data-filter-group]').forEach(input => {
    input.addEventListener('change', () => {
      const groupId = input.dataset.filterGroup;
      const values = [...container.querySelectorAll(`input[data-filter-group="${groupId}"]:checked`)].map(el => el.value);
      state.selected[groupId] = values;
      onChange();
    });
  });

  container.querySelector('[data-filter-clear]').addEventListener('click', () => {
    Object.keys(state.selected).forEach(groupId => { state.selected[groupId] = []; });
    onChange(true);
  });
}
