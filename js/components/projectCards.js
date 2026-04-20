import { escapeHtml, prettyTag } from "./utils.js";

function buildTagPills(project) {
  const priorityTags = [
    ...(project.highlighted ? ["highlighted"] : []),
    ...(project.tags.teamType || []),
    ...(project.tags.discipline || []).slice(0, 2),
    ...(project.tags.genreStyle || []).slice(0, 1)
  ];

  const deduped = [...new Set(priorityTags)].slice(0, 5);
  return deduped.map((tag, index) => {
    const variant = index === 0 && tag === "highlighted"
      ? "pill pill-accent"
      : index % 3 === 1
        ? "pill pill-purple"
        : index % 3 === 2
          ? "pill pill-rose"
          : "pill pill-blue";
    return `<span class="${variant}">${escapeHtml(prettyTag(tag))}</span>`;
  }).join("");
}

export function createProjectCard(project, { compact = false } = {}) {
  const media = project.media?.[0] || "assets/images/hero/hristo-portrait.jpg";
  return `
    <article class="project-card card" data-project-card="${project.id}">
      <div class="project-card__media">
        <img src="${media}" alt="${escapeHtml(project.title)} preview image" loading="lazy" />
      </div>
      <div class="project-card__body">
        <div class="project-card__top">
          <div>
            <p class="project-card__meta">${project.year} · ${escapeHtml(project.role)}</p>
            <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
          </div>
        </div>
        <div class="project-card__tags">${buildTagPills(project)}</div>
        <p class="project-card__summary">${escapeHtml(project.shortSummary)}</p>
        <p class="project-card__tools">${escapeHtml(project.toolsLine || "")}</p>
        <div class="project-card__actions">
          <button class="btn btn-primary" type="button" data-open-project="${project.id}">Details</button>
          ${project.links?.itch ? `<a class="btn btn-soft" href="${project.links.itch}" target="_blank" rel="noreferrer">itch.io</a>` : ""}
          ${project.links?.external ? `<a class="btn btn-soft" href="${project.links.external}" target="_blank" rel="noreferrer">Link</a>` : ""}
        </div>
      </div>
    </article>
  `;
}
