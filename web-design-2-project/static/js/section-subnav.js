(function () {
  // Initialise every .section-subnav on the page (supports multiple per page) -- I got this off the web lol
  document.querySelectorAll('.section-subnav').forEach(function (nav) {
    var toggle   = nav.querySelector('.section-subnav-toggle');
    var linksBox = nav.querySelector('.section-subnav-links');
    var links    = linksBox ? linksBox.querySelectorAll('a') : [];

    if (!toggle || !linksBox || !links.length) return;

    /* ── Hamburger toggle ── */
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('subnav-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* ── Click-based active highlight ── */
    links.forEach(function (a) {
      a.addEventListener('click', function () {
        links.forEach(function (l) { l.classList.remove('active'); });
        a.classList.add('active');
        // Close the dropdown on mobile after selection
        nav.classList.remove('subnav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    /* ── Highlight first link by default ── */
    links[0].classList.add('active');
  });
})();
