document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.link-btn');

  links.forEach(link => {
    link.addEventListener('pointerdown', (e) => {
      const ripple = document.createElement('span');
      const rect = link.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.4;

      ripple.style.position = 'absolute';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(244,166,36,0.25)';
      ripple.style.pointerEvents = 'none';
      ripple.style.transform = 'scale(0)';
      ripple.style.opacity = '1';
      ripple.style.transition = 'transform .6s ease-out, opacity .6s ease-out';
      ripple.style.zIndex = '0';

      link.appendChild(ripple);
      requestAnimationFrame(() => {
        ripple.style.transform = 'scale(1)';
        ripple.style.opacity = '0';
      });

      setTimeout(() => ripple.remove(), 650);
    });
  });
});
