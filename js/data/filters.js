export const filterGroups = [
  {
    id: "discipline",
    label: "Discipline",
    options: [
      ["game-design", "Game Design"],
      ["level-design", "Level Design"],
      ["systems-design", "Systems Design"],
      ["engineering", "Engineering"],
      ["art", "Art"],
      ["audio", "Audio"],
      ["narrative", "Narrative"],
      ["ui-ux", "UI/UX"],
      ["project-coordination", "Project Coordination"]
    ]
  },
  {
    id: "teamType",
    label: "Team Type",
    options: [["solo", "Solo"], ["team", "Team"]]
  },
  {
    id: "playability",
    label: "Playability",
    options: [
      ["playable", "Playable"],
      ["visual-showcase", "Visual Showcase"],
      ["prototype", "Prototype"],
      ["in-development", "In Development"]
    ]
  },
  {
    id: "genreStyle",
    label: "Genre / Style",
    options: [
      ["horror", "Horror"],
      ["point-and-click", "Point-and-Click"],
      ["puzzle", "Puzzle"],
      ["first-person", "First-Person"],
      ["endless-runner", "Endless Runner"],
      ["space-shooter", "Space Shooter"],
      ["ar", "AR"],
      ["card-game", "Card Game"],
      ["kids-family", "Kids / Family"],
      ["ocean-awareness", "Ocean Awareness"],
      ["procedural", "Procedural"],
      ["educational", "Educational"]
    ]
  },
  {
    id: "platformBuild",
    label: "Platform / Build Type",
    options: [
      ["pc", "PC"],
      ["mobile", "Mobile"],
      ["figma-prototype", "Figma Prototype"],
      ["ar", "AR"],
      ["visual-only", "Visual-Only"]
    ]
  },
  {
    id: "toolsEngines",
    label: "Tools / Engines",
    options: [
      ["unity", "Unity"],
      ["unreal-engine", "Unreal Engine"],
      ["figma", "Figma"],
      ["adobe-photoshop", "Adobe Photoshop"],
      ["substance-painter", "Adobe Substance 3D Painter"],
      ["substance-designer", "Adobe Substance 3D Designer"],
      ["fl-studio", "FL Studio"],
      ["ableton", "Ableton"],
      ["sony-vegas", "Sony Vegas"],
      ["nvidia-audio2face", "NVIDIA Audio2Face"],
      ["google-docs", "Google Docs"],
      ["flowchart", "Flowchart"]
    ]
  },
  {
    id: "specialFlags",
    label: "Special Flags",
    options: [
      ["highlighted", "Highlighted"],
      ["leadership", "Leadership"],
      ["worldbuilding", "Worldbuilding"],
      ["educational", "Educational"],
      ["systems-heavy", "Systems-Heavy"]
    ]
  }
];

export const labelMap = Object.fromEntries(
  filterGroups.flatMap(group => group.options.map(([value, label]) => [value, label]))
);
