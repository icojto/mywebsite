(function(){
  const LANG_KEY = 'hristo-portfolio-language-v1';
  const getLang = () => localStorage.getItem(LANG_KEY) || 'en';
  const setLang = (lang) => localStorage.setItem(LANG_KEY, lang);

  const ui = {
    en: {
      navHome: 'Home', navHighlighted: 'Highlighted', navSummary: 'Summary', navContact: 'Contact', navProjects: 'Projects',
      heroEyebrow: 'Game-focused portfolio for design, level design, systems, and coordination roles',
      heroSubtitle: 'Game Developer | Game Designer | Project Coordination',
      heroIntro: 'I am a versatile game developer and designer focused on gameplay systems, level design, worldbuilding, and project coordination. The homepage now starts with one combined hero surface, then flows directly into highlighted projects and a filterable recruiter-friendly portfolio section.',
      heroIntroMobile: 'Versatile game developer and designer focused on gameplay systems, level design, worldbuilding, and project coordination.',
      highlightedEyebrow: 'Highlighted selection', highlightedTitle: 'Quick project preview',
      portfolioEyebrow: 'Homepage portfolio', portfolioTitle: 'Highlighted projects with visible grouped filters',
      portfolioCopy: 'Browse featured projects first, then open filters to narrow by discipline, tools, team type, and playability. Search also works by project name or keyword.',
      summaryEyebrow: 'Professional summary', summaryTitle: 'A cleaner recruiter-friendly overview',
      archiveEyebrow: 'Full projects archive', archiveTitle: 'Newest first, reusable cards, one shared modal', archiveCopy: 'This page is the complete archive view. Use grouped filters, search, and one shared project popup while keeping the archive sorted by newest first.',
      openFilters: 'Open filters', closeFilters: 'Close filters', clearFilters: 'Clear filters', onlyHighlighted: 'Only highlighted', expandAllFilters: 'Expand all filters', collapseAllFilters: 'Collapse all filters', searchPlaceholder: 'Search project name or keyword', seeFullArchive: 'See full archive',
      newestFirst: 'Newest first', oldestFirst: 'Oldest first', titleAZ: 'Title A–Z',
      details: 'Details', link: 'Link', itch: 'itch.io',
      modalDiscipline: 'Discipline', modalPlayability: 'Playability', modalGenre: 'Genre / Style', modalTools: 'Tools / Engines', modalFlags: 'Special Flags', modalResponsibilities: 'Responsibilities / Contributions', modalNotes: 'Notes',
      footerPortfolioPage: 'Portfolio Page', footerDownloadCv: 'Download CV', footerCvLevel: 'CV Level Designer', footerCvPm: 'CV Project Manager',
      overviewTitle: 'Overview', toolsTitle: 'Software & Tools', strengthsTitle: 'Strengths',
      overviewItems: ['Game design graduate with practical solo and team project experience','Works across design, implementation, and playable prototyping','Strong fit for game design, level design, and hybrid production roles','Comfortable combining creative direction with structured execution'],
      strengthsItems: ['Level flow, pacing, and player guidance','Systems prototyping and gameplay iteration','Narrative support and worldbuilding','Project structuring, communication, and coordination'],
      langCurrent: 'EN', langEN: 'English', langBG: 'Български'
    },
    bg: {
      navHome: 'Начало', navHighlighted: 'Подбрани', navSummary: 'Обобщение', navContact: 'Контакт', navProjects: 'Проекти',
      heroEyebrow: 'Портфолио с фокус върху дизайн, левъл дизайн, системи и координационни роли',
      heroSubtitle: 'Game Developer | Game Designer | Project Coordination',
      heroIntro: 'Аз съм гъвкав game developer и designer с фокус върху gameplay системи, level design, worldbuilding и project coordination. Началната страница започва с комбиниран hero банер, след което преминава към подбрани проекти и филтруемо recruiter-friendly портфолио.',
      heroIntroMobile: 'Game developer и designer с фокус върху gameplay системи, level design, worldbuilding и project coordination.',
      highlightedEyebrow: 'Подбрана селекция', highlightedTitle: 'Бърз преглед на проекти',
      portfolioEyebrow: 'Портфолио на началната страница', portfolioTitle: 'Подбрани проекти с видими групирани филтри',
      portfolioCopy: 'Разгледай първо подбраните проекти, после отвори филтрите, за да стесниш по дисциплина, инструменти, тип екип и състояние. Търсенето работи и по име на проект или ключова дума.',
      summaryEyebrow: 'Професионално обобщение', summaryTitle: 'По-чист recruiter-friendly преглед',
      archiveEyebrow: 'Пълен архив с проекти', archiveTitle: 'Най-новите първо, преизползваеми карти и един общ popup', archiveCopy: 'Тази страница е пълният архив. Използвай групирани филтри, търсене и общ popup за проектите, докато архивът остава сортиран по най-новите първо.',
      openFilters: 'Отвори филтри', closeFilters: 'Затвори филтри', clearFilters: 'Изчисти филтрите', onlyHighlighted: 'Само подбрани', expandAllFilters: 'Отвори всички филтри', collapseAllFilters: 'Затвори всички филтри', searchPlaceholder: 'Търси по име на проект или ключова дума', seeFullArchive: 'Виж пълния архив',
      newestFirst: 'Най-новите първо', oldestFirst: 'Най-старите първо', titleAZ: 'Заглавие А–Я',
      details: 'Детайли', link: 'Линк', itch: 'itch.io',
      modalDiscipline: 'Дисциплина', modalPlayability: 'Състояние', modalGenre: 'Жанр / стил', modalTools: 'Инструменти / енджини', modalFlags: 'Специални флагове', modalResponsibilities: 'Отговорности / принос', modalNotes: 'Бележки',
      footerPortfolioPage: 'Страница с портфолио', footerDownloadCv: 'Свали CV', footerCvLevel: 'CV Level Designer', footerCvPm: 'CV Project Manager',
      overviewTitle: 'Обзор', toolsTitle: 'Софтуер и инструменти', strengthsTitle: 'Силни страни',
      overviewItems: ['Завършил game design с практически опит в солови и екипни проекти','Работи между дизайн, имплементация и игрални прототипи','Силен профил за game design, level design и хибридни production роли','Съчетава креативна посока със структурирано изпълнение'],
      strengthsItems: ['Level flow, pacing и player guidance','Прототипиране на системи и gameplay iteration','Narrative support и worldbuilding','Структуриране на проекти, комуникация и координация'],
      langCurrent: 'BG', langEN: 'English', langBG: 'Български'
    }
  };

  const tagBg = {
    'game-design':'Гейм дизайн','level-design':'Левъл дизайн','systems-design':'Системен дизайн','engineering':'Програмиране','art':'Арт','audio':'Аудио','narrative':'Наратив','ui-ux':'UI/UX','project-coordination':'Проектна координация','solo':'Соло','team':'Екип','playable':'Игруем','visual-showcase':'Визуална демонстрация','prototype':'Прототип','in-development':'В разработка','horror':'Хорър','point-and-click':'Point-and-click','puzzle':'Пъзел','first-person':'Първо лице','endless-runner':'Endless Runner','space-shooter':'Космически шутър','ar':'AR','card-game':'Картова игра','kids-family':'За деца / семейно','ocean-awareness':'Осъзнатост за океана','procedural':'Процедурно','educational':'Образователно','pc':'PC','mobile':'Мобилно','figma-prototype':'Figma прототип','visual-only':'Само визуално','highlighted':'Подбрано','leadership':'Лидерство','worldbuilding':'Светоизграждане','systems-heavy':'Системно насочен'
  };
  const groupBg = { discipline:'Дисциплина', teamType:'Тип екип', playability:'Състояние', genreStyle:'Жанр / стил', platformBuild:'Платформа / билд', toolsEngines:'Инструменти / енджини', specialFlags:'Специални флагове' };

  const projectsBg = {
    'current-endless-runner': { title:'Текущ проект за Endless Runner', role:'Solo Developer / Game Designer', shortSummary:'Мобилен endless runner с фокус върху obstacle pacing, progression flow и scalable level variation.', summary:'Текущ солов проект, вдъхновен от endless runner design principles, с фокус върху procedural terrain, obstacle logic и mobile performance. Текущият билд съдържа core running loop, obstacle spawning и ранни UI системи, докато workflow-ът за изграждане на нивата още се подобрява.', responsibilities:['Дизайн и имплементация на procedural terrain generation','Изграждане на customizable obstacle spawning и level-building logic','Оптимизация на core systems за mobile performance','Разработка на early UI и gameplay flow','Планиране на progression systems като achievements, XP, battle pass и monetization'], notes:'Медията все още се събира. Засега се използва placeholder.' },
    'abysmal-depths': { title:'Abysmal Depths — Pixel Horror Game', role:'Game Designer / World Builder / Audio', shortSummary:'Point-and-click pixel horror проект с фокус върху game design, атмосфера, worldbuilding и SFX.', summary:'Екипен pixel horror проект, в който помогнах за direction-а, tone-а и player experience-а. Основният ми принос е в game design, worldbuilding и audio.', responsibilities:['Принос към общия game design и horror experience','Оформяне на worldbuilding, atmosphere и player-facing structure','Създаване на SFX за tension и mood','Работа с екипа по design и presentation'] },
    'first-person-wireframe': { title:'First Person Wireframe and Systems', role:'Engineer / Game Designer', shortSummary:'Ранен Unity C# проект с фокус върху first-person mechanics и core gameplay systems.', summary:'Солов прототип, създаден като ранен Unity C# learning project, фокусиран върху first-person movement и свързани gameplay systems като XP, inventory и feedback loops.', responsibilities:['Изграждане на first-person movement и interaction systems','Имплементация на XP progression и inventory functionality','Добавяне на gameplay feedback и supporting SFX','Комбиниране на engineering работа с early gameplay/system design'] },
    'project-nebula': { title:'Project Nebula — Space Shooter', role:'Game Designer / Audio', shortSummary:'Space shooter проект с фокус върху combat feel, pacing и player feedback.', summary:'Екипен space shooter проект, в който се фокусирах върху gameplay design и audio support. Проектът изследва arcade-style combat, feedback и moment-to-moment pacing.', responsibilities:['Подкрепа на combat feel и gameplay pacing','Помощ в оформянето на player loop и feedback-а','Създаване на audio/SFX support'] },
    'the-conflict': { title:'The Conflict — AR Card Game', role:'Game Designer', shortSummary:'AR card game концепт, в който physical cards разкриват 3D content чрез mobile scanning.', summary:'Прототип, изследващ physical-to-digital card game концепция, комбиниращ physical cards с AR presentation. Основният фокус беше AR interaction и overall concept direction.', responsibilities:['Помощ в дизайна на core card game concept','Подкрепа на interaction-а между physical cards и AR content','Фокус върху overall experience и concept direction'] },
    'knutselfrutsel': { title:'Knutselfrutsel — Animation Choice Game', role:'Story Writing / Worldbuilding / Audio', shortSummary:'Interactive kids project, изграден около animated storytelling, friendship и player choices.', summary:'Екипен проект за по-млада аудитория, в който играчите гледат animated story и правят choices, които влияят на преживяването. Моят принос е в writing, worldbuilding и audio.', responsibilities:['Писане на story и worldbuilding elements','Подпомагане на interaction flow чрез player choices','Подкрепа на tone-а на проекта чрез audio work'] },
    'obituary': { title:'Obituary — Horror Solo Game', role:'Game Developer', shortSummary:'Story-driven first-person horror игра, фокусирана върху mystery, exploration и atmosphere.', summary:'Солов horror проект, в който се занимавах с design, engineering, audio и narrative direction. Играта проследява мъж, който разкрива мистерията около смъртта на жена си чрез exploration, simple quest progression, dialogue и atmosphere-driven gameplay.', responsibilities:['Дизайн и изграждане на пълната игра като solo developer','Създаване на first-person exploration flow и quest progression','Изграждане на атмосфера чрез level design, audio и pacing','Написване и имплементация на narrative framing'] },
    'half-life-2-city': { title:'Half Life 2 City — Procedural Art Demo', role:'Engineer / Artist', shortSummary:'Procedural city art demo с editable building, road, lighting и color controls в Unity editor.', summary:'Солов procedural art demo, вдъхновен от Half-Life urban aesthetic. Проектът се фокусира върху grid-based environment tool с adjustable parameters като building type, size, road type, lighting и color variation.', responsibilities:['Изграждане на grid-based procedural city/building system','Добавяне на editable controls за размер, building type, roads и lighting','Създаване на custom textures/material support в Adobe Designer','Комбиниране на engineering и visual design в един environment tool'] },
    'ocean-frenzy': { title:'Ocean Frenzy — Ocean Awareness Puzzle Prototype', role:'Game Designer', shortSummary:'Educational ocean-awareness puzzle prototype, в който играчът изследва real seas, collects facts и progresses through quests and events.', summary:'Солов educational prototype, изграден около ocean awareness и exploration. Играчът е diver, който посещава real-world seas, събира fact points, изпълнява quests, участва в events, печели rewards и развива персонажа.', responsibilities:['Дизайн на core educational concept и exploration loop','Структуриране на quests, rewards, events и progression ideas','Изграждане на prototype flow във Figma със силен systems focus','Комбиниране на awareness content с player-facing progression design'] },
    'game-developer-quiz': { title:'Game Developer Quiz', role:'Game Developer', shortSummary:'Educational thesis project, създаден да обучава разработчици по driving game design, optimization и monetization.', summary:'Солов thesis project, свързан с Azerion Game Distribution, създаден като proof-of-concept training tool за developers. Фокусира се основно върху driving games и използва patterns от много заглавия.', responsibilities:['Дизайн и разработка на quiz/training application','Създаване на съдържание за driving game design и monetization','Събиране на reference patterns от голям брой игри','Рамкиране на проекта като proof-of-concept educational tool'] },
    'metahuman-airport-navigator': { title:'Metahuman Airport Navigator', role:'Engineer / Project Leader', shortSummary:'Interactive airport assistant prototype, използващ Unreal Engine, Metahuman и NVIDIA Audio2Face.', summary:'University client project, създаден за Schiphol Airport и Dutch border police като airport assistance concept. Асистентът се свързва към web/cloud system и позволява на users да задават airport-related questions или да използват touchscreen interface.', responsibilities:['Координация на planning, communication и team structure','Управление на emails, task distribution и external collaboration','Имплементация на Audio2Face-to-Unreal-to-Metahuman setup','Работа с external coding students за system connection'] },
    'terrain-wall-materials': { title:'Terrain & Wall Materials', role:'Artist', shortSummary:'Material studies for terrain and wall surfaces, created for environment support work.', summary:'Солов material study, фокусиран върху reusable terrain и wall textures за environment work. Целта е surface variation, readability и material quality.', responsibilities:['Създаване на terrain и wall material studies','Изследване на visual variety и support assets за environment-и','Фокус върху material clarity и reusability'] },
    'building-stylesheet': { title:'Building Stylesheet', role:'Artist', shortSummary:'Procedural brick building stylesheet с color-adjustable variation от една texture setup логика.', summary:'Солов art study, фокусиран върху building stylesheet, който да поддържа multiple visual outcomes, докато остава ефективен.', responsibilities:['Изграждане на reusable building stylesheet','Създаване на color-adjustable brick variation','Фокус върху efficient visual reuse чрез material design'] },
    'kitchen-scene': { title:'Kitchen Scene', role:'Artist', shortSummary:'Fully textured kitchen scene с individually painted assets и materials.', summary:'Солов art project, фокусиран върху texturing на пълна kitchen scene и individual objects.', responsibilities:['Texturing на цяла kitchen scene','Painting на individual props и materials','Фокус върху cohesion между environment assets'] },
    'textured-models': { title:'Textured Models', role:'Artist', shortSummary:'Collection of individually textured 3D models с фокус върху surface detail и material readability.', summary:'Солов asset texturing study за material variety и surface polish върху individual models.', responsibilities:['Painting на multiple individual 3D models','Изследване на texture clarity и material variation','Изграждане на visual polish чрез asset presentation'] },
    'mafia-revenge': { title:'Mafia Revenge — Visual Story', role:'Writer / Narrative Designer', shortSummary:'Choice-based mafia revenge story, представена чрез writing, visuals и interactive narrative flow.', summary:'Narrative project, изграден около 1980s mafia revenge story, комбиниращ written storytelling, visual support и interactive choices.', responsibilities:['Написване на story и core narrative structure','Дизайн на branching/choice-based progression','Определяне на tone-а и dramatic direction'] }
  };

  const englishTitleToId = Object.fromEntries(Object.entries(projectsBg).map(([id, value]) => [value.title.replace(/\s+/g,' ').trim(), id]));
  const cardProjectMap = () => Object.fromEntries(Array.from(document.querySelectorAll('[data-project-card]')).map(card => [card.getAttribute('data-project-card'), card]));
  const t = (key) => (ui[getLang()] || ui.en)[key] || ui.en[key] || key;
  const currentPack = () => ui[getLang()] || ui.en;

  function ensureLanguageMenu(){
    const navLinks = document.querySelector('.site-nav__links');
    if(!navLinks || navLinks.querySelector('[data-lang-menu]')) return;
    const menu = document.createElement('div');
    menu.className = 'lang-menu';
    menu.setAttribute('data-lang-menu','');
    menu.innerHTML = '<button class="site-nav__lang" type="button" data-lang-toggle aria-expanded="false"></button><div class="lang-menu__panel" data-lang-panel hidden><button class="lang-menu__option" type="button" data-lang-option="en"></button><button class="lang-menu__option" type="button" data-lang-option="bg"></button></div>';
    navLinks.appendChild(menu);
    const toggle = menu.querySelector('[data-lang-toggle]');
    const panel = menu.querySelector('[data-lang-panel]');
    const sync = ()=>{ const pack=currentPack(); toggle.textContent=pack.langCurrent; menu.querySelector('[data-lang-option="en"]').textContent=pack.langEN; menu.querySelector('[data-lang-option="bg"]').textContent=pack.langBG; };
    sync();
    toggle.addEventListener('click', (e)=>{ e.stopPropagation(); const willOpen=panel.hasAttribute('hidden'); panel.hidden=!willOpen; toggle.setAttribute('aria-expanded', String(willOpen));});
    menu.querySelectorAll('[data-lang-option]').forEach(btn=>btn.addEventListener('click', ()=>{ setLang(btn.dataset.langOption); window.location.reload(); }));
    document.addEventListener('click', (e)=>{ if(!menu.contains(e.target)){ panel.hidden=true; toggle.setAttribute('aria-expanded','false');}});
  }

  function translateStatic(){
    const pack = currentPack();
    document.documentElement.lang = getLang()==='bg' ? 'bg' : 'en';
    const navLinks=document.querySelectorAll('.site-nav__links > a');
    if(navLinks[0]) navLinks[0].textContent=pack.navHome; if(navLinks[1]) navLinks[1].textContent=pack.navHighlighted; if(navLinks[2]) navLinks[2].textContent=pack.navSummary; if(navLinks[3]) navLinks[3].textContent=pack.navContact; if(navLinks[4]) navLinks[4].textContent=pack.navProjects;
    const heroEy=document.querySelector('.hero-banner__copy .eyebrow'); if(heroEy) heroEy.textContent=pack.heroEyebrow;
    const heroSub=document.querySelector('.hero-subtitle'); if(heroSub) heroSub.textContent=pack.heroSubtitle;
    const heroIntro=document.querySelector('.hero-intro'); if(heroIntro) heroIntro.textContent = window.innerWidth <= 640 ? pack.heroIntroMobile : pack.heroIntro;
    const hiEy=document.querySelector('.hero-highlights__head .eyebrow'); if(hiEy) hiEy.textContent=pack.highlightedEyebrow;
    const hiTitle=document.querySelector('.hero-highlights__title'); if(hiTitle) hiTitle.textContent=pack.highlightedTitle;
    const topEy=document.querySelector('#portfolio .surface-topline .eyebrow'); if(topEy) topEy.textContent=pack.portfolioEyebrow;
    const topTitle=document.querySelector('#portfolio .surface-topline .section-title'); if(topTitle) topTitle.textContent=pack.portfolioTitle;
    const topCopy=document.querySelector('#portfolio .surface-topline .section-copy'); if(topCopy) topCopy.textContent=pack.portfolioCopy;
    const summaryEy=document.querySelector('#summary .surface-topline .eyebrow'); if(summaryEy) summaryEy.textContent=pack.summaryEyebrow;
    const summaryTitle=document.querySelector('#summary .surface-topline .section-title'); if(summaryTitle) summaryTitle.textContent=pack.summaryTitle;
    const summaryCards=document.querySelectorAll('.summary-card'); if(summaryCards[0]){ const h=summaryCards[0].querySelector('h3'); const ul=summaryCards[0].querySelector('ul'); if(h) h.textContent=pack.overviewTitle; if(ul) ul.innerHTML=pack.overviewItems.map(item=>`<li>${item}</li>`).join(''); } if(summaryCards[1]){ const h=summaryCards[1].querySelector('h3'); if(h) h.textContent=pack.toolsTitle; } if(summaryCards[2]){ const h=summaryCards[2].querySelector('h3'); const ul=summaryCards[2].querySelector('ul'); if(h) h.textContent=pack.strengthsTitle; if(ul) ul.innerHTML=pack.strengthsItems.map(item=>`<li>${item}</li>`).join(''); }
    const archiveEy=document.querySelector('.archive-banner .eyebrow'); if(archiveEy) archiveEy.textContent=pack.archiveEyebrow;
    const archiveTitle=document.querySelector('.archive-banner .section-title'); if(archiveTitle) archiveTitle.textContent=pack.archiveTitle;
    const archiveCopy=document.querySelector('.archive-banner__meta'); if(archiveCopy) archiveCopy.textContent=pack.archiveCopy;
    document.querySelectorAll('[data-mobile-filter-toggle]').forEach(btn=>{ if(!btn.classList.contains('is-close')) btn.textContent=pack.openFilters;});
    document.querySelectorAll('[data-project-search]').forEach(input=>input.placeholder=pack.searchPlaceholder);
    document.querySelectorAll('a.btn.btn-outline[href="projects.html"]').forEach(a=>a.textContent=pack.seeFullArchive);
    const sort = document.querySelector('[data-project-sort]'); if(sort){ const ops=sort.querySelectorAll('option'); if(ops[0]) ops[0].textContent=pack.newestFirst; if(ops[1]) ops[1].textContent=pack.oldestFirst; if(ops[2]) ops[2].textContent=pack.titleAZ; }
    const cvToggle = document.querySelector('[data-cv-toggle]'); if(cvToggle) cvToggle.textContent = pack.footerDownloadCv;
    const cvChoices = document.querySelectorAll('[data-cv-choice]'); if(cvChoices[0]) cvChoices[0].textContent = pack.footerCvLevel; if(cvChoices[1]) cvChoices[1].textContent = pack.footerCvPm;
    const footerRole=document.querySelector('.footer-main .footer-copy'); if(footerRole) footerRole.textContent = getLang()==='bg' ? 'Game Developer | Game Designer | Project Coordination' : 'Game Developer | Game Designer | Project Coordination';
    document.querySelectorAll('.footer-link').forEach(link=>{ if(link.getAttribute('href')==='projects.html') link.textContent=pack.footerPortfolioPage; });
  }

  function translateFilters(){
    document.querySelectorAll('.filter-group').forEach(group=>{
      const id=group.getAttribute('data-group');
      const label=group.querySelector('.filter-group__button span:first-child');
      if(label && getLang()==='bg' && groupBg[id]) label.textContent=groupBg[id];
    });
    document.querySelectorAll('input[data-filter-group]').forEach(input=>{
      const span=input.closest('label')?.querySelector('span');
      if(span && getLang()==='bg' && tagBg[input.value]) span.textContent = tagBg[input.value];
    });
    document.querySelectorAll('[data-filter-clear]').forEach(btn=>btn.textContent=currentPack().clearFilters);
    document.querySelectorAll('[data-filter-highlighted]').forEach(btn=>btn.textContent=currentPack().onlyHighlighted);
    document.querySelectorAll('[data-filter-toggle-all]').forEach(btn=>{
      const allOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.textContent = allOpen ? currentPack().collapseAllFilters : currentPack().expandAllFilters;
    });
  }

  function translateProjectCards(){
    document.querySelectorAll('[data-project-card]').forEach(card=>{
      const id=card.getAttribute('data-project-card'); const bg=projectsBg[id]; if(!bg || getLang()!=='bg') return;
      const meta=card.querySelector('.project-card__meta'); if(meta){ const year=(meta.textContent.split('·')[0]||'').trim(); meta.textContent=`${year} · ${bg.role}`; }
      const title=card.querySelector('.project-card__title'); if(title) title.textContent=bg.title;
      const summary=card.querySelector('.project-card__summary'); if(summary) summary.textContent=bg.shortSummary;
      const detailsBtn=card.querySelector('[data-open-project].btn'); if(detailsBtn) detailsBtn.textContent=currentPack().details;
      card.querySelectorAll('.project-card__tags .pill').forEach(pill=>{ if(tagBg[pill.textContent.trim().toLowerCase()]) pill.textContent=tagBg[pill.textContent.trim().toLowerCase()]; });
    });
    if(getLang()!=='bg'){
      document.querySelectorAll('[data-open-project].btn.btn-primary').forEach(btn=>btn.textContent=currentPack().details);
    }
  }

  function translateHero(){
    const pack=currentPack();
    document.querySelectorAll('.hero-slider__dot').forEach((dot,i)=>{ dot.setAttribute('aria-label', i===0 ? (getLang()==='bg'?'Покажи профил':'Show profile') : (getLang()==='bg'?'Покажи слайд':'Show slide')); });
    document.querySelectorAll('.hero-slide').forEach((slide, index)=>{
      const title=slide.querySelector('.hero-slide__title'); const copy=slide.querySelector('.hero-slide__copy'); const badges=slide.querySelectorAll('.hero-slide__meta .pill');
      if(index===0){ if(copy) copy.textContent=pack.heroSubtitle.replaceAll('|','·'); if(badges[0]) badges[0].textContent = getLang()==='bg' ? 'Профил' : 'Profile'; if(badges[1]) badges[1].textContent = getLang()==='bg' ? 'Фокус' : 'Featured'; }
      else if(title){
        const map = Object.values(projectsBg).find(v=>v.title===title.textContent || v.shortSummary===copy?.textContent);
        // rely on rail/cards more than hero for BG
      }
    });
    document.querySelectorAll('.hero-highlight-card').forEach(card=>{
      const id=card.getAttribute('data-open-project'); const bg=projectsBg[id]; if(getLang()==='bg' && bg){ const title=card.querySelector('.hero-highlight-card__title'); if(title) title.textContent=bg.title; const meta=card.querySelector('.hero-highlight-card__meta'); if(meta){ const year=(meta.textContent.split('·')[0]||'').trim(); meta.textContent=`${year} · ${bg.role}`; } }
    });
  }

  function mapModalProjectId(){
    const titleEl=document.querySelector('.modal.is-open .modal__title');
    if(!titleEl) return null;
    const currentTitle=titleEl.textContent.replace(/\s+/g,' ').trim();
    if(englishTitleToId[currentTitle]) return englishTitleToId[currentTitle];
    const entry = Object.entries(projectsBg).find(([,val])=> val.title===currentTitle);
    return entry ? entry[0] : null;
  }

  function enhanceModal(){
    const modal=document.querySelector('.modal.is-open'); if(!modal) return;
    const content=modal.querySelector('.modal__content'); if(!content) return;
    if(!content.querySelector('.modal__actionbar')){
      const action=document.createElement('div');
      action.className='modal__actionbar';
      const prev=content.querySelector('[data-modal-prev]');
      const next=content.querySelector('[data-modal-next]');
      const close=content.querySelector('[data-modal-close]');
      const links=[...content.querySelectorAll('.modal__links a')];
      if(prev) action.appendChild(prev);
      if(next) action.appendChild(next);
      links.forEach(link=>action.appendChild(link));
      if(close) action.appendChild(close);
      content.prepend(action);
      const nav=content.querySelector('.modal__nav'); if(nav) nav.remove();
      const linksWrap=content.querySelector('.modal__links'); if(linksWrap) linksWrap.remove();
    }
    const id=mapModalProjectId(); const bg=projectsBg[id];
    if(getLang()==='bg' && bg){
      const title=content.querySelector('.modal__title'); if(title) title.textContent=bg.title;
      const eyebrow=content.querySelector('.modal__head .eyebrow'); if(eyebrow){ const year=(eyebrow.textContent.split('·')[0]||'').trim(); eyebrow.textContent=`${year} · ${bg.role}`; }
      const summary=content.querySelector('.modal__summary'); if(summary) summary.textContent=bg.summary;
      const sections=[...content.querySelectorAll('.modal__section h3')];
      const mapping=[currentPack().modalDiscipline,currentPack().modalPlayability,currentPack().modalGenre,currentPack().modalTools,currentPack().modalFlags,currentPack().modalResponsibilities,currentPack().modalNotes];
      sections.forEach((h,i)=>{ if(mapping[i]) h.textContent=mapping[i]; });
      const list=content.querySelector('.modal__section ul'); if(list && bg.responsibilities){ list.innerHTML=bg.responsibilities.map(item=>`<li>${item}</li>`).join(''); }
      const notesP=content.querySelectorAll('.modal__section .modal__summary'); if(notesP[notesP.length-1] && bg.notes) notesP[notesP.length-1].textContent=bg.notes;
      content.querySelectorAll('.project-card__tags .pill').forEach(pill=>{ const val=pill.textContent.trim(); if(tagBg[val.toLowerCase()]) pill.textContent=tagBg[val.toLowerCase()]; });
    }
    const prev=content.querySelector('[data-modal-prev]'); if(prev){ prev.innerHTML='←'; prev.setAttribute('aria-label', currentPack().modalPrev); }
    const next=content.querySelector('[data-modal-next]'); if(next){ next.innerHTML='→'; next.setAttribute('aria-label', currentPack().modalNext); }
  }

  function setupHeroSwipe(){
    const root=document.querySelector('[data-hero-slider]'); if(!root || root.__swipeBound) return; root.__swipeBound=true;
    let startX=0;
    const getIndex=()=>{ const dots=[...root.querySelectorAll('[data-hero-dot]')]; return dots.findIndex(d=>d.classList.contains('is-active')); };
    const activate=(idx)=>{ const dots=[...root.querySelectorAll('[data-hero-dot]')]; if(!dots.length) return; dots[(idx+dots.length)%dots.length].click(); };
    root.addEventListener('touchstart', e=>{ startX=e.touches[0].clientX; }, {passive:true});
    root.addEventListener('touchend', e=>{ const dx=e.changedTouches[0].clientX-startX; if(Math.abs(dx)>40) activate(getIndex() + (dx<0?1:-1)); });
    root.addEventListener('pointerdown', e=>{ startX=e.clientX; });
    root.addEventListener('pointerup', e=>{ const dx=e.clientX-startX; if(Math.abs(dx)>40) activate(getIndex() + (dx<0?1:-1)); });
  }

  function wrapTagBoxes(){
    document.querySelectorAll('.project-card').forEach(card=>{
      const tags=card.querySelector('.project-card__tags');
      if(tags && !tags.parentElement.classList.contains('project-card__tagbox')){
        const wrap=document.createElement('div'); wrap.className='project-card__tagbox'; tags.parentNode.insertBefore(wrap, tags); wrap.appendChild(tags);
      }
    });
  }

  function setupMobileFilters(){
    document.querySelectorAll('.filters-layout').forEach(layout=>{
      const panel=layout.querySelector('.filters-panel'); const shell=layout.querySelector('.projects-shell'); const toolbar=shell?.querySelector('.toolbar'); const btn=layout.querySelector('[data-mobile-filter-toggle]');
      if(!panel || !shell || !toolbar || !btn) return;

      if(!panel.id) panel.id='filters-panel-' + Math.random().toString(36).slice(2,8);
      btn.setAttribute('aria-controls', panel.id);

      const setFilterState=(isOpen)=>{
        panel.classList.toggle('is-open', isOpen);
        btn.classList.toggle('is-close', isOpen);
        btn.setAttribute('aria-expanded', String(isOpen));
        btn.textContent = isOpen ? currentPack().closeFilters : currentPack().openFilters;
      };

      if(!panel.__placeholder){ panel.__placeholder=document.createComment('filters-placeholder'); layout.insertBefore(panel.__placeholder, panel); }
      const sync=()=>{
        if(window.innerWidth<=980){
          if(panel.parentElement!==shell) shell.insertBefore(panel, toolbar.nextSibling);
          setFilterState(panel.classList.contains('is-open'));
        } else {
          if(panel.parentElement!==layout) layout.insertBefore(panel, panel.__placeholder.nextSibling);
          setFilterState(false);
        }
      };

      sync();
      if(!layout.__filterResizeBound){ window.addEventListener('resize', sync); layout.__filterResizeBound=true; }
      if(!btn.__mobileBound){
        btn.addEventListener('click', (event)=>{
          event.preventDefault();
          sync();
          setFilterState(!panel.classList.contains('is-open'));
        });
        btn.__mobileBound=true;
      }

      let closeBtn=panel.querySelector('[data-filter-close-override]');
      if(!closeBtn){
        const chips=panel.querySelector('.filter-chips');
        if(chips){
          closeBtn=document.createElement('button');
          closeBtn.type='button';
          closeBtn.className='btn btn-soft filter-action-btn filter-action-btn--close';
          closeBtn.setAttribute('data-filter-close-override','');
          closeBtn.addEventListener('click', ()=>{ setFilterState(false); });
          chips.appendChild(closeBtn);
        }
      }
      if(closeBtn) closeBtn.textContent=currentPack().closeFilters;
      const clear=panel.querySelector('[data-filter-clear]'); if(clear) clear.textContent=currentPack().clearFilters;
      const only=panel.querySelector('[data-filter-highlighted]'); if(only) only.textContent=currentPack().onlyHighlighted;
      const toggleAll=panel.querySelector('[data-filter-toggle-all]');
      if(toggleAll){
        const allOpen = toggleAll.getAttribute('aria-expanded') === 'true';
        toggleAll.textContent = allOpen ? currentPack().collapseAllFilters : currentPack().expandAllFilters;
      }
    });
  }

  function translateDynamic(){ translateStatic(); translateFilters(); translateProjectCards(); translateHero(); wrapTagBoxes(); enhanceModal(); setupHeroSwipe(); setupMobileFilters(); }

  const observer=new MutationObserver(()=>{ window.requestAnimationFrame(translateDynamic); });
  document.addEventListener('DOMContentLoaded', ()=>{ ensureLanguageMenu(); translateDynamic(); observer.observe(document.body,{childList:true,subtree:true}); window.addEventListener('resize', translateDynamic); });
})();
