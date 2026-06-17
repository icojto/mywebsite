/*
  Main portfolio app file.
  This file avoids ES modules so the site also works when opened directly from the ZIP with file://
  and not only from a local server.
*/

(function () {
  "use strict";

  /* ==============================
     1) SHARED PROFILE + FILTER DATA
     ============================== */

  const profile = {
    name: "Hristo Aleksiev",
    role: "Game Developer | Game Designer | Project Coordination",
    heroImage: "assets/images/hero/hristo-portrait-optimized.jpg",
    phone: "+359 88 501 3156",
    phoneHref: "tel:+359885013156",
    email: "hristo.aleksiev.01@gmail.com",
    emailHref: "mailto:hristo.aleksiev.01@gmail.com",
    linkedin: "https://www.linkedin.com/in/hristo-aleksiev-60959892/",
    itch: "https://mlgjman.itch.io/",
    sketchfab: "https://sketchfab.com/hristo_aleksiev/"
  };

  const filterGroups = [
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

  const labelMap = Object.fromEntries(
    filterGroups.flatMap(group => group.options.map(option => [option[0], option[1]]))
  );

  const tagGroupMap = Object.fromEntries(
    filterGroups.flatMap(group => group.options.map(option => [option[0], group.id]))
  );

  const tagVariantMap = {
    highlighted: "pill pill-accent",
    "game-design": "pill pill-green",
    "level-design": "pill pill-green",
    narrative: "pill pill-green",
    "systems-design": "pill pill-blue",
    engineering: "pill pill-blue",
    "ui-ux": "pill pill-cyan",
    "project-coordination": "pill pill-cyan",
    art: "pill pill-rose",
    audio: "pill pill-rose",
    solo: "pill pill-purple",
    team: "pill pill-purple",
    playable: "pill pill-blue",
    prototype: "pill pill-blue",
    "in-development": "pill pill-blue",
    "visual-showcase": "pill pill-blue",
    horror: "pill pill-rose",
    "point-and-click": "pill pill-rose",
    puzzle: "pill pill-rose",
    "first-person": "pill pill-rose",
    "endless-runner": "pill pill-rose",
    "space-shooter": "pill pill-rose",
    ar: "pill pill-rose",
    "card-game": "pill pill-rose",
    "kids-family": "pill pill-rose",
    "ocean-awareness": "pill pill-rose",
    procedural: "pill pill-rose",
    educational: "pill pill-rose",
    pc: "pill pill-slate",
    mobile: "pill pill-slate",
    "figma-prototype": "pill pill-slate",
    "visual-only": "pill pill-slate",
    unity: "pill pill-cyan",
    "unreal-engine": "pill pill-cyan",
    figma: "pill pill-cyan",
    "adobe-photoshop": "pill pill-cyan",
    "substance-painter": "pill pill-cyan",
    "substance-designer": "pill pill-cyan",
    "fl-studio": "pill pill-cyan",
    ableton: "pill pill-cyan",
    "sony-vegas": "pill pill-cyan",
    "nvidia-audio2face": "pill pill-cyan",
    "google-docs": "pill pill-cyan",
    flowchart: "pill pill-cyan",
    leadership: "pill pill-purple",
    worldbuilding: "pill pill-green",
    "systems-heavy": "pill pill-blue"
  };

  const previewMap = {
  "assets/media/current-endless-runner/current-endless-runner-placeholder.png": "assets/images/previews/generated/current-endless-runner.webp",
  "assets/media/abysmal-depths/Abysmall1.png": "assets/images/previews/generated/abysmal-depths.webp",
  "assets/media/first-person-wireframe/Wireframe1.png": "assets/images/previews/generated/first-person-wireframe.webp",
  "assets/media/project-nebula/Nebula1.png": "assets/images/previews/generated/project-nebula.webp",
  "assets/media/the-conflict/Conflict1.png": "assets/images/previews/generated/the-conflict.webp",
  "assets/media/knutselfrutsel/Knutzel1.webp": "assets/images/previews/generated/knutselfrutsel.webp",
  "assets/media/obituary/Obituary1.png": "assets/images/previews/generated/obituary.webp",
  "assets/media/half-life-2-city/half-life-2-city-placeholder.png": "assets/images/previews/generated/half-life-2-city.webp",
  "assets/media/ocean-frenzy/Ocean1.jpg": "assets/images/previews/generated/ocean-frenzy.webp",
  "assets/media/game-developer-quiz/GD1.png": "assets/images/previews/generated/game-developer-quiz.webp",
  "assets/media/metahuman-airport-navigator/VirtualAssistant1.png": "assets/images/previews/generated/metahuman-airport-navigator.webp",
  "assets/media/terrain-wall-materials/Textrues1.png": "assets/images/previews/generated/terrain-wall-materials.webp",
  "assets/media/building-stylesheet/Trimsheet1.png": "assets/images/previews/generated/building-stylesheet.webp",
  "assets/media/kitchen-scene/Kitchen1.webp": "assets/images/previews/generated/kitchen-scene.webp",
  "assets/media/textured-models/Models1.png": "assets/images/previews/generated/textured-models.webp",
  "assets/media/mafia-revenge/CycleHatred1.png": "assets/images/previews/generated/mafia-revenge.webp"
};

  /* ==============================
     2) PROJECT DATA
     These are example entries so the homepage, filters, arrows and modal can be tested.
     Later you can replace only this array and the UI will update automatically.
     ============================== */

  const projects = [
  {
    id: "current-endless-runner",
    title: "Current Endless Runner Project",
    year: 2025,
    sortDate: "2025-11-01",
    role: "Solo Developer / Game Designer",
    shortSummary: "Mobile endless runner focused on obstacle pacing, progression flow, and scalable level variation.",
    summary: "Ongoing solo project inspired by endless runner design principles, focused on procedural terrain, obstacle logic, and mobile performance. The current build contains the core running loop, obstacle spawning, and early UI systems, while the level-building workflow is still improving.",
    highlighted: true,
    tags: {
      discipline: [
        "game-design",
        "systems-design",
        "engineering"
      ],
      teamType: [
        "solo"
      ],
      playability: [
        "in-development"
      ],
      genreStyle: [
        "endless-runner"
      ],
      platformBuild: [
        "mobile"
      ],
      toolsEngines: [
        "unity"
      ],
      specialFlags: [
        "highlighted",
        "systems-heavy"
      ]
    },
    toolsLine: "Unity",
    media: [
      "assets/media/current-endless-runner/current-endless-runner-placeholder.png"
    ],
    links: {
      itch: "",
      external: ""
    },
    responsibilities: [
      "Designed and implemented procedural terrain generation",
      "Built customizable obstacle spawning and level-building logic",
      "Optimized core systems for mobile performance",
      "Developed early UI and gameplay flow",
      "Planned progression systems such as achievements, XP, battle pass, and monetization"
    ],
    notes: "Media still to capture. Placeholder used for now."
  },
  {
    id: "abysmal-depths",
    title: "Abysmal Depths — Pixel Horror Game",
    year: 2020,
    sortDate: "2020-10-01",
    role: "Game Designer / World Builder / Audio",
    shortSummary: "Point-and-click pixel horror project shaped through game design, atmosphere, worldbuilding, and SFX.",
    summary: "Team-based pixel horror project where I helped shape the game’s direction, tone, and player experience. My main contributions were in game design, worldbuilding, and audio.",
    highlighted: true,
    tags: {
      discipline: [
        "game-design",
        "level-design",
        "audio",
        "narrative"
      ],
      teamType: [
        "team"
      ],
      playability: [
        "playable"
      ],
      genreStyle: [
        "horror",
        "point-and-click"
      ],
      platformBuild: [
        "pc"
      ],
      toolsEngines: [
        "fl-studio",
        "flowchart",
        "google-docs",
        "adobe-photoshop"
      ],
      specialFlags: [
        "highlighted",
        "worldbuilding"
      ]
    },
    toolsLine: "FL Studio, Flowcharts, Google Docs, Adobe Photoshop",
    media: [
      "assets/media/abysmal-depths/Abysmall1.png",
      "assets/media/abysmal-depths/Abysamll2.png",
            "assets/media/abysmal-depths/Abysmall4.png",
      "assets/media/abysmal-depths/Abysmall5.png",
      "assets/media/abysmal-depths/Abysmall6.png"
    ],
    links: {
      itch: "",
      external: ""
    },
    responsibilities: [
      "Contributed to the overall game design and horror experience",
      "Helped shape worldbuilding, atmosphere, and player-facing structure",
      "Created SFX to support tension and mood",
      "Worked closely with the team across design and presentation"
    ],
    notes: "Older student project with a playable prototype."
  },
  {
    id: "first-person-wireframe",
    title: "First Person Wireframe and Systems",
    year: 2021,
    sortDate: "2021-10-01",
    role: "Engineer / Game Designer",
    shortSummary: "Early Unity C# project focused on first-person mechanics and core gameplay systems.",
    summary: "Solo prototype created as an early Unity C# learning project, focused on first-person movement and interconnected gameplay systems such as XP, inventory, and feedback loops.",
    highlighted: true,
    tags: {
      discipline: [
        "engineering",
        "game-design",
        "systems-design"
      ],
      teamType: [
        "solo"
      ],
      playability: [
        "playable",
        "prototype"
      ],
      genreStyle: [
        "first-person"
      ],
      platformBuild: [
        "pc"
      ],
      toolsEngines: [
        "unity"
      ],
      specialFlags: [
        "highlighted",
        "systems-heavy"
      ]
    },
    toolsLine: "Unity",
    media: [
      "assets/media/first-person-wireframe/Wireframe1.png",
      "assets/media/first-person-wireframe/Wireframe2.png",
      "assets/media/first-person-wireframe/Wireframe3.png"
    ],
    links: {
      itch: "https://mlgjman.itch.io/wireframe-demo",
      external: ""
    },
    responsibilities: [
      "Built first-person movement and interaction systems",
      "Implemented XP progression and inventory functionality",
      "Added gameplay feedback and supporting SFX",
      "Combined engineering work with early gameplay/system design"
    ],
    notes: "Early engineering-focused prototype."
  },
  {
    id: "project-nebula",
    title: "Project Nebula — Space Shooter",
    year: 2021,
    sortDate: "2021-06-01",
    role: "Game Designer / Audio",
    shortSummary: "Space shooter project focused on combat feel, pacing, and player feedback.",
    summary: "Team-based space shooter project where I focused on gameplay design and audio support. The project explored arcade-style combat, feedback, and moment-to-moment pacing.",
    highlighted: false,
    tags: {
      discipline: [
        "game-design",
        "audio"
      ],
      teamType: [
        "team"
      ],
      playability: [
        "playable"
      ],
      genreStyle: [
        "space-shooter"
      ],
      platformBuild: [
        "pc"
      ],
      toolsEngines: [
        "unity"
      ],
      specialFlags: []
    },
    toolsLine: "Unity",
    media: [
      "assets/media/project-nebula/Nebula1.png",
      "assets/media/project-nebula/Nebula2.png"
    ],
    links: {
      itch: "",
      external: ""
    },
    responsibilities: [
      "Supported combat feel and gameplay pacing",
      "Helped shape the player loop and feedback",
      "Created audio/SFX support for the experience"
    ],
    notes: "Playable prototype. Large GIF and YouTube shortcut left out for performance."
  },
  {
    id: "the-conflict",
    title: "The Conflict — AR Card Game",
    year: 2021,
    sortDate: "2021-03-01",
    role: "Game Designer",
    shortSummary: "AR card game concept where physical cards reveal 3D content through mobile scanning.",
    summary: "Prototype exploring a physical-to-digital card game concept, combining physical cards with AR presentation. It had some card rules, but the main focus was the AR interaction and overall concept.",
    highlighted: false,
    tags: {
      discipline: [
        "game-design"
      ],
      teamType: [
        "team"
      ],
      playability: [
        "prototype",
        "visual-showcase"
      ],
      genreStyle: [
        "ar",
        "card-game"
      ],
      platformBuild: [
        "ar"
      ],
      toolsEngines: [
        "unity"
      ],
      specialFlags: []
    },
    toolsLine: "Unity",
    media: [
      "assets/media/the-conflict/Conflict1.png",
      "assets/media/the-conflict/Conflict2.png",
      "assets/media/the-conflict/Conflict4.png",
      "assets/media/the-conflict/Conflict5.png",
      "assets/media/the-conflict/Conflict6.png",
      "assets/media/the-conflict/Conflict7.png",
      "assets/media/the-conflict/Conflict8.png",
      "assets/media/the-conflict/Conflict9.jpg",
      "assets/media/the-conflict/Conflict10.jpg",
    ],
    links: {
      itch: "",
      external: ""
    },
    responsibilities: [
      "Helped design the core card game concept",
      "Supported the interaction between physical cards and AR content",
      "Focused on the overall experience and concept direction"
    ],
    notes: "Best presented through visuals and video."
  },
  {
    id: "knutselfrutsel",
    title: "Knutselfrutsel — Animation Choice Game",
    year: 2022,
    sortDate: "2022-05-01",
    role: "Story Writing / Worldbuilding / Audio",
    shortSummary: "Interactive kids project built around animated storytelling, friendship, and player choices.",
    summary: "Team-based project for a younger audience, where players watch an animated story and make simple choices that influence the experience. I contributed to writing, worldbuilding, and audio.",
    highlighted: false,
    tags: {
      discipline: [
        "narrative",
        "game-design",
        "audio"
      ],
      teamType: [
        "team"
      ],
      playability: [
        "playable"
      ],
      genreStyle: [
        "kids-family"
      ],
      platformBuild: [
        "pc"
      ],
      toolsEngines: [
        "unity",
        "ableton",
        "sony-vegas",
        "fl-studio"
      ],
      specialFlags: [
        "worldbuilding"
      ]
    },
    toolsLine: "Unity, Ableton, Sony Vegas, FL Studio",
    media: [
      "assets/media/knutselfrutsel/Knutzel1.webp",
      "assets/media/knutselfrutsel/Knutzel2.webp",
      "assets/media/knutselfrutsel/Knutzel3.webp",
      "assets/media/knutselfrutsel/Knutzel5.jpg",
      "assets/media/knutselfrutsel/Knutzel6.JPG",
      "assets/media/knutselfrutsel/Knutzel7.png"
    ],
    links: {
      itch: "",
      external: ""
    },
    responsibilities: [
      "Wrote story and worldbuilding elements",
      "Helped shape interaction flow through player choices",
      "Supported the tone of the project with audio work"
    ],
    notes: "HEIC and GIF were left out; fixed JPG is used instead."
  },
  {
    id: "obituary",
    title: "Obituary — Horror Solo Game",
    year: 2022,
    sortDate: "2022-11-01",
    role: "Game Developer",
    shortSummary: "Story-driven first-person horror game centered on mystery, exploration, and atmosphere.",
    summary: "Solo horror project where I handled design, engineering, audio, and narrative direction. The game follows a man uncovering the mystery behind his wife’s death through exploration, simple quest progression, dialogue, and atmosphere-driven gameplay.",
    highlighted: true,
    tags: {
      discipline: [
        "game-design",
        "level-design",
        "engineering",
        "audio",
        "narrative"
      ],
      teamType: [
        "solo"
      ],
      playability: [
        "playable"
      ],
      genreStyle: [
        "horror",
        "first-person"
      ],
      platformBuild: [
        "pc"
      ],
      toolsEngines: [
        "unity"
      ],
      specialFlags: [
        "highlighted",
        "worldbuilding"
      ]
    },
    toolsLine: "Unity",
    media: [
      "assets/media/obituary/Obituary1.png",
      "assets/media/obituary/Obituary2.png",
      "assets/media/obituary/Obituary3.png",
      "assets/media/obituary/Obituary4.png",
      "assets/media/obituary/Obituary5.png",
      "assets/media/obituary/Obituary6.png"
    ],
    links: {
      itch: "https://mlgjman.itch.io/obituary-release",
      external: ""
    },
    responsibilities: [
      "Designed and built the full game as a solo developer",
      "Created first-person exploration flow and quest progression",
      "Shaped atmosphere through level design, audio, and pacing",
      "Wrote and implemented the narrative framing of the mystery"
    ],
    notes: "Large GIF left out for performance."
  },
  {
    id: "half-life-2-city",
    title: "Half Life 2 City — Procedural Art Demo",
    year: 2022,
    sortDate: "2022-08-01",
    role: "Engineer / Artist",
    shortSummary: "Procedural city art demo with editable building, road, lighting, and color controls in the Unity editor.",
    summary: "Solo procedural art demo inspired by a Half-Life-style urban aesthetic. The project focused on a grid-based environment tool with adjustable parameters such as building type, size, road type, lighting, and color variation, supported by custom materials created in Adobe Designer.",
    highlighted: true,
    tags: {
      discipline: [
        "engineering",
        "art"
      ],
      teamType: [
        "solo"
      ],
      playability: [
        "prototype",
        "visual-showcase"
      ],
      genreStyle: [
        "procedural"
      ],
      platformBuild: [
        "visual-only"
      ],
      toolsEngines: [
        "unity",
        "substance-designer"
      ],
      specialFlags: [
        "highlighted",
        "worldbuilding"
      ]
    },
    toolsLine: "Unity, Adobe Substance 3D Designer",
    media: [
      "assets/media/half-life-2-city/half-life-2-city-placeholder.png"
    ],
    links: {
      itch: "",
      external: ""
    },
    responsibilities: [
      "Built a grid-based procedural city/building system",
      "Added editable controls for size, building type, roads, and lighting",
      "Created custom textures/material support in Adobe Designer",
      "Combined engineering and visual design into one environment tool"
    ],
    notes: "Media still to capture. Placeholder used for now."
  },
  {
    id: "ocean-frenzy",
    title: "Ocean Frenzy — Ocean Awareness Puzzle Prototype",
    year: 2023,
    sortDate: "2023-10-01",
    role: "Game Designer",
    shortSummary: "Educational ocean-awareness puzzle prototype where the player explores real seas, collects facts, and progresses through quests and events.",
    summary: "Solo educational prototype built around ocean awareness and exploration. The player is a diver visiting real-world seas, collecting fact points, completing quests, joining events, earning rewards, upgrading the character, and progressing through increasing difficulty.",
    highlighted: false,
    tags: {
      discipline: [
        "game-design",
        "ui-ux",
        "systems-design"
      ],
      teamType: [
        "solo"
      ],
      playability: [
        "prototype"
      ],
      genreStyle: [
        "puzzle",
        "ocean-awareness",
        "educational"
      ],
      platformBuild: [
        "figma-prototype"
      ],
      toolsEngines: [
        "figma"
      ],
      specialFlags: [
        "educational"
      ]
    },
    toolsLine: "Figma",
    media: [
      "assets/media/ocean-frenzy/Ocean1.jpg",
      "assets/media/ocean-frenzy/Ocean2.jpg",
      "assets/media/ocean-frenzy/Ocean3.jpg",
      "assets/media/ocean-frenzy/Ocean4.jpg",
      "assets/media/ocean-frenzy/Ocean5.jpg",
      "assets/media/ocean-frenzy/Ocean6.jpg",
      "assets/media/ocean-frenzy/Ocean7.jpg",
      "assets/media/ocean-frenzy/Ocean8.jpg",
      "assets/media/ocean-frenzy/Ocean9.jpg"
    ],
    links: {
      itch: "",
      external: ""
    },
    responsibilities: [
      "Designed the core educational concept and exploration loop",
      "Structured quests, rewards, events, and progression ideas",
      "Built the prototype flow in Figma with a strong systems focus",
      "Combined awareness content with player-facing progression design"
    ],
    notes: "Concept/prototype project with no final build."
  },
  {
    id: "game-developer-quiz",
    title: "Game Developer Quiz",
    year: 2024,
    sortDate: "2024-09-01",
    role: "Game Developer",
    shortSummary: "Educational thesis project designed to train developers on driving game design, optimization, and monetization.",
    summary: "Solo thesis project connected to Azerion Game Distribution, created as a proof-of-concept training tool for developers. It focuses mainly on driving games, using patterns gathered from hundreds of titles to teach design, monetization, and upload/distribution practices.",
    highlighted: true,
    tags: {
      discipline: [
        "game-design",
        "engineering",
        "art",
        "ui-ux"
      ],
      teamType: [
        "solo"
      ],
      playability: [
        "playable"
      ],
      genreStyle: [
        "educational"
      ],
      platformBuild: [
        "pc"
      ],
      toolsEngines: [
        "unity"
      ],
      specialFlags: [
        "highlighted",
        "educational"
      ]
    },
    toolsLine: "Unity",
    media: [
      "assets/media/game-developer-quiz/GD1.png",
      "assets/media/game-developer-quiz/GD2.png",
      "assets/media/game-developer-quiz/GD3.png",
      "assets/media/game-developer-quiz/GD4.png",
      "assets/media/game-developer-quiz/GD5.png"
    ],
    links: {
      itch: "",
      external: ""
    },
    responsibilities: [
      "Designed and built the quiz/training application",
      "Created content focused on driving game design and monetization",
      "Gathered references from a large number of games and patterns",
      "Framed the project as a proof-of-concept educational tool for developers"
    ],
    notes: "GIF left out for performance."
  },
  {
    id: "metahuman-airport-navigator",
    title: "Metahuman Airport Navigator",
    year: 2024,
    sortDate: "2024-04-01",
    role: "Engineer / Project Leader",
    shortSummary: "Interactive airport assistant prototype using Unreal Engine, Metahuman, and NVIDIA Audio2Face.",
    summary: "University client project created for Schiphol Airport and the Dutch border police as an airport assistance concept. The assistant connects to a web/cloud system and allows users to ask airport-related questions or interact through a touchscreen interface, while I handled technical implementation and a large part of the project coordination.",
    highlighted: true,
    tags: {
      discipline: [
        "engineering",
        "project-coordination"
      ],
      teamType: [
        "team"
      ],
      playability: [
        "prototype",
        "visual-showcase"
      ],
      genreStyle: [],
      platformBuild: [
        "pc"
      ],
      toolsEngines: [
        "unreal-engine",
        "nvidia-audio2face"
      ],
      specialFlags: [
        "highlighted",
        "leadership"
      ]
    },
    toolsLine: "Unreal Engine, NVIDIA Audio2Face",
    media: [
      "assets/media/metahuman-airport-navigator/VirtualAssistant1.png",
      "assets/media/metahuman-airport-navigator/VirtualAssistant2.png",
      "assets/media/metahuman-airport-navigator/VirtualAssistant3.avif",
      "assets/media/metahuman-airport-navigator/VirtualAssistant4.avif",
      "assets/media/metahuman-airport-navigator/VirtualAssistant5.avif",
      "assets/media/metahuman-airport-navigator/VirtualAssistant6.avif"
    ],
    links: {
      itch: "",
      external: ""
    },
    responsibilities: [
      "Coordinated planning, communication, and team structure",
      "Managed emails, task distribution, and external collaboration",
      "Implemented the Audio2Face-to-Unreal-to-Metahuman setup",
      "Worked with external coding students to support the full system connection"
    ],
    notes: "Client/university concept project best shown through visuals and presentation."
  },
  {
    id: "terrain-wall-materials",
    title: "Terrain & Wall Materials",
    year: 2023,
    sortDate: "2023-03-01",
    role: "Artist",
    shortSummary: "Material studies for terrain and wall surfaces created for environment support work.",
    summary: "Solo material study focused on creating reusable terrain and wall textures for environment work. The goal was to explore surface variation, readability, and material quality.",
    highlighted: false,
    tags: {
      discipline: [
        "art"
      ],
      teamType: [
        "solo"
      ],
      playability: [
        "visual-showcase"
      ],
      genreStyle: [
        "procedural"
      ],
      platformBuild: [
        "visual-only"
      ],
      toolsEngines: [
        "substance-designer"
      ],
      specialFlags: []
    },
    toolsLine: "Adobe Substance 3D Designer",
    media: [
      "assets/media/terrain-wall-materials/Textrues1.png",
      "assets/media/terrain-wall-materials/Textrues2.png",
      "assets/media/terrain-wall-materials/Textrues3.png",
    ],
    links: {
      itch: "",
      external: ""
    },
    responsibilities: [
      "Created terrain and wall material studies",
      "Explored visual variety and environment support assets",
      "Focused on material clarity and reusability"
    ],
    notes: "Only the smallest GIF was kept; larger GIFs were left out."
  },
  {
    id: "building-stylesheet",
    title: "Building Stylesheet",
    year: 2023,
    sortDate: "2023-04-01",
    role: "Artist",
    shortSummary: "Procedural brick building stylesheet with color-adjustable variation built from a single texture setup.",
    summary: "Solo art study focused on a building stylesheet that could support multiple visual outcomes while staying efficient. The project explored how one texture setup could be reused across a modular building style.",
    highlighted: false,
    tags: {
      discipline: [
        "art"
      ],
      teamType: [
        "solo"
      ],
      playability: [
        "visual-showcase"
      ],
      genreStyle: [
        "procedural"
      ],
      platformBuild: [
        "visual-only"
      ],
      toolsEngines: [
        "substance-designer"
      ],
      specialFlags: []
    },
    toolsLine: "Adobe Substance 3D Designer",
    media: [
      "assets/media/building-stylesheet/Trimsheet1.png",
      "assets/media/building-stylesheet/Trimsheet2.png",
      "assets/media/building-stylesheet/Trimsheet3.png"
    ],
    links: {
      itch: "",
      external: ""
    },
    responsibilities: [
      "Built a reusable building stylesheet",
      "Created color-adjustable brick variation",
      "Focused on efficient visual reuse through material design"
    ],
    notes: "You mentioned one extra GIF to add manually later."
  },
  {
    id: "kitchen-scene",
    title: "Kitchen Scene",
    year: 2023,
    sortDate: "2023-05-01",
    role: "Artist",
    shortSummary: "Fully textured kitchen scene with individually painted assets and materials.",
    summary: "Solo art project focused on texturing a full kitchen scene and its individual objects. The work explored consistent visual quality across multiple assets within one environment.",
    highlighted: false,
    tags: {
      discipline: [
        "art"
      ],
      teamType: [
        "solo"
      ],
      playability: [
        "visual-showcase"
      ],
      genreStyle: [],
      platformBuild: [
        "visual-only"
      ],
      toolsEngines: [
        "substance-painter"
      ],
      specialFlags: []
    },
    toolsLine: "Adobe Substance 3D Painter",
    media: [
      "assets/media/kitchen-scene/Kitchen1.webp",
      "assets/media/kitchen-scene/Kitchen2.webp",
      "assets/media/kitchen-scene/Kitchen3.webp"
    ],
    links: {
      itch: "https://mlgjman.itch.io/scene-1-kitchen",
      external: ""
    },
    responsibilities: [
      "Textured a full kitchen scene",
      "Painted individual props and materials",
      "Focused on cohesion across environment assets"
    ],
    notes: "Very large GIFs were intentionally left out for performance."
  },
  {
    id: "textured-models",
    title: "Textured Models",
    year: 2023,
    sortDate: "2023-06-01",
    role: "Artist",
    shortSummary: "Collection of individually textured 3D models focused on surface detail and material readability.",
    summary: "Solo asset texturing studies used to explore material variety and surface polish on individual models. The focus was on painting clear, readable textures and improving presentation quality.",
    highlighted: false,
    tags: {
      discipline: [
        "art"
      ],
      teamType: [
        "solo"
      ],
      playability: [
        "visual-showcase"
      ],
      genreStyle: [],
      platformBuild: [
        "visual-only"
      ],
      toolsEngines: [
        "substance-painter"
      ],
      specialFlags: []
    },
    toolsLine: "Adobe Substance 3D Painter",
    media: [
      "assets/media/textured-models/Models1.png",
      "assets/media/textured-models/Models2.png",
      "assets/media/textured-models/Models3.png",
      "assets/media/textured-models/Models4.png"
    ],
    links: {
      itch: "",
      external: ""
    },
    responsibilities: [
      "Painted multiple individual 3D models",
      "Explored texture clarity and material variation",
      "Built visual polish through asset presentation"
    ],
    notes: "You mentioned one extra GIF to add manually later."
  },
  {
    id: "mafia-revenge",
    title: "Mafia Revenge — Visual Story",
    year: 2020,
    sortDate: "2020-08-01",
    role: "Writer / Narrative Designer",
    shortSummary: "Choice-based mafia revenge story presented through writing, visuals, and interactive narrative flow.",
    summary: "Narrative project built around an 1980s mafia revenge story, combining written storytelling, visual support, and interactive choices. I led the writing and story direction, while a friend contributed the visual work.",
    highlighted: false,
    tags: {
      discipline: [
        "narrative",
        "game-design"
      ],
      teamType: [
        "solo"
      ],
      playability: [
        "playable"
      ],
      genreStyle: [],
      platformBuild: [
        "pc"
      ],
      toolsEngines: [],
      specialFlags: []
    },
    toolsLine: "HTML-based narrative tool",
    media: [
      "assets/media/mafia-revenge/CycleHatred1.png",
      "assets/media/mafia-revenge/CycleHatred2.png",
      "assets/media/mafia-revenge/CycleHatred3.png",
      "assets/media/mafia-revenge/CycleHatred4.jpg"
    ],
    links: {
      itch: "",
      external: ""
    },
    responsibilities: [
      "Wrote the story and core narrative structure",
      "Designed branching/choice-based progression",
      "Defined the tone and dramatic direction of the project"
    ],
    notes: "Large GIF left out for performance."
  }
];

  /* ==============================
     3) SMALL HELPERS
     ============================== */

  function $(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  function $all(selector, parent) {
    return Array.from((parent || document).querySelectorAll(selector));
  }

  function escapeHtml(text) {
    return String(text || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function prettyTag(tag) {
    return labelMap[tag] || tag;
  }

  function getTagPillClass(tag, groupId) {
    if (tagVariantMap[tag]) {
      return tagVariantMap[tag];
    }

    switch (groupId || tagGroupMap[tag]) {
      case "discipline":
        return "pill pill-green";
      case "teamType":
        return "pill pill-purple";
      case "playability":
        return "pill pill-blue";
      case "genreStyle":
        return "pill pill-rose";
      case "platformBuild":
        return "pill pill-slate";
      case "toolsEngines":
        return "pill pill-cyan";
      case "specialFlags":
        return tag === "highlighted" ? "pill pill-accent" : "pill pill-purple";
      default:
        return "pill pill-blue";
    }
  }

  function createDefaultSelected(highlightedOnly) {
    const selected = {};
    filterGroups.forEach(group => {
      selected[group.id] = [];
    });
    if (highlightedOnly) {
      selected.specialFlags = ["highlighted"];
    }
    return selected;
  }

  function createDefaultOpenGroups(startOpenCount) {
    const openGroups = {};
    filterGroups.forEach((group, index) => {
      openGroups[group.id] = index < startOpenCount;
    });
    return openGroups;
  }

  function loadStoredJson(key) {
    if (!key) {
      return null;
    }
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function saveStoredJson(key, value) {
    if (!key) {
      return;
    }
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      /* ignore storage quota / private mode issues */
    }
  }

  function getDefaultState(highlightedOnly, startOpenCount, storageKey) {
    const defaults = {
      search: "",
      sort: "newest",
      selected: createDefaultSelected(highlightedOnly),
      openGroups: createDefaultOpenGroups(startOpenCount)
    };

    const saved = loadStoredJson(storageKey);
    if (!saved || typeof saved !== "object") {
      return defaults;
    }

    const state = {
      search: typeof saved.search === "string" ? saved.search : defaults.search,
      sort: ["newest", "oldest", "title"].includes(saved.sort) ? saved.sort : defaults.sort,
      selected: createDefaultSelected(false),
      openGroups: createDefaultOpenGroups(startOpenCount)
    };

    filterGroups.forEach(group => {
      const validValues = new Set(group.options.map(option => option[0]));
      const savedValues = saved.selected && Array.isArray(saved.selected[group.id]) ? saved.selected[group.id] : defaults.selected[group.id];
      state.selected[group.id] = savedValues.filter(value => validValues.has(value));
      state.openGroups[group.id] = saved.openGroups && typeof saved.openGroups[group.id] === "boolean"
        ? saved.openGroups[group.id]
        : defaults.openGroups[group.id];
    });

    return state;
  }

  function persistState(storageKey, state) {
    saveStoredJson(storageKey, {
      search: state.search || "",
      sort: state.sort || "newest",
      selected: state.selected || {},
      openGroups: state.openGroups || {}
    });
  }

  let modalLockCount = 0;

  function syncBodyScrollLock() {
    const hasOpenModal = !!document.querySelector(".modal.is-open");
    const shouldLock = hasOpenModal || modalLockCount > 0;

    document.documentElement.classList.toggle("modal-open", shouldLock);
    document.body.classList.toggle("modal-open", shouldLock);
    document.documentElement.style.overflow = shouldLock ? "hidden" : "";
    document.body.style.overflow = shouldLock ? "hidden" : "";
  }

  function lockBodyScroll() {
    modalLockCount += 1;
    syncBodyScrollLock();
  }

  function unlockBodyScroll() {
    if (modalLockCount > 0) {
      modalLockCount -= 1;
    }
    syncBodyScrollLock();
  }

  function getScrollableAncestor(start, boundary) {
    let node = start instanceof Element ? start : null;
    while (node && node !== boundary) {
      if (node.scrollHeight > node.clientHeight + 1 || node.scrollWidth > node.clientWidth + 1) {
        const styles = window.getComputedStyle(node);
        const canScrollY = /(auto|scroll|overlay)/.test(styles.overflowY);
        const canScrollX = /(auto|scroll|overlay)/.test(styles.overflowX);
        if (canScrollY || canScrollX) {
          return node;
        }
      }
      node = node.parentElement;
    }

    if (boundary && (boundary.scrollHeight > boundary.clientHeight + 1 || boundary.scrollWidth > boundary.clientWidth + 1)) {
      return boundary;
    }

    return null;
  }

  function trapWheelWithin(boundary, event) {
    const scrollable = getScrollableAncestor(event.target, boundary);
    if (!scrollable) {
      event.preventDefault();
      return;
    }

    const deltaY = event.deltaY || 0;
    if (deltaY === 0) {
      return;
    }

    const atTop = scrollable.scrollTop <= 0;
    const atBottom = scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 1;

    if ((deltaY < 0 && atTop) || (deltaY > 0 && atBottom)) {
      event.preventDefault();
    }
  }

  function flashElement(target) {
    if (!target) {
      return;
    }
    target.classList.remove("section-pulse");
    void target.offsetWidth;
    target.classList.add("section-pulse");
    window.setTimeout(function () {
      target.classList.remove("section-pulse");
    }, 1200);
  }

  function resolvePulseTarget(target) {
    if (!target) {
      return null;
    }

    if (target.id === "home-hero") {
      return target.querySelector(".hero-showcase") || target;
    }
    if (target.id === "portfolio") {
      return target.querySelector(".toolbar") || target.querySelector(".filters-layout") || target;
    }
    if (target.id === "summary") {
      return target.querySelector(".summary-grid") || target;
    }
    if (target.id === "footer") {
      return target.querySelector(".footer-card") || target;
    }
    if (target.id === "archive") {
      return target.querySelector(".toolbar") || target;
    }

    return target.querySelector(".card, .panel") || target;
  }

  function flashTargetById(targetId) {
    const target = targetId ? document.getElementById(targetId) : null;
    if (!target) {
      return;
    }
    window.setTimeout(function () {
      flashElement(resolvePulseTarget(target));
    }, 420);
  }

  function sortProjects(list, sort) {
    const cloned = list.slice();
    if (sort === "oldest") {
      cloned.sort((a, b) => new Date(a.sortDate) - new Date(b.sortDate));
    } else if (sort === "title") {
      cloned.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      cloned.sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));
    }
    return cloned;
  }

  function matchesFilters(project, state) {
    const search = state.search.trim().toLowerCase();

    if (search) {
      const searchText = [
        project.title,
        project.role,
        project.shortSummary,
        project.summary,
        project.toolsLine,
        ...(project.responsibilities || []),
        ...(project.notes ? [project.notes] : [])
      ]
        .join(" ")
        .toLowerCase();

      if (!searchText.includes(search)) {
        return false;
      }
    }

    return Object.keys(state.selected).every(groupId => {
      const selectedValues = state.selected[groupId] || [];
      if (!selectedValues.length) {
        return true;
      }
      const projectValues = (project.tags && project.tags[groupId]) || [];
      return selectedValues.every(value => projectValues.includes(value));
    });
  }

  function isInteractiveClickTarget(target) {
    return !!target.closest("a, button, input, select, label");
  }

  function safeImage(path) {
    return path || profile.heroImage;
  }

  function previewImage(path) {
    const source = safeImage(path);
    return previewMap[source] || source;
  }

  function getHeroImagePositions(slide) {
    const positions = {
      profile: { desktop: "78% center", mobile: "72% center" },
      "current-endless-runner": { desktop: "54% center", mobile: "58% center" },
      obituary: { desktop: "50% center", mobile: "48% center" },
      "half-life-2-city": { desktop: "50% center", mobile: "50% center" },
      "first-person-wireframe": { desktop: "50% center", mobile: "44% center" },
      "game-developer-quiz": { desktop: "50% center", mobile: "48% center" },
      "metahuman-airport-navigator": { desktop: "68% center", mobile: "64% center" },
      "abysmal-depths": { desktop: "52% center", mobile: "50% center" }
    };

    if (slide.kind === "profile") {
      return positions.profile;
    }

    return positions[slide.projectId] || { desktop: "center center", mobile: "center center" };
  }

  /* ==============================
     4) SITE SHELL
     ============================== */


  function createDocumentChoiceModal() {
    let modal = document.querySelector('[data-doc-choice-modal]');
    let dialog = modal ? modal.querySelector('[data-doc-choice-dialog]') : null;

    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'modal';
      modal.setAttribute('data-doc-choice-modal', '');
      modal.setAttribute('aria-hidden', 'true');
      modal.innerHTML = '<div class="modal__dialog modal__dialog--compact card" data-doc-choice-dialog role="dialog" aria-modal="true" aria-label="Choose CV action"></div>';
      document.body.appendChild(modal);
      dialog = modal.querySelector('[data-doc-choice-dialog]');
    }

    function close(event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      unlockBodyScroll();
    }

    function open(title, file) {
      dialog.innerHTML = `
        <div class="doc-choice">
          <button class="btn icon-btn doc-choice__close" type="button" data-doc-choice-close aria-label="Close CV options">✕</button>
          <h2 class="doc-choice__title">${escapeHtml(title)}</h2>
          <p class="doc-choice__copy">Choose whether you want to open the CV in a new tab.</p>
          <div class="doc-choice__actions">
            <a class="btn btn-primary" href="${escapeHtml(file)}" target="_blank" rel="noreferrer">View online</a>
            <button class="btn btn-soft" type="button" data-doc-choice-close>Cancel</button>
          </div>
        </div>
      `;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      lockBodyScroll();
      dialog.querySelectorAll('[data-doc-choice-close]').forEach(function(button) {
        button.addEventListener('click', close);
      });
    }

    modal.addEventListener('wheel', function(event) {
      if (!modal.classList.contains('is-open')) {
        return;
      }
      trapWheelWithin(dialog, event);
    }, { passive: false });

    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        close();
      }
    });

    document.addEventListener('keydown', function(event) {
      if (modal.classList.contains('is-open') && event.key === 'Escape') {
        close();
      }
    });

    return { open: open, close: close };
  }

  function initSiteShell() {
    const navToggle = $("[data-nav-toggle]");
    const nav = $("[data-site-nav]");
    const isHome = document.body.classList.contains("page-home");

    if (navToggle && nav) {
      navToggle.addEventListener("click", function () {
        nav.classList.toggle("is-open");
      });

      $all("a", nav).forEach(function (link) {
        link.addEventListener("click", function () {
          nav.classList.remove("is-open");
        });
      });
    }

    if (isHome) {
      $all("[data-home-link]").forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          flashTargetById("home-hero");
          if (nav) {
            nav.classList.remove("is-open");
          }
        });
      });

      $all("[data-section-link]").forEach(function (link) {
        link.addEventListener("click", function (event) {
          const targetId = link.getAttribute("data-section-link");
          const target = targetId ? document.getElementById(targetId) : null;
          if (!target) {
            return;
          }
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          flashTargetById(targetId);
          if (nav) {
            nav.classList.remove("is-open");
          }
        });
      });

      if (window.location.hash) {
        const hashTarget = window.location.hash.replace("#", "");
        if (hashTarget) {
          flashTargetById(hashTarget);
        }
      }
    } else {
      const currentProjectsLink = document.querySelector('.site-nav a[href="projects.html"]');
      if (currentProjectsLink && document.body.classList.contains("page-projects")) {
        currentProjectsLink.addEventListener("click", function (event) {
          event.preventDefault();
          const archiveSection = document.getElementById("archive");
          if (archiveSection) {
            archiveSection.scrollIntoView({ behavior: "smooth", block: "start" });
            flashTargetById("archive");
          }
        });
      }

      const footerLink = document.querySelector('[data-section-link="footer"]');
      if (footerLink) {
        footerLink.addEventListener("click", function (event) {
          const target = document.getElementById("footer");
          if (!target) {
            return;
          }
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          flashTargetById("footer");
          if (nav) {
            nav.classList.remove("is-open");
          }
        });
      }
    }

    const yearTarget = $("[data-current-year]");
    if (yearTarget) {
      yearTarget.textContent = new Date().getFullYear();
    }

    const documentChoiceModal = createDocumentChoiceModal();
    const cvMenus = $all("[data-cv-menu]");
    cvMenus.forEach(function (menu) {
      const toggle = $("[data-cv-toggle]", menu);
      const panel = $("[data-cv-panel]", menu);
      if (!toggle || !panel) {
        return;
      }

      toggle.addEventListener("click", function (event) {
        event.stopPropagation();
        const willOpen = panel.hasAttribute("hidden");

        cvMenus.forEach(function (otherMenu) {
          const otherToggle = $("[data-cv-toggle]", otherMenu);
          const otherPanel = $("[data-cv-panel]", otherMenu);
          if (otherPanel) {
            otherPanel.hidden = true;
          }
          if (otherToggle) {
            otherToggle.setAttribute("aria-expanded", "false");
          }
        });

        panel.hidden = !willOpen;
        toggle.setAttribute("aria-expanded", String(willOpen));
      });

      $all("[data-cv-choice]", menu).forEach(function (choiceButton) {
        choiceButton.addEventListener("click", function (event) {
          event.preventDefault();
          const title = choiceButton.getAttribute("data-cv-title") || "CV";
          const file = choiceButton.getAttribute("data-cv-file") || "";
          panel.hidden = true;
          toggle.setAttribute("aria-expanded", "false");
          documentChoiceModal.open(title, file);
        });
      });
    });

    document.addEventListener("click", function (event) {
      cvMenus.forEach(function (menu) {
        if (menu.contains(event.target)) {
          return;
        }
        const toggle = $("[data-cv-toggle]", menu);
        const panel = $("[data-cv-panel]", menu);
        if (panel) {
          panel.hidden = true;
        }
        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  /* ==============================
     5) HERO SLIDER
     The homepage hero uses one profile slide + highlighted project slides.
     ============================== */

  function createHeroHighlightCard(project) {
    return `
      <article class="hero-highlight-card card" data-open-project="${escapeHtml(project.id)}" tabindex="0" aria-label="Open ${escapeHtml(project.title)} details">
        <div class="hero-highlight-card__media">
          <img src="${escapeHtml(previewImage(project.media && project.media[0]))}" alt="${escapeHtml(project.title)} preview" loading="lazy" decoding="async" />
          <div class="hero-highlight-card__overlay">
            <p class="hero-highlight-card__meta">${escapeHtml(String(project.year))} · ${escapeHtml(project.role)}</p>
            <h3 class="hero-highlight-card__title">${escapeHtml(project.title)}</h3>
          </div>
        </div>
      </article>
    `;
  }

  function initHeroSlider(modalApi) {
    const root = $("[data-hero-slider]");
    const highlightTrack = $("[data-highlight-track]");
    const highlightPrev = $("[data-highlight-prev]");
    const highlightNext = $("[data-highlight-next]");

    if (!root) {
      return;
    }

    const highlighted = projects.filter(project => project.highlighted);
    const slides = [
      {
        kind: "profile",
        projectId: "profile",
        title: profile.name,
        copy: "Game Developer · Game Designer · Project Coordination.",
        image: profile.heroImage,
        alt: "Placeholder portrait",
        badges: ["Profile", "Featured"]
      }
    ].concat(
      highlighted.map(project => ({
        kind: "project",
        projectId: project.id,
        title: project.title,
        copy: project.shortSummary,
        image: safeImage(project.media[0]),
        alt: project.title + " preview",
        badges: ["Highlighted", String(project.year)]
      }))
    );

    let currentIndex = 0;
    let autoPlayId = null;

    root.innerHTML = `
      <div class="hero-slider__stage">
        ${slides
          .map(function (slide, index) {
            const positions = getHeroImagePositions(slide);
            const contentHtml = `
              <div class="hero-slide__content ${slide.kind === "profile" ? "hero-slide__content--profile" : "hero-slide__content--project"}">
                <div class="hero-slide__meta">
                  ${slide.badges
                    .map(function (badge, badgeIndex) {
                      return `<span class="${badgeIndex === 0 ? "pill pill-accent" : "pill pill-blue"}">${escapeHtml(badge)}</span>`;
                    })
                    .join("")}
                </div>
                <div>
                  <h3 class="hero-slide__title">${escapeHtml(slide.title)}</h3>
                  <p class="hero-slide__copy">${escapeHtml(slide.copy)}</p>
                </div>
              </div>
            `;

            return `
              <article class="hero-slide ${index === 0 ? "is-active" : ""}" data-hero-slide style="--hero-desktop-position:${escapeHtml(positions.desktop)}; --hero-mobile-position:${escapeHtml(positions.mobile)};">
                <div class="hero-slide__media">
                  <img src="${escapeHtml(index === 0 ? slide.image : previewImage(slide.image))}" alt="${escapeHtml(slide.alt)}" ${index === 0 ? 'fetchpriority="high" loading="eager"' : 'loading="lazy"'} decoding="async" />
                </div>
                <div class="hero-slide__overlay"></div>
                ${contentHtml}
              </article>
            `;
          })
          .join("")}
      </div>
      <div class="hero-slider__dots" role="tablist" aria-label="Hero slideshow controls">
        ${slides
          .map(function (slide, index) {
            return `<button class="hero-slider__dot ${index === 0 ? "is-active" : ""}" type="button" data-hero-dot="${index}" aria-label="Show ${escapeHtml(slide.title)}"></button>`;
          })
          .join("")}
      </div>
    `;

    const slideEls = $all("[data-hero-slide]", root);
    const dotEls = $all("[data-hero-dot]", root);

    function setActiveSlide(index) {
      currentIndex = (index + slides.length) % slides.length;
      slideEls.forEach(function (slideEl, slideIndex) {
        slideEl.classList.toggle("is-active", slideIndex === currentIndex);
      });
      dotEls.forEach(function (dotEl, dotIndex) {
        dotEl.classList.toggle("is-active", dotIndex === currentIndex);
      });

      const heroBanner = root.closest(".hero-banner");
      if (heroBanner) {
        heroBanner.classList.toggle("hero-banner--project-active", slides[currentIndex] && slides[currentIndex].kind === "project");
      }
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayId = window.setInterval(function () {
        setActiveSlide(currentIndex + 1);
      }, 5200);
    }

    function stopAutoPlay() {
      if (autoPlayId) {
        window.clearInterval(autoPlayId);
      }
    }

    dotEls.forEach(function (dotEl) {
      dotEl.addEventListener("click", function () {
        setActiveSlide(Number(dotEl.getAttribute("data-hero-dot")) || 0);
        startAutoPlay();
      });
    });

    let pointerStartX = 0;
    let pointerStartY = 0;
    let dragActive = false;

    function onPointerDown(event) {
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }
      dragActive = true;
      pointerStartX = event.clientX;
      pointerStartY = event.clientY;
      stopAutoPlay();
    }

    function onPointerUp(event) {
      if (!dragActive) {
        return;
      }
      dragActive = false;
      const deltaX = event.clientX - pointerStartX;
      const deltaY = event.clientY - pointerStartY;
      if (Math.abs(deltaX) > 42 && Math.abs(deltaX) > Math.abs(deltaY)) {
        setActiveSlide(currentIndex + (deltaX < 0 ? 1 : -1));
      }
      startAutoPlay();
    }

    root.addEventListener("pointerdown", onPointerDown);
    root.addEventListener("pointerup", onPointerUp);
    root.addEventListener("pointercancel", function () {
      dragActive = false;
      startAutoPlay();
    });

    setActiveSlide(0);

    root.addEventListener("mouseenter", stopAutoPlay);
    root.addEventListener("mouseleave", startAutoPlay);
    root.addEventListener("focusin", stopAutoPlay);
    root.addEventListener("focusout", startAutoPlay);

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      startAutoPlay();
    }

    if (highlightTrack) {
      const highlightedForRail = highlighted.slice(0, 8);
      highlightTrack.innerHTML = highlightedForRail.map(createHeroHighlightCard).join("");
      bindProjectCardEvents(highlightTrack, modalApi, highlightedForRail);

      function scrollHighlights(direction) {
        const firstCard = $(".hero-highlight-card", highlightTrack);
        const step = firstCard ? firstCard.getBoundingClientRect().width + 16 : 320;
        highlightTrack.scrollBy({ left: step * direction, behavior: "smooth" });
      }

      if (highlightPrev) {
        highlightPrev.addEventListener("click", function () {
          scrollHighlights(-1);
        });
      }

      if (highlightNext) {
        highlightNext.addEventListener("click", function () {
          scrollHighlights(1);
        });
      }
    }
  }

  /* ==============================
     6) PROJECT MODAL
     One reusable popup template is shared by both pages.
     ============================== */

  function createProjectModal() {
    const modal = $("[data-project-modal]");
    const dialog = $("[data-modal-dialog]");

    if (!modal || !dialog) {
      return { open: function () { }, close: function () { } };
    }

    let orderedProjects = sortProjects(projects, "newest");
    let currentIndex = 0;
    let currentMediaIndex = 0;

    function isVideoMedia(src) {
      return /\.(mp4|webm|ogg)$/i.test(String(src || ""));
    }

    function renderMediaMarkup(src, alt, featured) {
      if (isVideoMedia(src)) {
        return `<video ${featured ? 'controls playsinline preload="metadata"' : 'muted playsinline preload="metadata"'} src="${escapeHtml(src)}" aria-label="${escapeHtml(alt)}"></video>`;
      }
      return `<img src="${escapeHtml(safeImage(src))}" alt="${escapeHtml(alt)}" ${featured ? 'decoding="async"' : 'loading="lazy" decoding="async"'} />`;
    }

    function buildTagGroup(label, values) {
      if (!values || !values.length) {
        return "";
      }

      return `
        <section class="modal__section">
          <h3>${escapeHtml(label)}</h3>
          <div class="project-card__tags">
            ${values
              .map(function (value) {
                return `<span class="${getTagPillClass(value)}">${escapeHtml(prettyTag(value))}</span>`;
              })
              .join("")}
          </div>
        </section>
      `;
    }

    function updateThumbNav() {
      const viewport = $("[data-thumb-viewport]", dialog);
      const prevButton = $("[data-thumb-prev]", dialog);
      const nextButton = $("[data-thumb-next]", dialog);

      if (!viewport || !prevButton || !nextButton) {
        return;
      }

      const canScroll = viewport.scrollWidth > viewport.clientWidth + 8;
      prevButton.hidden = !canScroll;
      nextButton.hidden = !canScroll;
      prevButton.disabled = viewport.scrollLeft <= 2;
      nextButton.disabled = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 2;
    }

    function setFeaturedMedia(project, media) {
      const featured = $("[data-modal-featured]", dialog);
      if (!featured) {
        return;
      }

      const activeSrc = media[currentMediaIndex] || media[0];
      featured.innerHTML = renderMediaMarkup(activeSrc, `${project.title} featured media`, true);

      $all("[data-thumb-index]", dialog).forEach(function (thumbButton) {
        const thumbIndex = Number(thumbButton.getAttribute("data-thumb-index")) || 0;
        thumbButton.classList.toggle("is-active", thumbIndex === currentMediaIndex);
      });

      const activeThumb = $(`[data-thumb-index="${currentMediaIndex}"]`, dialog);
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }

      updateThumbNav();
    }

    function render(index) {
      currentIndex = (index + orderedProjects.length) % orderedProjects.length;
      const project = orderedProjects[currentIndex];
      const media = project.media && project.media.length ? project.media : [profile.heroImage];
      currentMediaIndex = 0;

      dialog.innerHTML = `
        <div class="modal__gallery">
          <div class="modal__featured" data-modal-featured></div>
          <div class="modal__gallery-divider" aria-hidden="true"></div>
          <div class="modal__thumb-shell">
            <button class="btn icon-btn modal__thumb-nav" type="button" data-thumb-prev aria-label="Scroll previous media">←</button>
            <div class="modal__thumbs-viewport" data-thumb-viewport>
              <div class="modal__thumbs ${media.length > 4 ? "modal__thumbs--desktop-grid" : "modal__thumbs--single-row"}" data-modal-thumbs style="--thumb-columns:${Math.max(3, Math.ceil(media.length / 2))}; --thumb-rows:${Math.min(4, Math.max(2, Math.ceil(media.length / 3)))};">
                ${media
                  .map(function (src, mediaIndex) {
                    return `
                      <button class="modal__thumb ${mediaIndex === 0 ? "is-active" : ""}" type="button" data-thumb-index="${mediaIndex}" aria-label="Show project media ${mediaIndex + 1}">
                        ${renderMediaMarkup(src, `${project.title} gallery item ${mediaIndex + 1}`, false)}
                      </button>
                    `;
                  })
                  .join("")}
              </div>
            </div>
            <button class="btn icon-btn modal__thumb-nav" type="button" data-thumb-next aria-label="Scroll next media">→</button>
          </div>
        </div>
        <div class="modal__content">
          <button class="btn icon-btn modal__close" type="button" data-modal-close aria-label="Close project modal">✕</button>

          <div class="modal__head">
            <span class="eyebrow">${escapeHtml(String(project.year))} · ${escapeHtml(project.role)}</span>
            <h2 class="modal__title">${escapeHtml(project.title)}</h2>
            <div class="project-card__tags">
              ${project.highlighted ? '<span class="pill pill-accent">Highlighted</span>' : ""}
              ${(project.tags.teamType || [])
                .map(function (value) {
                  return `<span class="${getTagPillClass(value, "teamType")}">${escapeHtml(prettyTag(value))}</span>`;
                })
                .join("")}
            </div>
            <p class="modal__summary">${escapeHtml(project.summary)}</p>
          </div>

          ${buildTagGroup("Discipline", project.tags.discipline)}
          ${buildTagGroup("Playability", project.tags.playability)}
          ${buildTagGroup("Genre / Style", project.tags.genreStyle)}
          ${buildTagGroup("Tools / Engines", project.tags.toolsEngines)}
          ${buildTagGroup("Special Flags", project.tags.specialFlags)}

          <section class="modal__section">
            <h3>Responsibilities / Contributions</h3>
            <ul>
              ${(project.responsibilities || [])
                .map(function (item) {
                  return `<li>${escapeHtml(item)}</li>`;
                })
                .join("")}
            </ul>
          </section>

          ${project.notes ? `<section class="modal__section"><h3>Notes</h3><p class="modal__summary">${escapeHtml(project.notes)}</p></section>` : ""}

          <div class="modal__links">
            ${project.links && project.links.itch ? `<a class="btn btn-primary" href="${escapeHtml(project.links.itch)}" target="_blank" rel="noreferrer">View itch.io</a>` : ""}
            ${project.links && project.links.external ? `<a class="btn btn-outline" href="${escapeHtml(project.links.external)}" target="_blank" rel="noreferrer">Open link</a>` : ""}
          </div>

          <div class="modal__nav">
            <button class="btn btn-soft" type="button" data-modal-prev>← Previous</button>
            <button class="btn btn-soft" type="button" data-modal-next>Next →</button>
          </div>
        </div>
      `;

      setFeaturedMedia(project, media);

      const thumbViewport = $("[data-thumb-viewport]", dialog);
      const thumbPrev = $("[data-thumb-prev]", dialog);
      const thumbNext = $("[data-thumb-next]", dialog);
      const contentPane = $(".modal__content", dialog);

      if (thumbViewport) {
        thumbViewport.scrollLeft = 0;
        thumbViewport.addEventListener("scroll", updateThumbNav);
      }

      if (contentPane) {
        contentPane.scrollTop = 0;
      }
      dialog.scrollTop = 0;

      $all("[data-thumb-index]", dialog).forEach(function (thumbButton) {
        thumbButton.addEventListener("click", function () {
          currentMediaIndex = Number(thumbButton.getAttribute("data-thumb-index")) || 0;
          setFeaturedMedia(project, media);
        });
      });

      function scrollThumbs(direction) {
        if (!thumbViewport) {
          return;
        }
        const thumbsTrack = $("[data-modal-thumbs]", dialog);
        const useDesktopGrid = thumbsTrack && thumbsTrack.classList.contains("modal__thumbs--desktop-grid") && window.innerWidth > 1150;
        const firstThumb = $(".modal__thumb", dialog);
        const singleThumbStep = firstThumb ? firstThumb.getBoundingClientRect().width + 12 : 180;
        const pageStep = useDesktopGrid ? Math.max(thumbViewport.clientWidth * 0.92, singleThumbStep * 3) : Math.max(singleThumbStep * 2.4, thumbViewport.clientWidth * 0.72);
        thumbViewport.scrollBy({ left: pageStep * direction, behavior: "smooth" });
      }

      if (thumbPrev) {
        thumbPrev.addEventListener("click", function () {
          scrollThumbs(-1);
        });
      }

      if (thumbNext) {
        thumbNext.addEventListener("click", function () {
          scrollThumbs(1);
        });
      }

      updateThumbNav();

      $("[data-modal-close]", dialog).addEventListener("click", close);
      $("[data-modal-prev]", dialog).addEventListener("click", function () {
        render(currentIndex - 1);
      });
      $("[data-modal-next]", dialog).addEventListener("click", function () {
        render(currentIndex + 1);
      });
    }

    function open(projectId, activeList) {
      if (Array.isArray(activeList) && activeList.length) {
        orderedProjects = activeList.slice();
      }
      const foundIndex = orderedProjects.findIndex(project => project.id === projectId);
      const wasOpen = modal.classList.contains("is-open");
      render(foundIndex >= 0 ? foundIndex : 0);
      modal.classList.add("is-open");
      if (!wasOpen) {
        lockBodyScroll();
      }
      modal.setAttribute("aria-hidden", "false");
    }

    function close() {
      if (!modal.classList.contains("is-open")) {
        return;
      }
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      unlockBodyScroll();
      syncBodyScrollLock();
    }

    modal.addEventListener("wheel", function (event) {
      if (!modal.classList.contains("is-open")) {
        return;
      }

      const contentPane = $(".modal__content", dialog);
      if (!contentPane) {
        event.preventDefault();
        return;
      }

      const insideThumbs = !!event.target.closest("[data-thumb-viewport]");
      const insideContent = !!event.target.closest(".modal__content");

      if (insideThumbs) {
        return;
      }

      const canScrollContent = contentPane.scrollHeight > contentPane.clientHeight + 1;

      if (insideContent) {
        trapWheelWithin(contentPane, event);
        return;
      }

      if (!canScrollContent) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      contentPane.scrollTop += event.deltaY;
    }, { passive: false });

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        close();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (!modal.classList.contains("is-open")) {
        return;
      }
      if (event.key === "Escape") {
        close();
      }
      if (event.key === "ArrowLeft") {
        render(currentIndex - 1);
      }
      if (event.key === "ArrowRight") {
        render(currentIndex + 1);
      }
    });

    return { open: open, close: close };
  }

  /* ==============================
     7) FILTER PANEL + PROJECT CARD UI
     ============================== */

  function createTagPills(project) {
    const selectedTags = [];

    function pushTags(groupId, limit, options) {
      const values = ((project.tags && project.tags[groupId]) || []).slice(0, limit);
      values.forEach(function (value) {
        selectedTags.push({
          value: value,
          groupId: groupId,
          className: getTagPillClass(value, groupId)
        });
      });
    }

    if (project.highlighted) {
      selectedTags.push({ value: "highlighted", groupId: "specialFlags", className: "pill pill-accent" });
    }

    pushTags("teamType", 1);
    pushTags("discipline", 2);
    pushTags("genreStyle", 1);

    const extraFlag = ((project.tags && project.tags.specialFlags) || []).find(function (value) {
      return value !== "highlighted";
    });
    if (extraFlag) {
      selectedTags.push({ value: extraFlag, groupId: "specialFlags", className: getTagPillClass(extraFlag, "specialFlags") });
    }

    return selectedTags
      .slice(0, 6)
      .map(function (item) {
        return `<span class="${item.className}">${escapeHtml(prettyTag(item.value))}</span>`;
      })
      .join("");
  }

  function createProjectCard(project) {
    const previewImagePath = previewImage(project.media && project.media[0]);

    return `
      <article class="project-card card" data-project-card="${escapeHtml(project.id)}" data-open-project="${escapeHtml(project.id)}" tabindex="0" aria-label="Open ${escapeHtml(project.title)} details">
        <div class="project-card__media">
          <img src="${escapeHtml(previewImagePath)}" alt="${escapeHtml(project.title)} preview" loading="lazy" decoding="async" />
        </div>
        <div class="project-card__body">
          <div class="project-card__top">
            <div>
              <p class="project-card__meta">${escapeHtml(String(project.year))} · ${escapeHtml(project.role)}</p>
              <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
            </div>
          </div>
          <div class="project-card__tags">${createTagPills(project)}</div>
          <p class="project-card__summary">${escapeHtml(project.shortSummary)}</p>
          <p class="project-card__tools">${escapeHtml(project.toolsLine || "")}</p>
          <div class="project-card__actions">
            <button class="btn btn-primary" type="button" data-open-project="${escapeHtml(project.id)}">Details</button>
            ${project.links && project.links.itch ? `<a class="btn btn-soft" href="${escapeHtml(project.links.itch)}" target="_blank" rel="noreferrer">itch.io</a>` : ""}
            ${project.links && project.links.external ? `<a class="btn btn-soft" href="${escapeHtml(project.links.external)}" target="_blank" rel="noreferrer">Link</a>` : ""}
          </div>
        </div>
      </article>
    `;
  }

  function syncFilterGroupSelectionState(container, state) {
    filterGroups.forEach(function (group) {
      const groupEl = $(`[data-group="${group.id}"]`, container);
      const hasSelection = !!((state.selected[group.id] || []).length);
      if (groupEl) {
        groupEl.classList.toggle("has-selection", hasSelection);
      }
    });
  }

  function renderFiltersPanel(container, state, onChange, options) {
    if (!container) {
      return;
    }

    const startOpenCount = options && options.startOpenCount ? options.startOpenCount : 2;
    const storageKey = options && options.storageKey ? options.storageKey : "";

    if (!state.openGroups) {
      state.openGroups = createDefaultOpenGroups(startOpenCount);
    }

    container.innerHTML = `
      <div class="filter-chips filter-chips--top">
        <button class="btn btn-soft filter-action-btn" type="button" data-filter-clear>Clear filters</button>
        <button class="btn btn-soft filter-action-btn" type="button" data-filter-highlighted>Only highlighted</button>
        <button class="btn btn-soft filter-action-btn" type="button" data-filter-toggle-all aria-expanded="false">Expand all filters</button>
      </div>
      ${filterGroups
        .map(function (group, index) {
          const isOpen = typeof state.openGroups[group.id] === "boolean" ? state.openGroups[group.id] : index < startOpenCount;
          const hasActiveSelection = !!((state.selected[group.id] || []).length);
          return `
            <div class="filter-group ${isOpen ? "" : "is-collapsed"} ${hasActiveSelection ? "has-active-selection" : ""}" data-group="${group.id}">
              <button class="filter-group__button" type="button" data-group-toggle="${group.id}" aria-expanded="${isOpen ? "true" : "false"}">
                <span>${group.label}</span>
                <span class="filter-group__chevron">▾</span>
              </button>
              <div class="filter-group__body">
                <div class="filter-group__body-inner">
                  ${group.options
                    .map(function (option) {
                      const value = option[0];
                      const label = option[1];
                      const checked = (state.selected[group.id] || []).includes(value) ? "checked" : "";
                      return `
                        <label class="filter-option">
                          <input type="checkbox" value="${value}" data-filter-group="${group.id}" ${checked} />
                          <span>${label}</span>
                        </label>
                      `;
                    })
                    .join("")}
                </div>
              </div>
            </div>
          `;
        })
        .join("")}
    `;

    const toggleAllButton = $("[data-filter-toggle-all]", container);

    function updateToggleAllButton() {
      if (!toggleAllButton) {
        return;
      }

      const allGroupsOpen = filterGroups.every(function (group) {
        return !!state.openGroups[group.id];
      });

      toggleAllButton.textContent = allGroupsOpen ? "Collapse all filters" : "Expand all filters";
      toggleAllButton.setAttribute("aria-expanded", String(allGroupsOpen));
    }

    updateToggleAllButton();

    $all("[data-group-toggle]", container).forEach(function (button) {
      button.addEventListener("click", function () {
        const group = button.closest(".filter-group");
        const groupId = button.getAttribute("data-group-toggle") || "";
        const isExpanded = button.getAttribute("aria-expanded") === "true";
        const willExpand = !isExpanded;

        button.setAttribute("aria-expanded", String(willExpand));

        if (group) {
          group.classList.toggle("is-collapsed", !willExpand);
        }

        if (groupId) {
          state.openGroups[groupId] = willExpand;
          persistState(storageKey, state);
        }

        updateToggleAllButton();
      });
    });

    if (toggleAllButton) {
      toggleAllButton.addEventListener("click", function () {
        const allGroupsOpen = filterGroups.every(function (group) {
          return !!state.openGroups[group.id];
        });
        const shouldOpenAll = !allGroupsOpen;

        filterGroups.forEach(function (group) {
          state.openGroups[group.id] = shouldOpenAll;

          const groupEl = $(`[data-group="${group.id}"]`, container);
          const groupButton = $(`[data-group-toggle="${group.id}"]`, container);

          if (groupEl) {
            groupEl.classList.toggle("is-collapsed", !shouldOpenAll);
          }

          if (groupButton) {
            groupButton.setAttribute("aria-expanded", String(shouldOpenAll));
          }
        });

        persistState(storageKey, state);
        updateToggleAllButton();
      });
    }

    $all("input[data-filter-group]", container).forEach(function (input) {
      input.addEventListener("change", function () {
        const groupId = input.getAttribute("data-filter-group");
        state.selected[groupId] = $all(`input[data-filter-group="${groupId}"]:checked`, container).map(function (checkedInput) {
          return checkedInput.value;
        });

        const group = input.closest(".filter-group");
        if (group) {
          group.classList.toggle("has-active-selection", !!state.selected[groupId].length);
        }

        persistState(storageKey, state);
        onChange();
      });
    });

    $("[data-filter-clear]", container).addEventListener("click", function () {
      Object.keys(state.selected).forEach(function (groupId) {
        state.selected[groupId] = [];
      });

      $all('input[data-filter-group]', container).forEach(function (input) {
        input.checked = false;
      });

      $all('.filter-group', container).forEach(function(group) {
        group.classList.remove('has-active-selection');
      });

      persistState(storageKey, state);
      onChange();
    });

    $("[data-filter-highlighted]", container).addEventListener("click", function () {
      Object.keys(state.selected).forEach(function (groupId) {
        state.selected[groupId] = [];
      });

      $all('input[data-filter-group]', container).forEach(function (input) {
        input.checked = false;
      });

      state.selected.specialFlags = ["highlighted"];

      const highlightedInput = $('input[data-filter-group="specialFlags"][value="highlighted"]', container);
      if (highlightedInput) {
        highlightedInput.checked = true;
      }

      $all('.filter-group', container).forEach(function(group) {
        const groupId = group.getAttribute('data-group') || '';
        group.classList.toggle('has-active-selection', !!((state.selected[groupId] || []).length));
      });

      persistState(storageKey, state);
      onChange();
    });
  }

  function bindProjectCardEvents(container, modalApi, visibleProjects) {
    if (!container) {
      return;
    }

    // Main click support: clicking the card background opens the project modal.
    $all("[data-project-card]", container).forEach(function (card) {
      const projectId = card.getAttribute("data-project-card");

      card.addEventListener("click", function (event) {
        if (isInteractiveClickTarget(event.target)) {
          return;
        }
        modalApi.open(projectId, visibleProjects);
      });

      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          modalApi.open(projectId, visibleProjects);
        }
      });
    });

    // Generic support for any element that declares a project id, including hero cards.
    $all("[data-open-project]", container).forEach(function (element) {
      if (element.hasAttribute("data-project-card")) {
        return;
      }

      const projectId = element.getAttribute("data-open-project");

      element.addEventListener("click", function (event) {
        event.stopPropagation();
        modalApi.open(projectId, visibleProjects);
      });

      if (element.matches("article, div")) {
        element.addEventListener("keydown", function (event) {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            modalApi.open(projectId, visibleProjects);
          }
        });
      }
    });
  }

  /* ==============================
     8) HOMEPAGE SETUP
     ============================== */

  function initHomePage(modalApi) {
    const gridEl = $("[data-project-grid]");
    const filtersEl = $("[data-filters-panel]");
    const countEl = $("[data-results-count]");
    const searchInput = $("[data-project-search]");
    const mobileFilterToggles = $all("[data-mobile-filter-toggle]");

    if (!gridEl || !filtersEl || !countEl) {
      return;
    }

    const storageKey = "hristo-portfolio-home-state-v3";
    const state = getDefaultState(true, 0, storageKey);

    function render(resetPanel) {
      persistState(storageKey, state);
      const visibleProjects = sortProjects(projects.filter(project => matchesFilters(project, state)), "newest");

      countEl.textContent = visibleProjects.length + (visibleProjects.length === 1 ? " project" : " projects");
      gridEl.innerHTML = visibleProjects.length
        ? visibleProjects.map(createProjectCard).join("")
        : '<div class="empty-state">No projects match this homepage filter combination yet.</div>';

      if (resetPanel) {
        renderFiltersPanel(filtersEl, state, render, { startOpenCount: 0, storageKey: storageKey });
      }

      bindProjectCardEvents(gridEl, modalApi, visibleProjects);
    }

    if (searchInput) {
      searchInput.value = state.search;
    }

    renderFiltersPanel(filtersEl, state, render, { startOpenCount: 0, storageKey: storageKey });
    render();

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        state.search = searchInput.value;
        render();
      });
    }

    // v1.1: mobile filter open/close is handled once in js/overrides.js.
    // Keeping another click listener here caused the button to open, scroll,
    // then immediately close again at tablet/mobile widths.
    mobileFilterToggles.forEach(function (mobileFilterToggle) {
      mobileFilterToggle.setAttribute("aria-expanded", filtersEl.classList.contains("is-open") ? "true" : "false");
    });
  }

  /* ==============================
     9) ARCHIVE PAGE SETUP
     ============================== */

  function initProjectsPage(modalApi) {
    const gridEl = $("[data-project-grid]");
    const filtersEl = $("[data-filters-panel]");
    const countEl = $("[data-results-count]");
    const searchInput = $("[data-project-search]");
    const sortSelect = $("[data-project-sort]");
    const mobileFilterToggles = $all("[data-mobile-filter-toggle]");

    if (!gridEl || !filtersEl || !countEl || !sortSelect) {
      return;
    }

    const storageKey = "hristo-portfolio-projects-state-v3";
    const state = getDefaultState(false, 0, storageKey);

    function render(resetPanel) {
      persistState(storageKey, state);
      const visibleProjects = sortProjects(projects.filter(project => matchesFilters(project, state)), state.sort);

      countEl.textContent = visibleProjects.length + (visibleProjects.length === 1 ? " project" : " projects");
      gridEl.innerHTML = visibleProjects.length
        ? visibleProjects.map(createProjectCard).join("")
        : '<div class="empty-state">No projects match this archive filter combination yet.</div>';

      if (resetPanel) {
        renderFiltersPanel(filtersEl, state, render, { startOpenCount: 0, storageKey: storageKey });
      }

      bindProjectCardEvents(gridEl, modalApi, visibleProjects);
    }

    if (searchInput) {
      searchInput.value = state.search;
    }
    sortSelect.value = state.sort;

    renderFiltersPanel(filtersEl, state, render, { startOpenCount: 0, storageKey: storageKey });
    render();

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        state.search = searchInput.value;
        render();
      });
    }

    sortSelect.addEventListener("change", function () {
      state.sort = sortSelect.value;
      render();
    });

    // v1.1: mobile filter open/close is handled once in js/overrides.js.
    // Keeping another click listener here caused the button to open, scroll,
    // then immediately close again at tablet/mobile widths.
    mobileFilterToggles.forEach(function (mobileFilterToggle) {
      mobileFilterToggle.setAttribute("aria-expanded", filtersEl.classList.contains("is-open") ? "true" : "false");
    });
  }

  /* ==============================
     10) BOOTSTRAP
     ============================== */

  initSiteShell();
  const modalApi = createProjectModal();
  initHeroSlider(modalApi);
  initHomePage(modalApi);
  initProjectsPage(modalApi);
})();
