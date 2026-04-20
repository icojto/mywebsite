export function initHeroSlider(root, slides) {
  if (!root) return;
  let index = 0;
  root.innerHTML = `
    ${slides.map((slide, i) => `
      <article class="hero-slide ${i === 0 ? 'is-active' : ''}" data-hero-slide>
        <div class="hero-slide__media"><img src="${slide.image}" alt="${slide.alt}" /></div>
        <div class="hero-slide__overlay"></div>
        <div class="hero-slide__content">
          <div class="hero-slide__meta">
            ${slide.badges.map((badge, badgeIndex) => `<span class="${badgeIndex === 0 ? 'pill pill-accent' : 'pill pill-blue'}">${badge}</span>`).join(' ')}
          </div>
          <div>
            <h3 class="hero-slide__title">${slide.title}</h3>
            <div class="hero-slide__copy">${slide.copy}</div>
          </div>
        </div>
      </article>
    `).join('')}
    <div class="hero-slider__nav">
      <button class="btn icon-btn" type="button" data-hero-prev aria-label="Previous slide">←</button>
      <button class="btn icon-btn" type="button" data-hero-next aria-label="Next slide">→</button>
    </div>
  `;
  const slideEls = [...root.querySelectorAll('[data-hero-slide]')];
  const sync = () => slideEls.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
  root.querySelector('[data-hero-prev]').addEventListener('click', () => { index = (index - 1 + slides.length) % slides.length; sync(); });
  root.querySelector('[data-hero-next]').addEventListener('click', () => { index = (index + 1) % slides.length; sync(); });
}
