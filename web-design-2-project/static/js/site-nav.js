// do not touch, i don't exactly understand how this works but it does

(function () {
  var btn = document.getElementById('site-nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('site-nav-open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close nav when a link is clicked (mobile UX)
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('site-nav-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();
