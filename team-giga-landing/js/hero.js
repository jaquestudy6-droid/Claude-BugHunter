/* ==========================================================================
   TEAM GIGA — HERO
   1) Abertura: a barra cai, bate no chão e a onda de choque abre o site.
   2) Parallax suave com o mouse (só em desktop).
   Tudo com Web Animations API (sem dependências).
   ========================================================================== */
(() => {
  'use strict';

  const root  = document.documentElement;
  const stage = document.getElementById('stage');
  const hero  = document.getElementById('top');
  if (!stage || !hero) return;

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const rand = (a, b) => a + Math.random() * (b - a);

  /* ------------------------------------------------------------------
     Parallax (mouse) — usa vars --mx/--my lidas pelo CSS
     ------------------------------------------------------------------ */
  const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduce   = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (canHover && !reduce) {
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      hero.style.setProperty('--mx', cx.toFixed(3));
      hero.style.setProperty('--my', cy.toFixed(3));
      raf = Math.abs(tx - cx) > 0.002 || Math.abs(ty - cy) > 0.002 ? requestAnimationFrame(tick) : 0;
    };
    addEventListener('pointermove', (e) => {
      tx = (e.clientX / innerWidth) * 2 - 1;
      ty = (e.clientY / innerHeight) * 2 - 1;
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: true });
  }

  /* ------------------------------------------------------------------
     Abertura
     ------------------------------------------------------------------ */
  if (!root.classList.contains('intro-on')) return; // sem abertura: já nasce aberto

  const body   = $('.barbell__body');
  const wrap   = $('.barbell');
  const glow   = $('.barbell__glow');
  const plates = $$('.barbell .p');
  const fx     = $('.fx');
  const flash  = $('.fx__flash');
  const ring1  = $('.fx__ring');
  const ring2  = $('.fx__ring--2');
  const shTop  = $('.shutter--top');
  const shBot  = $('.shutter--bot');

  const W = innerWidth, H = innerHeight;
  const sr = stage.getBoundingClientRect();
  const wr = wrap.getBoundingClientRect();

  // Se o hero é bem mais alto que a janela (celular deitado etc.), a barra
  // cairia fora da tela: abre direto, sem teatro.
  if (sr.height > H * 1.25 || scrollY > 8) {
    root.classList.add('is-skip', 'is-live');
    root.classList.remove('intro-on');
    return;
  }

  // ponto do impacto (centro da barra) relativo ao stage
  const cx = wr.left + wr.width / 2 - sr.left;
  const cy = wr.top + wr.height / 2 - sr.top;
  const floorY = wr.bottom - sr.top;
  const startY = -(wr.bottom + 40);
  const rMax = Math.hypot(Math.max(cx, W - cx), Math.max(cy, H - cy)) + 40;

  // tempos (ms)
  const DELAY = 160;                 // respiro antes da queda
  const DROP  = 1300;                // duração total da animação da barra (queda + quiques)
  const FALL  = DROP * 0.46;         // só a queda
  const HIT   = DELAY + FALL;        // instante do impacto
  const OPEN  = 1000;                // duração da abertura (cortina)

  fx.style.setProperty('--fx-x', (cx / W * 100).toFixed(1) + '%');
  fx.style.setProperty('--fx-y', (cy / H * 100).toFixed(1) + '%');

  const anims = [];
  const add = (a) => (anims.push(a), a);

  /* 1) A barra cai e quica ------------------------------------------- */
  const g = 'cubic-bezier(0.55, 0.05, 0.95, 0.5)';      // gravidade (acelera)
  const up = 'cubic-bezier(0.2, 0.7, 0.4, 1)';          // sobe desacelerando
  const dn = 'cubic-bezier(0.6, 0, 0.9, 0.6)';          // desce acelerando
  const bounce = Math.min(30, H * 0.032);
  const dropAnim = add(body.animate([
    { transform: `translateY(${startY}px) rotate(-1.2deg)`, offset: 0, easing: g },
    { transform: 'translateY(0) rotate(0deg) scale(1.0, 1.0)', offset: 0.46, easing: up },
    { transform: `translateY(${-bounce}px) rotate(0.2deg)`, offset: 0.60, easing: dn },
    { transform: 'translateY(0) rotate(0deg)', offset: 0.72, easing: up },
    { transform: `translateY(${-bounce * 0.28}px)`, offset: 0.82, easing: dn },
    { transform: 'translateY(0)', offset: 0.90 },
    { transform: 'translateY(0)', offset: 1 },
  ], { duration: DROP, delay: DELAY, fill: 'both' }));

  // luz sob a barra: cresce enquanto ela se aproxima do chão e explode no impacto
  add(glow.animate([
    { opacity: 0, transform: 'scaleX(0.35)', offset: 0 },
    { opacity: 0.55, transform: 'scaleX(0.7)', offset: 0.9 },
    { opacity: 1, transform: 'scaleX(1.05)', offset: 1 },
  ], { duration: FALL, delay: DELAY, easing: 'ease-in', fill: 'both' }));
  add(glow.animate([
    { opacity: 1, transform: 'scale(1.05, 1.6)' },
    { opacity: 1, transform: 'scale(1, 1)' },
  ], { duration: 700, delay: HIT, easing: 'ease-out', fill: 'both' }));

  // anilhas chacoalham e "amassam" um pouco no impacto
  plates.forEach((p, i) => {
    add(p.animate([
      { transform: 'translateY(0) scale(1, 1)' },
      { transform: 'translateY(-4px) scale(1.1, 0.95)', offset: 0.14 },
      { transform: 'translateY(1.5px) scale(0.98, 1.01)', offset: 0.42 },
      { transform: 'translateY(-1px)', offset: 0.7 },
      { transform: 'translateY(0) scale(1, 1)' },
    ], { duration: 650, delay: HIT + (i % 6) * 14, easing: 'ease-out' }));
  });

  /* 2) Impacto: tremor de tela + flash + ondas de choque -------------- */
  const s = Math.min(11, W * 0.012);
  const z = 'scale(1.03)'; // leve zoom durante o tremor: nunca aparece fresta nas laterais
  add(stage.animate([
    { transform: 'translate(0, 0) scale(1)' },
    { transform: `translate(${-s}px, ${s * 0.8}px) rotate(-0.25deg) ${z}`, offset: 0.08 },
    { transform: `translate(${s * 0.9}px, ${-s * 0.7}px) rotate(0.2deg) ${z}`, offset: 0.2 },
    { transform: `translate(${-s * 0.6}px, ${s * 0.45}px) ${z}`, offset: 0.36 },
    { transform: `translate(${s * 0.35}px, ${-s * 0.25}px) ${z}`, offset: 0.55 },
    { transform: `translate(${-s * 0.15}px, ${s * 0.1}px) scale(1.01)`, offset: 0.78 },
    { transform: 'translate(0, 0) scale(1)' },
  ], { duration: 620, delay: HIT, easing: 'linear' }));

  add(flash.animate([
    { opacity: 0 },
    { opacity: 0.9, offset: 0.1 },
    { opacity: 0.25, offset: 0.4 },
    { opacity: 0 },
  ], { duration: 620, delay: HIT, easing: 'ease-out' }));

  // onda de choque (anéis) + cortina que se abre a partir do eixo da barra
  const openEase = 'cubic-bezier(0.16, 1, 0.3, 1)';     // arranca rápido, assenta devagar
  const size = rMax * 2;
  [ring1, ring2].forEach((r, i) => {
    r.style.width = r.style.height = size + 'px';
    r.style.left = cx + 'px';
    r.style.top = cy + 'px';
    add(r.animate([
      { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
      { transform: 'translate(-50%, -50%) scale(0.5)', opacity: 0.85, offset: 0.5 },
      { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 },
    ], { duration: OPEN + i * 180, delay: HIT + i * 90, easing: openEase, fill: 'both' }));
  });

  const OPEN_DELAY = HIT + 50;                      // um micro-respiro: o impacto "trava" a tela antes de abrir
  const openAnim = add(shTop.animate(
    [{ transform: 'translateY(0)' }, { transform: 'translateY(-101%)' }],
    { duration: OPEN, delay: OPEN_DELAY, easing: openEase, fill: 'both' }));
  add(shBot.animate(
    [{ transform: 'translateY(0)' }, { transform: 'translateY(101%)' }],
    { duration: OPEN * 0.7, delay: OPEN_DELAY, easing: openEase, fill: 'both' }));

  /* 3) Pó de magnésio ---------------------------------------------------- */
  const n = W < 700 ? 22 : 38;
  for (let i = 0; i < n; i++) {
    const d = document.createElement('i');
    d.className = 'dust';
    const x = rand(wr.left + 10, wr.right - 10) - sr.left;
    const sz = rand(10, 34);
    d.style.cssText = `--s:${sz}px;left:${x}px;top:${floorY - rand(0, 12)}px`;
    fx.appendChild(d);
    const dir = (x - cx) / (W / 2);                       // -1 … 1: abre pra fora
    const dx = dir * rand(40, W * 0.16) + rand(-36, 36);
    const dy = -rand(34, H * 0.2);
    add(d.animate([
      { opacity: 0, transform: 'translate(0, 0) scale(0.35)' },
      { opacity: rand(0.55, 0.95), offset: 0.16 },
      { opacity: 0, transform: `translate(${dx}px, ${dy}px) scale(${rand(2, 4.2)})` },
    ], { duration: rand(650, 1200), delay: HIT + rand(0, 90), easing: 'cubic-bezier(0.1, 0.75, 0.3, 1)', fill: 'both' }));
  }

  /* 4) Libera o conteúdo logo depois do impacto -------------------------- */
  const liveTimer = setTimeout(() => root.classList.add('is-live'), HIT + 60);

  /* 5) Limpeza ------------------------------------------------------------ */
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    clearTimeout(liveTimer);
    root.classList.add('is-live');
    root.classList.remove('intro-on');   // o CSS do estado fechado (cortina) sai de cena…
    anims.forEach((a) => { try { a.cancel(); } catch (_) {} }); // …e os efeitos são descartados
    $$('.dust', fx).forEach((d) => d.remove());
    ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((ev) => removeEventListener(ev, skip));
  };

  // O que o impacto tinha como resultado final precisa estar aplicado ANTES de cancelar
  // (barra assentada no chão = posição natural do CSS, então cancelar é seguro).
  const skip = () => {
    if (done) return;
    root.classList.add('is-skip', 'is-live');
    finish();
  };

  ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((ev) =>
    addEventListener(ev, skip, { passive: true, once: false }));

  openAnim.finished.then(() => setTimeout(finish, 80)).catch(() => finish());
  // segurança extra
  setTimeout(finish, HIT + OPEN + 1500);
})();
