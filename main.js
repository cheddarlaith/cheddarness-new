// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // -----------------------
  // Magnetic links/buttons
  // -----------------------
  const magnets = Array.from(document.querySelectorAll(
    'header .site-nav a, header .brand-link, .cta-btn, .submit, .brand-text'
  ));
  magnets.forEach(el => {
    el.style.transform = 'translate3d(0,0,0)';
    el.style.transition = 'transform 0.12s ease';
    el.style.willChange = 'transform';
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const relX = (e.clientX - r.left) / r.width;
      const relY = (e.clientY - r.top) / r.height;
      const moveX = (relX - 0.5) * 18; // tweak strength
      const moveY = (relY - 0.5) * 12;
      el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate3d(0,0,0)';
    });
  });

  // -----------------------------------------
  // Horizontal scroll on wheel for galleries
  // -----------------------------------------
  document.querySelectorAll('.scroll-gallery').forEach(scroller => {
    scroller.addEventListener('wheel', (e) => {
      // Convert vertical wheel to horizontal scroll
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        scroller.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  });

  // ----------------------------------
  // Video hover preview (Videos page)
  // ----------------------------------
  if (!prefersReduced) {
    const PREVIEW_MS = 1800;
    document.querySelectorAll('.video-card video').forEach(v => {
      let t;
      v.addEventListener('mouseenter', () => {
        v.muted = true;
        v.currentTime = 0;
        v.play().catch(()=>{});
        clearTimeout(t);
        t = setTimeout(() => {
          v.pause(); // freeze on current frame
        }, PREVIEW_MS);
      });
      v.addEventListener('mouseleave', () => {
        clearTimeout(t);
        v.pause();
        v.currentTime = 0; // reset to poster
      });
    });
  }

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
