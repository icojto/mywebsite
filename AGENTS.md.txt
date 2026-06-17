# Portfolio Website Agent Rules

This is Hristo Alekseev's professional portfolio website for job applications.

## Core rules

* Do not push directly to main.
* Work in small patches.
* Prefer minimal, high-confidence changes.
* Do not rewrite large systems unless explicitly requested.
* Preserve the current visual identity: dark sci-fi UI, blue/purple accents, rounded panels.
* Before changing code, identify affected files and risks.
* After changing code, summarize:

  * What changed
  * Why it changed
  * Files affected
  * Risks
  * QA checklist

## Website structure

* The site has 2 main pages: homepage and archive/projects page.
* Filters, project cards, project modals, responsive layout, CV dropdown, and image galleries are important.
* Current stable version: v1.4.
* v1.1 fixed filter open/close.
* v1.2 fixed project modal image/thumb resizing.
* v1.3 added expand/collapse filters and desktop filter sidebar scrolling.
* v1.4 styled scrollbars and removed unwanted horizontal scrollbar.

## QA priorities

Always test:

* Desktop
* Tablet
* Mobile
* Homepage projects section
* Archive/projects page
* Filter open/close
* Expand/collapse all filters
* Project modal
* Image gallery thumbnails
* CV dropdown
* Contact links

## Approval rule

Hristo is the QA/product owner. Changes are not considered done until he tests and approves them.
