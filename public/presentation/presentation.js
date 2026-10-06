document.documentElement.classList.add('js');
const chapters = [...document.querySelectorAll('.chapter')];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
let current = 0;
const prev = document.querySelector('#previous');
const next = document.querySelector('#next-chapter');
const chapterDialog = document.querySelector('#chapters-dialog');
const evidenceDialog = document.querySelector('#evidence-dialog');
const status = document.querySelector('#status');
const byId = id => document.getElementById(id);

function go(index) {
  const target = chapters[Math.max(0, Math.min(chapters.length - 1, index))];
  target.scrollIntoView({ behavior: reduceMotion.matches ? 'instant' : 'smooth', block: 'start' });
  history.replaceState(null, '', `#${target.id}`);
}
function update(index) {
  current = index;
  byId('current-count').textContent = String(index + 1).padStart(2, '0');
  byId('current-chapter').textContent = chapters[index].dataset.title;
  byId('progress-fill').style.width = `${(index + 1) / chapters.length * 100}%`;
  document.body.classList.toggle('light-chrome', chapters[index].classList.contains('light'));
  prev.disabled = index === 0;
  next.disabled = index === chapters.length - 1;
}
prev.addEventListener('click', () => go(current - 1));
next.addEventListener('click', () => go(current + 1));
let scrollFrame = 0;
addEventListener('scroll', () => {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    let nearest = 0;
    for (let i = 0; i < chapters.length; i++) {
      if (chapters[i].getBoundingClientRect().top <= innerHeight * .45) nearest = i;
    }
    if (nearest !== current) update(nearest);
    scrollFrame = 0;
  });
}, { passive: true });

const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
    const film = entry.target.querySelector('video');
    if (!entry.isIntersecting && film && !film.paused) film.pause();
  }
}, { threshold: .1 });
chapters.forEach(chapter => observer.observe(chapter));

const menu = byId('chapter-links');
chapters.forEach((chapter, index) => {
  const a = document.createElement('a');
  a.href = `#${chapter.id}`;
  const number = document.createElement('span');
  number.textContent = String(index + 1).padStart(2, '0');
  a.append(number, document.createTextNode(chapter.dataset.title));
  a.addEventListener('click', event => { event.preventDefault(); chapterDialog.close(); go(index); });
  menu.append(a);
});
byId('open-chapters').addEventListener('click', () => chapterDialog.showModal());
byId('open-sources').addEventListener('click', () => byId('sources-dialog').showModal());
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
});
async function fullscreen() {
  try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); }
  catch { status.textContent = 'Fullscreen is unavailable in this browser. Use your browser’s fullscreen control.'; }
}
byId('fullscreen').addEventListener('click', fullscreen);
document.addEventListener('fullscreenchange', () => { byId('fullscreen').textContent = document.fullscreenElement ? 'Exit fullscreen' : 'Fullscreen'; byId('fullscreen').setAttribute('aria-label', document.fullscreenElement ? 'Exit fullscreen' : 'Enter fullscreen'); });
addEventListener('keydown', event => {
  if (document.querySelector('dialog[open]') || event.ctrlKey || event.metaKey || event.altKey || /INPUT|TEXTAREA|SELECT|VIDEO/.test(event.target.tagName)) return;
  if (event.key === 'ArrowRight' || event.key === 'PageDown') { event.preventDefault(); go(current + 1); }
  else if (event.key === 'ArrowLeft' || event.key === 'PageUp') { event.preventDefault(); go(current - 1); }
  else if (event.key.toLowerCase() === 'f' && !event.target.closest('button,a')) { event.preventDefault(); fullscreen(); }
});

const pages = {
  home: { file: 'home-desktop.png', path: '/', label: 'home', copy: 'The energy of the club. An invitation to find your people.', alt: 'New CTC homepage with bold typography and handstand photography' },
  training: { file: 'training-desktop.png', path: '/chicago-calisthenics', label: 'the training', copy: 'Bodyweight strength, handstands and your next skill.', alt: 'The training page with its dark hero and an athlete on the bars' },
  people: { file: 'people-desktop.png', path: '/community', label: 'the people', copy: 'The real people who make this community what it is.', alt: 'CTC community page with club photography and a welcoming headline' },
  join: { file: 'join-desktop.png', path: '/join#weekly-training', label: 'train with us', copy: 'Sundays at Oak Street Beach. Wednesdays at Lake Shore Park.', alt: 'Weekly training section with Sunday and Wednesday locations and times' }
};
document.querySelectorAll('[data-page]').forEach(button => button.addEventListener('click', () => {
  const page = pages[button.dataset.page];
  document.querySelectorAll('[data-page]').forEach(other => { const selected = other === button; other.classList.toggle('selected', selected); other.setAttribute('aria-pressed', String(selected)); });
  byId('website-shot').src = `./assets/${page.file}`;
  byId('website-shot').alt = page.alt;
  byId('page-path').textContent = `ctc / ${page.label}`;
  byId('page-purpose').textContent = page.copy;
  byId('page-link').href = `https://ctc-nu-plum.vercel.app${page.path}`;
  status.textContent = `Showing ${page.label}. ${page.copy}`;
}));
byId('play-film').addEventListener('click', async () => {
  const video = byId('club-video');
  video.src = '/video/ctc-film-720.mp4';
  video.controls = true;
  video.closest('.film-frame').classList.add('playing');
  byId('play-film').hidden = true;
  try { await video.play(); } catch { status.textContent = 'Use the video controls to start the film.'; }
});
document.querySelectorAll('[data-tone]').forEach(button => button.addEventListener('click', () => {
  byId('identity-playground').dataset.tone = button.dataset.tone;
  document.querySelectorAll('.swatch').forEach(other => { const selected = other === button; other.classList.toggle('selected', selected); other.setAttribute('aria-pressed', String(selected)); });
}));
const evidence = {
  join: { title: 'Four 100s. The actual Google report.', html: '<img src="./assets/psi-join.png" alt="Google PageSpeed Insights report showing 100 Performance, Accessibility, Best Practices and SEO for the CTC Train with us page on mobile"><p class="evidence-caption">Train with us / Mobile · October 6, 2026, 2:18 PM CDT.<a target="_blank" rel="noopener" href="https://pagespeed.web.dev/analysis/https-ctc-nu-plum-vercel-app-join/njlspbxbtr?form_factor=mobile">Open the original report</a></p>' },
  home: { title: 'Homepage. The latest Google report.', html: '<div class="report-results"><div><span>Mobile</span><strong>98</strong><small>Performance</small></div><div><span>Desktop</span><strong>100</strong><small>Performance</small></div></div><p class="evidence-caption">Google PageSpeed Insights · October 6, 2026, 3:45 PM CDT. Accessibility, Best Practices and SEO scored 100 on both devices.<a target="_blank" rel="noopener" href="https://pagespeed.web.dev/analysis/https-ctc-nu-plum-vercel-app/zcyd5r15ty?form_factor=mobile">Open the original mobile report</a><a target="_blank" rel="noopener" href="https://pagespeed.web.dev/analysis/https-ctc-nu-plum-vercel-app/zcyd5r15ty?form_factor=desktop">Open the original desktop report</a></p>' },
  legacy: { title: 'Where the old navigation led.', html: '<img src="./assets/legacy-coming-soon.png" alt="The old CTC Coming soon page, the destination of Workouts, Info and Cart"><p class="evidence-caption">Workouts, Info and Cart led to this page. Reviewed October 6, 2026.<a target="_blank" rel="noopener" href="https://www.chicagotrainingclub.com/coming-soon">View the old destination</a></p>' }
};
document.querySelectorAll('[data-evidence]').forEach(button => button.addEventListener('click', () => {
  const report = evidence[button.dataset.evidence];
  byId('evidence-title').textContent = report.title;
  byId('evidence-content').innerHTML = report.html;
  evidenceDialog.showModal();
}));
const initial = chapters.findIndex(chapter => `#${chapter.id}` === location.hash);
update(initial < 0 ? 0 : initial);
chapters[initial < 0 ? 0 : initial].classList.add('is-visible');
if (initial >= 0) {
  document.fonts.ready.then(() => {
    chapters[initial].scrollIntoView({ behavior: 'instant', block: 'start' });
    update(initial);
  });
}
let assemblyTimer;
byId('replay-motion').addEventListener('click', () => {
  const demo = document.querySelector('.assembly-text');
  if (reduceMotion.matches) { status.textContent = 'The complete wordmark stays visible because reduced motion is enabled.'; return; }
  clearTimeout(assemblyTimer);
  demo.classList.remove('replay');
  requestAnimationFrame(() => requestAnimationFrame(() => {
    demo.classList.add('replay');
    assemblyTimer = setTimeout(() => demo.classList.remove('replay'), 2100);
  }));
});
