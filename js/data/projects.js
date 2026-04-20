export const profile = {
  name: "Hristo Aleksiev",
  roleLine: "Game Developer | Game Designer | Project Coordination",
  email: "hristo.aleksiev.01@gmail.com",
  phone: "+359 88 501 3156",
  linkedin: "https://www.linkedin.com/in/hristo-aleksiev-60959892/",
  itch: "https://mlgjman.itch.io/",
  sketchfab: "https://sketchfab.com/hristo_aleksiev/",
  portfolio: "projects.html",
  cv: "assets/files/Hristo_Aleksiev_CV_placeholder.jfif",
  heroImage: "assets/images/hero/hristo-portrait.jpg"
};

export const projects = [
  {
    id: "endless-runner",
    title: "Current Endless Runner Project",
    year: 2025,
    sortDate: "2025-09-01",
    role: "Game Developer",
    shortSummary: "Mobile endless runner focused on procedural terrain, obstacles, optimization, and progression systems.",
    summary: "An in-development mobile project inspired by endless runner structure. Current work focuses on procedural terrain generation, obstacle spawning and customization, mobile optimization, UI structure, and expandable progression systems such as achievements, XP, and battle pass style rewards.",
    highlighted: true,
    featured: true,
    tags: {
      discipline: ["game-design", "systems-design", "engineering", "ui-ux"],
      teamType: ["solo"],
      playability: ["in-development"],
      genreStyle: ["endless-runner"],
      platformBuild: ["mobile"],
      toolsEngines: ["unity", "google-docs", "flowchart"],
      specialFlags: ["highlighted", "systems-heavy"]
    },
    toolsLine: "Unity, Google Docs, Flowchart",
    media: [
      "assets/images/gallery/10.png",
      "assets/images/gallery/7.png",
      "assets/images/gallery/4.png"
    ],
    links: { itch: "", external: "" },
    responsibilities: [
      "Designed procedural terrain flow and obstacle rules",
      "Implemented gameplay structure and tuning passes",
      "Planned UI, progression, achievements, XP, and monetization hooks",
      "Focused on mobile readability, performance, and replayability"
    ],
    notes: "Placeholder images are reused from the existing asset pack until dedicated screenshots are added."
  },
  {
    id: "game-developer-quiz",
    title: "Game Developer Quiz",
    year: 2024,
    sortDate: "2024-10-01",
    role: "Game Developer",
    shortSummary: "Quiz/training application developed as a thesis-style project for game developer learning.",
    summary: "A training-oriented application built around interactive quiz flows and structured learning content. It combines design, engineering, and visual organization for a practical educational product.",
    highlighted: true,
    featured: true,
    tags: {
      discipline: ["game-design", "engineering", "ui-ux", "project-coordination"],
      teamType: ["solo"],
      playability: ["playable", "educational"],
      genreStyle: ["educational"],
      platformBuild: ["pc"],
      toolsEngines: ["unity", "google-docs"],
      specialFlags: ["highlighted", "educational", "leadership"]
    },
    toolsLine: "Unity, Google Docs",
    media: ["assets/images/gallery/2.png", "assets/images/gallery/9.png", "assets/images/projects/pbr-textures.png"],
    links: { itch: "", external: "" },
    responsibilities: [
      "Built quiz structure and content flow",
      "Handled design, engineering, and presentation structure",
      "Balanced clarity, progression, and educational usability"
    ],
    notes: "Special flag and grouped filter support are wired so this project can be positioned as both design and coordination relevant."
  },
  {
    id: "virtual-assistant",
    title: "Virtual Assistant",
    year: 2024,
    sortDate: "2024-06-01",
    role: "Engineer & Project Leader",
    shortSummary: "Interactive assistant prototype combining Unreal Engine work with NVIDIA Audio2Face experimentation.",
    summary: "A real-time assistant prototype focused on technical integration, presentation, and project leadership. The work involved coordinating structure, implementation, and expressive character-facing interactions.",
    highlighted: false,
    featured: false,
    tags: {
      discipline: ["engineering", "project-coordination", "ui-ux"],
      teamType: ["team"],
      playability: ["prototype"],
      genreStyle: ["first-person"],
      platformBuild: ["pc"],
      toolsEngines: ["unreal-engine", "nvidia-audio2face"],
      specialFlags: ["leadership"]
    },
    toolsLine: "Unreal Engine, NVIDIA Audio2Face",
    media: ["assets/images/gallery/8.png", "assets/images/gallery/11.png", "assets/images/gallery/3.png"],
    links: { itch: "", external: "" },
    responsibilities: [
      "Led project direction and feature coordination",
      "Worked on technical implementation and presentation polish",
      "Explored expressive character interaction pipelines"
    ],
    notes: "Good candidate to surface when applying to technical production or coordination roles."
  },
  {
    id: "ocean-frenzy",
    title: "Ocean Frenzy",
    year: 2023,
    sortDate: "2023-09-01",
    role: "Game Designer",
    shortSummary: "Puzzle concept focused on ocean awareness and accessible interaction flows.",
    summary: "A solo puzzle concept that explores player-facing clarity, concept presentation, and thematic educational direction. The project was prototyped in a design-first workflow.",
    highlighted: false,
    featured: false,
    tags: {
      discipline: ["game-design", "ui-ux"],
      teamType: ["solo"],
      playability: ["prototype"],
      genreStyle: ["puzzle", "ocean-awareness"],
      platformBuild: ["figma-prototype"],
      toolsEngines: ["figma"],
      specialFlags: ["educational"]
    },
    toolsLine: "Figma",
    media: ["assets/images/projects/ocean-frenzy.jpg", "assets/images/gallery/6.png"],
    links: { itch: "", external: "" },
    responsibilities: [
      "Defined puzzle concept and visual communication",
      "Planned user flow and interface readability",
      "Explored thematic direction around ocean awareness"
    ],
    notes: "Useful as a design-case-study project in a broader archive."
  },
  {
    id: "textures-building-kitchen-models",
    title: "Textures / Building / Kitchen / Models",
    year: 2023,
    sortDate: "2023-06-01",
    role: "Artist / Technical Artist",
    shortSummary: "Visual showcase collection covering texture work, materials, and environment presentation.",
    summary: "A collection of visual-only environment and asset studies focused on materials, PBR workflows, texture quality, and presentation. Strong supporting work for art direction awareness and production versatility.",
    highlighted: false,
    featured: false,
    tags: {
      discipline: ["art"],
      teamType: ["solo"],
      playability: ["visual-showcase"],
      genreStyle: ["procedural"],
      platformBuild: ["visual-only"],
      toolsEngines: ["adobe-photoshop", "substance-painter", "substance-designer"],
      specialFlags: ["worldbuilding"]
    },
    toolsLine: "Adobe Photoshop, Adobe Substance 3D Painter, Adobe Substance 3D Designer",
    media: [
      "assets/images/projects/kitchen.png",
      "assets/images/projects/kitchen-scene.png",
      "assets/images/projects/pbr-textures.png"
    ],
    links: { itch: "https://mlgjman.itch.io/scene-1-kitchen", external: "" },
    responsibilities: [
      "Created texture and material studies",
      "Built visual presentation scenes",
      "Focused on surface quality and environment readability"
    ],
    notes: "This is intentionally grouped as a collection item until individual showcases are split out later."
  },
  {
    id: "obituary",
    title: "Obituary",
    year: 2022,
    sortDate: "2022-11-01",
    role: "Game Developer",
    shortSummary: "First-person horror game built in Unity with strong focus on level design, systems, narrative, and audio.",
    summary: "A solo story-driven horror FPS centered on atmosphere, progression, worldbuilding, and player tension. The project combines first-person exploration, level flow, interactive systems, and narrative framing while maintaining a cohesive horror tone.",
    highlighted: true,
    featured: true,
    tags: {
      discipline: ["game-design", "level-design", "engineering", "audio", "narrative"],
      teamType: ["solo"],
      playability: ["playable"],
      genreStyle: ["horror", "first-person"],
      platformBuild: ["pc"],
      toolsEngines: ["unity", "fl-studio", "sony-vegas"],
      specialFlags: ["highlighted", "worldbuilding", "systems-heavy"]
    },
    toolsLine: "Unity, FL Studio, Sony Vegas",
    media: ["assets/images/projects/obituary.png", "assets/images/gallery/1.png", "assets/images/gallery/12.png"],
    links: { itch: "https://mlgjman.itch.io/obituary-release", external: "" },
    responsibilities: [
      "Designed and built the level layouts and pacing",
      "Implemented gameplay systems and first-person interactions",
      "Developed narrative direction, audio support, and atmosphere",
      "Handled solo production across design and technical setup"
    ],
    notes: "One of the strongest headline pieces for game design and level design applications."
  },
  {
    id: "half-life-2-city",
    title: "Half Life 2 City – Procedural Art Demo",
    year: 2022,
    sortDate: "2022-08-01",
    role: "Engineer & Artist",
    shortSummary: "Procedural editable city/building art demo exploring modular generation and visual composition.",
    summary: "A procedural city-building art demonstration focused on editable structures, scene composition, and technical experimentation. It shows a blend of engineering and environment art thinking.",
    highlighted: true,
    featured: true,
    tags: {
      discipline: ["engineering", "art", "systems-design"],
      teamType: ["solo"],
      playability: ["visual-showcase"],
      genreStyle: ["procedural"],
      platformBuild: ["visual-only"],
      toolsEngines: ["unity", "substance-painter", "substance-designer"],
      specialFlags: ["highlighted", "systems-heavy", "worldbuilding"]
    },
    toolsLine: "Unity, Adobe Substance 3D Painter, Adobe Substance 3D Designer",
    media: ["assets/images/gallery/5.png", "assets/images/gallery/13.png", "assets/images/gallery/14.png"],
    links: { itch: "", external: "" },
    responsibilities: [
      "Developed procedural layout logic",
      "Explored modular visual composition and environment art",
      "Built editable structure rules and presentation scenes"
    ],
    notes: "Strong bridge project between technical design and environmental presentation."
  },
  {
    id: "knutselfrutsel",
    title: "Knutselfrutsel",
    year: 2022,
    sortDate: "2022-05-01",
    role: "Story Writing / World Building / Audio",
    shortSummary: "Choice-driven animation project for kids with focus on story, worldbuilding, and supportive audio.",
    summary: "A project for younger audiences that leans on writing, worldbuilding, and accessible narrative presentation. It expands the portfolio range while staying relevant to content structure and player communication.",
    highlighted: false,
    featured: false,
    tags: {
      discipline: ["narrative", "audio", "game-design"],
      teamType: ["team"],
      playability: ["playable"],
      genreStyle: ["point-and-click", "kids-family"],
      platformBuild: ["pc"],
      toolsEngines: ["google-docs", "ableton"],
      specialFlags: ["worldbuilding"]
    },
    toolsLine: "Google Docs, Ableton",
    media: ["assets/images/gallery/3.png", "assets/images/gallery/4.png"],
    links: { itch: "", external: "" },
    responsibilities: [
      "Contributed story structure and worldbuilding",
      "Supported audio direction",
      "Helped shape interactive narrative presentation"
    ],
    notes: "Kept as a normal project item rather than a separate identity block."
  },
  {
    id: "first-person-wireframe",
    title: "First Person Wireframe and Systems",
    year: 2021,
    sortDate: "2021-10-01",
    role: "Engineer",
    shortSummary: "First-person prototype focused on movement, XP, inventory, interaction, and system foundations in Unity.",
    summary: "A systems-first prototype used to explore player movement, stat progression, inventory logic, interaction structure, and reusable first-person gameplay foundations. It supports applications that care about implementation depth and gameplay systems.",
    highlighted: true,
    featured: true,
    tags: {
      discipline: ["engineering", "systems-design", "game-design"],
      teamType: ["solo"],
      playability: ["playable", "prototype"],
      genreStyle: ["first-person"],
      platformBuild: ["pc"],
      toolsEngines: ["unity", "flowchart"],
      specialFlags: ["highlighted", "systems-heavy"]
    },
    toolsLine: "Unity, Flowchart",
    media: ["assets/images/projects/first-person-wireframe.png", "assets/images/gallery/9.png", "assets/images/gallery/7.png"],
    links: { itch: "https://mlgjman.itch.io/wireframe-demo", external: "" },
    responsibilities: [
      "Implemented movement, XP, inventory, and interaction systems",
      "Used the project as a reusable engineering sandbox",
      "Balanced design intent with code architecture"
    ],
    notes: "One of the best support pieces for systems-heavy or gameplay programmer adjacent roles."
  },
  {
    id: "project-nebula",
    title: "Project Nebula",
    year: 2021,
    sortDate: "2021-06-01",
    role: "Game Designer",
    shortSummary: "Space shooter project focused on gameplay mechanics, encounter feel, and audio support.",
    summary: "A space shooter prototype centered on arcade pacing, feel, and core combat readability. It demonstrates design work around mechanics, player feedback, and overall moment-to-moment flow.",
    highlighted: false,
    featured: false,
    tags: {
      discipline: ["game-design", "audio"],
      teamType: ["team"],
      playability: ["playable", "prototype"],
      genreStyle: ["space-shooter"],
      platformBuild: ["pc"],
      toolsEngines: ["unity", "fl-studio"],
      specialFlags: []
    },
    toolsLine: "Unity, FL Studio",
    media: ["assets/images/gallery/6.png", "assets/images/gallery/8.png"],
    links: { itch: "", external: "" },
    responsibilities: [
      "Defined gameplay direction and mechanics",
      "Contributed audio support",
      "Focused on pacing and player feel"
    ],
    notes: "Good variety project for genre range."
  },
  {
    id: "the-conflict",
    title: "The Conflict",
    year: 2021,
    sortDate: "2021-03-01",
    role: "Game Designer",
    shortSummary: "AR card-game prototype exploring physical-digital interaction and system framing.",
    summary: "A prototype that explores card game interaction through an AR layer. It is useful as an example of concept variety, prototyping flexibility, and design thinking beyond standard screen-only projects.",
    highlighted: false,
    featured: false,
    tags: {
      discipline: ["game-design", "systems-design"],
      teamType: ["team"],
      playability: ["prototype"],
      genreStyle: ["ar", "card-game"],
      platformBuild: ["ar"],
      toolsEngines: ["unity"],
      specialFlags: []
    },
    toolsLine: "Unity",
    media: ["assets/images/gallery/11.png", "assets/images/gallery/12.png"],
    links: { itch: "", external: "" },
    responsibilities: [
      "Designed core concept and card interaction framing",
      "Explored mixed physical-digital play structure",
      "Supported prototype direction"
    ],
    notes: "Useful for showing experimentation and concept breadth."
  },
  {
    id: "abysmal-depths",
    title: "Abysmal Depths",
    year: 2021,
    sortDate: "2021-01-01",
    role: "Game Designer / World Builder",
    shortSummary: "Dark atmospheric project with emphasis on worldbuilding, horror tone, and level-space mood.",
    summary: "An early atmospheric project that leans into dark spaces, exploratory tension, and moody environment storytelling. It supports the horror and worldbuilding side of the portfolio.",
    highlighted: true,
    featured: true,
    tags: {
      discipline: ["game-design", "level-design", "narrative"],
      teamType: ["solo"],
      playability: ["prototype"],
      genreStyle: ["horror", "first-person"],
      platformBuild: ["pc"],
      toolsEngines: ["unity"],
      specialFlags: ["highlighted", "worldbuilding"]
    },
    toolsLine: "Unity",
    media: ["assets/images/gallery/1.png", "assets/images/gallery/14.png", "assets/images/gallery/5.png"],
    links: { itch: "", external: "" },
    responsibilities: [
      "Established tone and environmental direction",
      "Explored horror-oriented spatial pacing",
      "Built supporting worldbuilding foundations"
    ],
    notes: "Useful supporting item for atmosphere-heavy design roles."
  }
];
