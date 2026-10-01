/* Y.A.S — comportements partagés : menu, révélations, compteurs, onglets, respiration, cours suspendus, tarifs, formulaire */
document.addEventListener('DOMContentLoaded', () => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* en-tête */
  const hdr = $('#hdr');
  const onScroll = () => hdr && hdr.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', onScroll); onScroll();
  const burger = $('#burger'), nav = $('#nav');
  burger && burger.addEventListener('click', () => nav.classList.toggle('open'));
  $$('.nav-drop-btn').forEach(b => b.addEventListener('click', e => {
    if (innerWidth > 1060) { e.stopPropagation(); b.parentElement.classList.toggle('open'); }
  }));
  document.addEventListener('click', () => $$('.nav-drop.open').forEach(d => d.classList.remove('open')));

  /* apparition au scroll + compteurs animés */
  const countUp = el => {
    const end = parseFloat(el.dataset.count), dur = 1400, t0 = performance.now();
    const step = t => {
      const p = Math.min((t - t0) / dur, 1), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
      el.textContent = v; if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('vis');
    $$('[data-count]', e.target).forEach(countUp);
    if (e.target.dataset.count) countUp(e.target);
    io.unobserve(e.target);
  }), { threshold: .15 });
  $$('.reveal,.impact,.timeline,.stats').forEach(el => io.observe(el));

  /* onglets « Qui êtes-vous ? » */
  $$('[data-tabs]').forEach(box => {
    const tabs = $$('.tab', box), panels = $$('.panel', box);
    const show = id => {
      tabs.forEach(t => t.classList.toggle('on', t.dataset.t === id));
      panels.forEach(p => p.classList.toggle('on', p.id === id));
    };
    tabs.forEach(t => t.addEventListener('click', () => show(t.dataset.t)));
    show(tabs[0].dataset.t);
  });

  /* respiration guidée (4 - 2 - 6 secondes) */
  const orb = $('#orb'), bBtn = $('#breathBtn');
  if (orb && bBtn) {
    let timer = null;
    const label = $('span', orb);
    const cycle = () => {
      label.textContent = 'Inspirez'; orb.style.transitionDuration = '4s'; orb.style.transform = 'scale(1.3)';
      timer = setTimeout(() => { label.textContent = 'Gardez'; timer = setTimeout(() => {
        label.textContent = 'Expirez'; orb.style.transitionDuration = '6s'; orb.style.transform = 'scale(.82)';
        timer = setTimeout(cycle, 6000); }, 2000); }, 4000);
    };
    bBtn.addEventListener('click', () => {
      if (timer) { clearTimeout(timer); timer = null; label.textContent = 'Respirez'; orb.style.transform = 'none'; bBtn.textContent = 'Commencer'; }
      else { cycle(); bBtn.textContent = 'Arrêter'; }
    });
  }

  /* cours suspendus */
  const mats = $$('.mat');
  if (mats.length) {
    const msg = $('#matsMsg');
    const upd = () => {
      const n = mats.filter(m => m.classList.contains('gift')).length;
      msg.textContent = n === 0 ? 'Cliquez sur un tapis pour offrir un cours suspendu.'
        : n === 1 ? '1 cours suspendu : une personne pratique gratuitement grâce à vous.'
        : n + ' cours suspendus : ' + n + ' personnes pratiquent gratuitement grâce à vous.';
    };
    mats.forEach(m => m.addEventListener('click', () => { m.classList.toggle('gift'); $('span', m).textContent = m.classList.contains('gift') ? 'Offert ♥' : 'Mon cours'; upd(); }));
    upd();
  }

  /* curseur de tarif libre et conscient */
  const rg = $('#priceRange');
  if (rg) {
    const out = $('#priceOut'), msg = $('#priceMsg');
    const upd = () => {
      const v = +rg.value; out.textContent = v + ' €';
      msg.textContent = v === 0 ? 'Gratuit : accès offert aux bénéficiaires de minima sociaux (sur déclaratif) et aux personnes en grande précarité.'
        : v < 10 ? 'Tarif solidaire : chaque participation compte, même modeste. Merci !'
        : 'Tarif libre et conscient (repère indicatif 10–15 €) : votre contribution aide à financer les cours suspendus et à rémunérer les enseignantes.';
    };
    rg.addEventListener('input', upd); upd();
  }

  /* formulaire de contact → ouvre le client mail (aucun serveur, aucune donnée stockée) */
  const f = $('#contactForm');
  if (f) f.addEventListener('submit', e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f));
    const body = `Bonjour,\n\n${d.msg}\n\n— ${d.nom}\nProfil : ${d.profil}\nRetour souhaité : ${d.email}`;
    location.href = `mailto:${f.dataset.to}?subject=${encodeURIComponent('[Site Y.A.S] ' + d.profil)}&body=${encodeURIComponent(body)}`;
  });
});
