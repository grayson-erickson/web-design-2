(function () {
  var btn = document.getElementById('site-nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;

  function openNav() {
    nav.classList.add('site-nav-open');
    document.body.classList.add('site-nav-open');
    btn.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    nav.classList.remove('site-nav-open');
    document.body.classList.remove('site-nav-open');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', function () {
    if (nav.classList.contains('site-nav-open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Close when a nav link is clicked
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeNav);
  });

  // Close when clicking the dim overlay (outside the nav)
  document.addEventListener('click', function (e) {
    if (
      nav.classList.contains('site-nav-open') &&
      !nav.contains(e.target) &&
      e.target !== btn &&
      !btn.contains(e.target)
    ) {
      closeNav();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('site-nav-open')) {
      closeNav();
      btn.focus();
    }
  });
})();
