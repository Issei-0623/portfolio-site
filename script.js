// Photogram ギャラリー切り替え
const photogramMain = document.getElementById('photogramMain');
document.querySelectorAll('.photogram-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    photogramMain.src = thumb.src;
    photogramMain.alt = thumb.alt;
    document.querySelectorAll('.photogram-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});

const mainNav = document.getElementById('mainNav');
const backToTop = document.getElementById('backToTop');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#mainNav .nav-link');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // ナビの影
  mainNav.classList.toggle('scrolled', scrollY > 60);

  // トップへ戻るボタン
  backToTop.classList.toggle('visible', scrollY > 300);

  // アクティブなナビリンクをハイライト
  let current = '';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
