// I DID NOT CREATE THIS, I COPIED IT FROM A WEB PAGE SO I DONT KNOW HOW IT ACTUALLY WORKS. WHAT IS A STORAGE KEY? I DO NOT KNOW

(function () {
  var STORAGE_KEY = 'verdenzye-theme';
  var DARK_CLASS  = 'theme-darker';

  var btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;

  // apply saved preference on load
  if (localStorage.getItem(STORAGE_KEY) === DARK_CLASS) {
    document.body.classList.add(DARK_CLASS);
    btn.textContent = 'dark mode';
  } else {
    btn.textContent = 'darker than dark mode';
  }

  btn.addEventListener('click', function () {
    var isDarker = document.body.classList.toggle(DARK_CLASS);
    btn.textContent = isDarker ? 'dark mode' : 'darker than dark mode';
    localStorage.setItem(STORAGE_KEY, isDarker ? DARK_CLASS : '');
  });
})();
