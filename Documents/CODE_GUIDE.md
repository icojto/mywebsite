# Portfolio Code Guide

This guide explains what each file does, how the site is built, and what you should edit later.

## 1. Main folder structure

- `index.html` — homepage
- `projects.html` — full archive page
- `css/base.css` — variables, colors, buttons, global spacing, shared surface styling
- `css/layout.css` — header, footer, navigation layout
- `css/components.css` — hero, filters, cards, summary cards, modal, shared UI pieces
- `css/home.css` — small homepage-only tweaks
- `css/projects.css` — archive page banner styles
- `css/modal.css` — small modal helper (`body.modal-open`)
- `css/responsive.css` — tablet/mobile layout changes
- `js/app.js` — all data + all UI behavior in one file
- `README.md` — quick project notes
- `QA_REPORT.md` — static QA report

## 2. How the site works at a high level

The site is data-driven.

That means the project cards, the hero highlighted rail, the modal popup, and the archive page are all built from the same project data in `js/app.js`.

So when you add or edit a project, you usually do **not** touch the HTML card markup directly.
You mostly edit the `projects` array in `js/app.js`.

## 3. The most important file: `js/app.js`

This file is split into sections with comment blocks.

### Section 1 — profile data

This stores your main identity info.

Look for:

```js
const profile = {
  name: "Hristo Aleksiev",
  title: "Game Developer | Game Designer | Project Coordination",
  heroImage: "assets/images/hero/hristo-portrait.jpg"
};
```

### What to change here

- `name` — your name
- `title` — your main identity line
- `heroImage` — your portrait file path

If you replace the portrait later, keep the new image inside `assets/images/hero/` and change the file path here.

## 4. Filter groups

Still in `js/app.js`, there is a `filterGroups` array.

Each filter group has:
- an internal id
- a visible label
- options inside that group

Example:

```js
{
  id: "discipline",
  label: "Discipline",
  options: [
    ["game-design", "Game Design"],
    ["level-design", "Level Design"]
  ]
}
```

### Important rule

The first value is the **code value**.
The second value is the **text shown on the website**.

So:

- `"game-design"` = used by filtering logic
- `"Game Design"` = shown to visitors

## 5. How to add a new filter option

Example: add `Multiplayer` to Genre/Style.

Find the `genreStyle` group and add:

```js
["multiplayer", "Multiplayer"]
```

Then you can use `"multiplayer"` inside project tags.

## 6. The project list

The core content is inside:

```js
const projects = [ ... ]
```

Each project is one object.

### Project fields explained

```js
{
  id: "obituary",
  title: "Obituary",
  year: 2022,
  sortDate: "2022-11-01",
  role: "Game Developer",
  shortSummary: "Short card text.",
  summary: "Longer modal text.",
  highlighted: true,
  tags: {
    discipline: ["game-design", "level-design"],
    teamType: ["solo"],
    playability: ["playable"],
    genreStyle: ["horror", "first-person"],
    platformBuild: ["pc"],
    toolsEngines: ["unity", "fl-studio"],
    specialFlags: ["highlighted", "worldbuilding"]
  },
  toolsLine: "Unity, FL Studio",
  media: [
    "assets/images/projects/obituary.png",
    "assets/images/gallery/1.png"
  ],
  links: {
    itch: "https://...",
    external: ""
  },
  responsibilities: [
    "Responsibility 1",
    "Responsibility 2"
  ],
  notes: "Optional note"
}
```

### What each field does

- `id` — unique project id for the modal and card buttons
- `title` — visible project name
- `year` — shown on cards and modal
- `sortDate` — used for newest/oldest sorting
- `role` — shown under year/title
- `shortSummary` — card text
- `summary` — long description in popup
- `highlighted` — whether it appears in highlighted views
- `tags` — all filter values attached to the project
- `toolsLine` — short tool line on the card
- `media` — images used for preview and modal gallery
- `links` — buttons such as itch or external page
- `responsibilities` — bullet list in popup
- `notes` — optional extra text in popup

## 7. How to add a new project

Copy one full project object in `projects`, paste it below, and edit the fields.

### Minimum fields you should always fill

- `id`
- `title`
- `year`
- `sortDate`
- `role`
- `shortSummary`
- `summary`
- `highlighted`
- `tags`
- `media`

### Good habit

Keep `id` lowercase with dashes.

Example:

```js
id: "new-project-name"
```

## 8. How highlighted projects work

Highlighted projects are used in 3 places:

1. homepage default filter
2. hero top slider (after the portrait slide)
3. homepage highlighted rail under the hero banner

A project becomes highlighted when:

```js
highlighted: true
```

And usually also:

```js
specialFlags: ["highlighted"]
```

## 9. Hero section logic

The homepage hero is built from 2 parts:

### A. Top banner slider

Built by:

```js
function initHeroSlider(modalApi)
```

It creates:
- one portrait slide first
- then highlighted project slides after it

### B. Highlighted project rail

Also inside `initHeroSlider`.

It renders compact cards under the banner and lets users:
- click arrows
- swipe horizontally on touch devices
- click a card to open the modal

## 10. Project cards

Regular project cards are created by:

```js
function createProjectCard(project)
```

This function builds the card HTML for both:
- homepage portfolio grid
- archive page grid

So if you want to change the project card layout, this is one of the first functions to edit.

## 11. Project modal / popup

The popup is built by:

```js
function createProjectModal()
```

It handles:
- open/close
- previous/next project arrows
- gallery thumbnails
- project details
- project links

### Important

Both pages share the same popup system.

So if you improve the modal once, both homepage and archive page use the new version automatically.

## 12. Filter behavior

Main filtering is handled by:

```js
function matchesFilters(project, state)
```

This checks whether a project matches:
- search input
- selected filter values

The current setup uses **AND logic within selected groups**.

That means if you check:
- Solo
- Playable

The project must match both.

## 13. Filter panel rendering

The filter UI is built by:

```js
function renderFiltersPanel(container, state, onChange, options)
```

This function:
- builds all filter groups
- lets each main group expand/collapse
- updates selected checkboxes
- provides `Clear filters`
- provides `Only highlighted`

## 14. Homepage setup

Homepage logic is inside:

```js
function initHomePage(modalApi)
```

This function:
- starts with highlighted active
- renders the homepage card grid
- connects search
- connects the mobile filter button

## 15. Archive page setup

Archive logic is inside:

```js
function initProjectsPage(modalApi)
```

This function:
- shows all projects by default
- uses newest-first sorting by default
- connects search
- connects sort dropdown
- connects filters

## 16. Most useful CSS files

### `base.css`
Use this for:
- colors
- shadows
- button base styles
- global spacing
- card background feel

### `layout.css`
Use this for:
- header
- nav
- footer
- top-level page layout

### `components.css`
Use this for:
- hero banner
- project cards
- highlighted rail
- filter groups
- modal
- summary cards

### `responsive.css`
Use this for:
- tablet/mobile behavior
- stacking layouts
- hero changes on smaller screens

## 17. How to swap images

### Portrait image
Replace:

- `assets/images/hero/hristo-portrait.jpg`

Then update the path in `profile.heroImage` if the filename changes.

### Project images
Put the new image into:

- `assets/images/projects/`

Then update that project’s `media` array.

Example:

```js
media: [
  "assets/images/projects/my-new-project-cover.jpg",
  "assets/images/projects/my-new-project-shot-2.jpg"
]
```

## 18. How to change homepage default filter

Right now homepage starts with highlighted selected.

That happens in:

```js
const state = getDefaultState(true);
```

inside `initHomePage`.

If you want homepage to start with everything visible instead, change it to:

```js
const state = getDefaultState(false);
```

## 19. How to change archive default sorting

Inside `initProjectsPage`, default state uses:

```js
sort: "newest"
```

You can change the default by editing `getDefaultState()` or by changing the `<select>` default option in `projects.html`.

## 20. Why scroll lag can happen

Common causes in this project style are:
- big PNG/JPG files
- blur effects
- fixed overlays
- large shadows
- too many full-size images loading at once

This version already reduces some of that by:
- lowering blur cost
- reducing shadow cost
- adding lazy-loading on many images
- adding `content-visibility` for lower page sections

### Best later improvement

Export final images in web-friendly formats and sizes.

Good target examples:
- hero portrait: around 1600px wide max
- card images: around 900–1200px wide max
- use WebP or optimized JPG when possible

## 21. Best files to send me later for quick edits

If you want fast changes in future, you usually only need to send:

### For project content changes
- `js/app.js`

### For layout/visual changes
- `index.html`
- `projects.html`
- `css/components.css`
- `css/responsive.css`

### For color/style tuning
- `css/base.css`

## 22. Best way to ask for future edits

Examples:

- “Change the project card layout in `createProjectCard()`.”
- “Make the modal gallery larger in `components.css`.”
- “Add this new project object to `projects` in `app.js`.”
- “Change the homepage hero overlay text in `index.html`.”
- “Change the filter behavior in `matchesFilters()`.”

That will let us work much faster than sending the whole project every time.

## 23. What to edit yourself vs what to ask for

### Easy to edit yourself
- text
- links
- project tags
- project images
- highlighted flag
- responsibilities list

### Better to ask for help
- modal structure changes
- filter logic changes
- carousel behavior
- responsive layout changes
- big hero layout redesigns

## 24. If something breaks

First check these:

1. Is the image path correct?
2. Does the tag value exist in `filterGroups`?
3. Is the project `id` unique?
4. Did you leave a comma out of a project object?
5. Did you rename a CSS class in HTML but not in CSS?

## 25. Quick workflow for adding a finished real project later

1. add images into `assets/images/projects/`
2. duplicate a project object in `projects`
3. edit title, year, summary, tags, links, responsibilities
4. set `highlighted: true` if you want it on the homepage highlighted views
5. save and refresh
6. test:
   - homepage card
   - archive card
   - modal popup
   - filter results

## 26. Final note

If you want, the next best upgrade after content replacement is splitting `js/app.js` into smaller files again, but only once your final design is stable.

Right now, keeping it in one file makes it easier for you to learn and edit.
