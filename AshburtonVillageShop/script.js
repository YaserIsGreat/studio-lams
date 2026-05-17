const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible') });
}, {threshold: 0.08});

document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

window.addEventListener('scroll', () => {
  const bg = document.getElementById('heroBg');
  if(bg) bg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
}, {passive: true});