import { labelMap } from "../data/filters.js";

export function escapeHtml(text = "") {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function prettyTag(tag) {
  return labelMap[tag] || tag;
}

export function flattenTags(project) {
  return Object.values(project.tags).flat();
}

export function projectMatchesFilters(project, state) {
  const search = state.search.trim().toLowerCase();
  if (search) {
    const haystack = [project.title, project.role, project.shortSummary, project.summary, project.toolsLine]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    if (!haystack.includes(search)) return false;
  }

  return Object.entries(state.selected).every(([groupId, selectedValues]) => {
    if (!selectedValues.length) return true;
    const projectValues = project.tags[groupId] || [];
    return selectedValues.every(value => projectValues.includes(value));
  });
}

export function sortProjects(projects, sort = "newest") {
  const sorted = [...projects];
  if (sort === "oldest") {
    sorted.sort((a, b) => new Date(a.sortDate) - new Date(b.sortDate));
  } else if (sort === "title") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    sorted.sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));
  }
  return sorted;
}
