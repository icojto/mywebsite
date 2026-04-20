import { prettyTag, escapeHtml } from "./utils.js";

export function createProjectModal(projects) {
  const modal = document.querySelector('[data-project-modal]');
  if (!modal) return null;
  const dialog = modal.querySelector('[data-modal-dialog]');
  let currentIndex = 0;

  function buildTagGroup(title, values = []) {
    if (!values.length) return '';
    return `
      <div class="modal__section">
        <h3>${title}</h3>
        <div class="project-card__tags">
          ${values.map((value, index) => `<span class="${index === 0 ? 'pill pill-blue' : 'pill pill-purple'}">${escapeHtml(prettyTag(value))}</span>`).join('')}
        </div>
      </div>
    `;
  }

  function render(index) {
    currentIndex = (index + projects.length) % projects.length;
    const project = projects[currentIndex];
    const media = project.media?.length ? project.media : ["assets/images/hero/hristo-portrait.jpg"];

    dialog.innerHTML = `
      <div class="modal__gallery">
        <div class="modal__featured"><img src="${media[0]}" alt="${escapeHtml(project.title)} featured media" /></div>
        <div class="modal__thumbs">
          ${media.slice(0, 6).map(src => `<div class="modal__thumb"><img src="${src}" alt="${escapeHtml(project.title)} media" /></div>`).join('')}
        </div>
      </div>
      <div class="modal__content">
        <button class="btn icon-btn modal__close" type="button" data-modal-close aria-label="Close project modal">✕</button>
        <div class="modal__head">
          <span class="eyebrow">${project.year} · ${escapeHtml(project.role)}</span>
          <h2 class="modal__title">${escapeHtml(project.title)}</h2>
          <div class="project-card__tags">
            ${project.highlighted ? '<span class="pill pill-accent">Highlighted</span>' : ''}
            ${(project.tags.teamType || []).map(v => `<span class="pill pill-blue">${escapeHtml(prettyTag(v))}</span>`).join('')}
          </div>
          <p class="modal__summary">${escapeHtml(project.summary)}</p>
        </div>

        ${buildTagGroup('Discipline', project.tags.discipline)}
        ${buildTagGroup('Genre / Style', project.tags.genreStyle)}
        ${buildTagGroup('Tools / Engines', project.tags.toolsEngines)}
        ${buildTagGroup('Special Flags', project.tags.specialFlags)}

        <div class="modal__section">
          <h3>Responsibilities / Contributions</h3>
          <ul>${project.responsibilities.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        </div>

        ${project.notes ? `<div class="modal__section"><h3>Notes</h3><p class="modal__summary">${escapeHtml(project.notes)}</p></div>` : ''}

        <div class="modal__links">
          ${project.links?.itch ? `<a class="btn btn-primary" href="${project.links.itch}" target="_blank" rel="noreferrer">View itch.io</a>` : ''}
          ${project.links?.external ? `<a class="btn btn-outline" href="${project.links.external}" target="_blank" rel="noreferrer">Open Link</a>` : ''}
        </div>

        <div class="modal__nav">
          <button class="btn btn-soft" type="button" data-modal-prev>← Previous</button>
          <button class="btn btn-soft" type="button" data-modal-next>Next →</button>
        </div>
      </div>
    `;

    dialog.querySelector('[data-modal-close]').addEventListener('click', close);
    dialog.querySelector('[data-modal-prev]').addEventListener('click', () => render(currentIndex - 1));
    dialog.querySelector('[data-modal-next]').addEventListener('click', () => render(currentIndex + 1));
  }

  function open(projectId) {
    const index = projects.findIndex(project => project.id === projectId);
    render(index >= 0 ? index : 0);
    modal.classList.add('is-open');
    document.body.classList.add('modal-open');
  }

  function close() {
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  }

  modal.addEventListener('click', event => {
    if (event.target === modal) close();
  });

  document.addEventListener('keydown', event => {
    if (!modal.classList.contains('is-open')) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') render(currentIndex - 1);
    if (event.key === 'ArrowRight') render(currentIndex + 1);
  });

  return { open, close };
}
